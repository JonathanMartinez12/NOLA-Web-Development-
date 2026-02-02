import { NextRequest, NextResponse } from 'next/server';

interface LighthouseAudit {
  id: string;
  title: string;
  description: string;
  score: number | null;
  displayValue?: string;
  details?: {
    items?: Array<Record<string, unknown>>;
    type?: string;
    headings?: Array<Record<string, unknown>>;
  };
}

interface LighthouseCategory {
  id: string;
  title: string;
  score: number | null;
  auditRefs: Array<{ id: string; weight: number }>;
}

interface PageSpeedResponse {
  lighthouseResult: {
    categories: {
      performance: LighthouseCategory;
      accessibility: LighthouseCategory;
      'best-practices': LighthouseCategory;
      seo: LighthouseCategory;
    };
    audits: Record<string, LighthouseAudit>;
    configSettings: {
      emulatedFormFactor: string;
    };
  };
  loadingExperience?: {
    metrics: Record<string, {
      percentile: number;
      distributions: Array<{ min: number; max: number; proportion: number }>;
      category: string;
    }>;
    overall_category: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Validate URL format
    let validatedUrl: string;
    try {
      const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
      validatedUrl = parsed.toString();
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format. Please enter a valid website URL.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY || '';
    const apiBase = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

    // Run both mobile and desktop audits in parallel
    const categories = 'PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO';

    const mobileUrl = `${apiBase}?url=${encodeURIComponent(validatedUrl)}&category=${categories}&strategy=MOBILE${apiKey ? `&key=${apiKey}` : ''}`;
    const desktopUrl = `${apiBase}?url=${encodeURIComponent(validatedUrl)}&category=${categories}&strategy=DESKTOP${apiKey ? `&key=${apiKey}` : ''}`;

    const [mobileRes, desktopRes] = await Promise.all([
      fetch(mobileUrl, { next: { revalidate: 0 } }),
      fetch(desktopUrl, { next: { revalidate: 0 } }),
    ]);

    if (!mobileRes.ok || !desktopRes.ok) {
      const errorData = !mobileRes.ok ? await mobileRes.json() : await desktopRes.json();
      const errorMessage = errorData?.error?.message || 'Failed to analyze the website. Please check the URL and try again.';
      return NextResponse.json(
        { error: errorMessage },
        { status: 422 }
      );
    }

    const mobileData: PageSpeedResponse = await mobileRes.json();
    const desktopData: PageSpeedResponse = await desktopRes.json();

    // Extract key audits for actionable insights
    const keyAuditIds = [
      'first-contentful-paint',
      'largest-contentful-paint',
      'total-blocking-time',
      'cumulative-layout-shift',
      'speed-index',
      'interactive',
      'render-blocking-resources',
      'unused-css-rules',
      'unused-javascript',
      'uses-optimized-images',
      'uses-responsive-images',
      'uses-text-compression',
      'uses-rel-preconnect',
      'server-response-time',
      'redirects',
      'dom-size',
      'meta-description',
      'document-title',
      'http-status-code',
      'is-crawlable',
      'robots-txt',
      'hreflang',
      'canonical',
      'font-size',
      'link-text',
      'tap-targets',
      'viewport',
      'image-alt',
      'color-contrast',
      'heading-order',
      'html-has-lang',
      'html-lang-valid',
      'label',
      'list',
      'listitem',
    ];

    const extractAudits = (data: PageSpeedResponse) => {
      const audits: Record<string, {
        title: string;
        description: string;
        score: number | null;
        displayValue?: string;
      }> = {};

      for (const id of keyAuditIds) {
        const audit = data.lighthouseResult.audits[id];
        if (audit) {
          audits[id] = {
            title: audit.title,
            description: audit.description,
            score: audit.score,
            displayValue: audit.displayValue,
          };
        }
      }

      return audits;
    };

    const result = {
      url: validatedUrl,
      timestamp: new Date().toISOString(),
      mobile: {
        scores: {
          performance: Math.round((mobileData.lighthouseResult.categories.performance?.score || 0) * 100),
          accessibility: Math.round((mobileData.lighthouseResult.categories.accessibility?.score || 0) * 100),
          bestPractices: Math.round((mobileData.lighthouseResult.categories['best-practices']?.score || 0) * 100),
          seo: Math.round((mobileData.lighthouseResult.categories.seo?.score || 0) * 100),
        },
        audits: extractAudits(mobileData),
      },
      desktop: {
        scores: {
          performance: Math.round((desktopData.lighthouseResult.categories.performance?.score || 0) * 100),
          accessibility: Math.round((desktopData.lighthouseResult.categories.accessibility?.score || 0) * 100),
          bestPractices: Math.round((desktopData.lighthouseResult.categories['best-practices']?.score || 0) * 100),
          seo: Math.round((desktopData.lighthouseResult.categories.seo?.score || 0) * 100),
        },
        audits: extractAudits(desktopData),
      },
      fieldData: mobileData.loadingExperience?.metrics ? {
        overall: mobileData.loadingExperience.overall_category,
        metrics: mobileData.loadingExperience.metrics,
      } : null,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Audit API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while running the audit. Please try again.' },
      { status: 500 }
    );
  }
}

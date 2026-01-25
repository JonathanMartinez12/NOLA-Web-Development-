import { NextRequest, NextResponse } from 'next/server';

const PAGESPEED_API_URL = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');
  const strategy = searchParams.get('strategy') || 'mobile'; // mobile or desktop

  if (!url) {
    return NextResponse.json(
      { error: 'URL parameter is required' },
      { status: 400 }
    );
  }

  // Validate URL format
  try {
    new URL(url);
  } catch {
    return NextResponse.json(
      { error: 'Invalid URL format. Please include http:// or https://' },
      { status: 400 }
    );
  }

  try {
    const apiUrl = new URL(PAGESPEED_API_URL);
    apiUrl.searchParams.set('url', url);
    apiUrl.searchParams.set('strategy', strategy);
    // Use append for multiple category values (set would overwrite)
    apiUrl.searchParams.append('category', 'performance');
    apiUrl.searchParams.append('category', 'accessibility');
    apiUrl.searchParams.append('category', 'best-practices');
    apiUrl.searchParams.append('category', 'seo');

    // Add API key if available (increases quota from 400/day to 25,000/day)
    if (process.env.GOOGLE_PAGESPEED_API_KEY) {
      apiUrl.searchParams.set('key', process.env.GOOGLE_PAGESPEED_API_KEY);
    }

    const response = await fetch(apiUrl.toString(), {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error?.message || 'Failed to analyze URL' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Extract the key metrics we want to display
    const lighthouse = data.lighthouseResult;
    const categories = lighthouse?.categories || {};
    const audits = lighthouse?.audits || {};

    const result = {
      url: data.id,
      fetchTime: data.analysisUTCTimestamp,
      strategy,
      scores: {
        performance: Math.round((categories.performance?.score || 0) * 100),
        accessibility: Math.round((categories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
        seo: Math.round((categories.seo?.score || 0) * 100),
      },
      metrics: {
        firstContentfulPaint: {
          value: audits['first-contentful-paint']?.displayValue || 'N/A',
          score: audits['first-contentful-paint']?.score || 0,
        },
        largestContentfulPaint: {
          value: audits['largest-contentful-paint']?.displayValue || 'N/A',
          score: audits['largest-contentful-paint']?.score || 0,
        },
        totalBlockingTime: {
          value: audits['total-blocking-time']?.displayValue || 'N/A',
          score: audits['total-blocking-time']?.score || 0,
        },
        cumulativeLayoutShift: {
          value: audits['cumulative-layout-shift']?.displayValue || 'N/A',
          score: audits['cumulative-layout-shift']?.score || 0,
        },
        speedIndex: {
          value: audits['speed-index']?.displayValue || 'N/A',
          score: audits['speed-index']?.score || 0,
        },
        timeToInteractive: {
          value: audits['interactive']?.displayValue || 'N/A',
          score: audits['interactive']?.score || 0,
        },
      },
      opportunities: Object.values(audits)
        .filter((audit: any) => audit.details?.type === 'opportunity' && audit.score !== null && audit.score < 1)
        .map((audit: any) => ({
          title: audit.title,
          description: audit.description,
          savings: audit.details?.overallSavingsMs
            ? `${Math.round(audit.details.overallSavingsMs)}ms`
            : audit.details?.overallSavingsBytes
              ? `${Math.round(audit.details.overallSavingsBytes / 1024)}KB`
              : null,
        }))
        .slice(0, 5),
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('PageSpeed API error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze website. Please try again.' },
      { status: 500 }
    );
  }
}

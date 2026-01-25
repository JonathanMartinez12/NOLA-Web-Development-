'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Only dynamically import the heavy shader when actually needed
const HeroGradient = dynamic(() => import('./HeroGradient'), {
  ssr: false,
  loading: () => null,
});

export default function HeroBackground() {
  const [shouldLoadShader, setShouldLoadShader] = useState(false);

  useEffect(() => {
    // Check if desktop AND user doesn't prefer reduced motion
    const isDesktop = window.innerWidth >= 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Only load the heavy Three.js shader on desktop with no motion preference
    if (isDesktop && !prefersReducedMotion) {
      setShouldLoadShader(true);
    }
  }, []);

  // On mobile/reduced-motion: render nothing (CSS gradient handles background)
  // On desktop: render the shader gradient
  if (!shouldLoadShader) {
    return null;
  }

  return <HeroGradient />;
}

'use client';

import { useEffect, useState } from 'react';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';

export default function HeroGradient() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only load heavy 3D shader on desktop devices (768px+)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Don't render the heavy Three.js shader on mobile
  if (!isDesktop) {
    return null;
  }

  return (
    <ShaderGradientCanvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <ShaderGradient
        type="waterPlane"
        animate="on"
        uTime={0}
        uSpeed={0.2}
        uStrength={1}
        uDensity={1.2}
        uFrequency={3.5}
        uAmplitude={2}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={0}
        rotationZ={0}
        color1="#0ea5e9"
        color2="#d946ef"
        color3="#0f172a"
        reflection={0.1}
        wireframe={false}
        shader="defaults"
        cAzimuthAngle={180}
        cPolarAngle={90}
        cDistance={3.5}
        cameraZoom={1}
        lightType="3d"
        brightness={1.1}
        envPreset="city"
        grain="off"
      />
    </ShaderGradientCanvas>
  );
}

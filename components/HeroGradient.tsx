'use client';

import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';

export default function HeroGradient() {
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

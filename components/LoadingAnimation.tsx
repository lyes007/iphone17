'use client';

import { useState, useEffect } from 'react';
import { LiquidMetal } from '@paper-design/shaders-react';

export default function LoadingAnimation() {
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Show component immediately, then load image
    setImageLoaded(true);
    
    // Preload the image
    const img = new Image();
    img.src = '/logo.png';
    
    img.onload = () => {
      // Start fade-in animation after image is loaded
      setTimeout(() => {
        setLogoOpacity(1);
      }, 300);
    };

    img.onerror = () => {
      // Even if image fails to load, still show the component
      setTimeout(() => {
        setLogoOpacity(1);
      }, 300);
    };

    // Fallback: start animation even if image takes too long
    const fallbackTimer = setTimeout(() => {
      setLogoOpacity(1);
    }, 500);

    return () => {
      img.onload = null;
      img.onerror = null;
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#FFFFFF',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999,
    }}>
      {imageLoaded && (
        <div style={{
          opacity: logoOpacity,
          transform: logoOpacity === 1 
            ? 'scale(1) translateY(0)' 
            : 'scale(0.85) translateY(20px)',
          filter: logoOpacity === 1 
            ? 'blur(0px)' 
            : 'blur(10px)',
          transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), filter 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <LiquidMetal
            image="/logo.png"
            repetition={3.6}
            contour={0.67}
            distortion={0.07}
            softness={1}
            angle={-298}
            shiftRed={0}
            shiftBlue={-0.06}
            speed={1}
            scale={1.0}
            colorBack="#00000000"
            colorTint="#FFFFFF"
            style={{
              backgroundColor: '#00000000',
              border: 'none',
              outline: 'none',
              height: '120px',
              width: '120px',
            }}
          />
        </div>
      )}
    </div>
  );
}


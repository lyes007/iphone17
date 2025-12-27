'use client';

import { useState, useEffect } from 'react';
import { LiquidMetal } from '@paper-design/shaders-react';

export default function Navbar() {
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [logoScale, setLogoScale] = useState(0.8);

  useEffect(() => {
    // Start fade-in and grow animation after a brief delay
    const timer = setTimeout(() => {
      setLogoOpacity(1);
      setLogoScale(1);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="liquid-glass">
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          overflow: 'visible',
        }}>
          <div style={{
            minHeight: '34px',
            width: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'visible',
            position: 'relative',
          }}>
            <div style={{
              opacity: logoOpacity,
              transform: `scale(${logoScale})`,
              transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
              overflow: 'visible',
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
                  height: '28px',
                  width: '80px',
                  overflow: 'visible',
                }}
              />
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
        }}>
          <a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Overview</a>
          <a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Features</a>
          <a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Specs</a>
          <a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Buy</a>
        </div>
      </div>
    </nav>
  );
}


'use client';

import { useState, useEffect } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Start fading out after 3 seconds

    // Complete loading transition
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3800); // Complete transition after 3.8 seconds

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}>
        <LoadingAnimation />
      </div>
    );
  }

  // Blank white page after loading with fade in
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      animation: 'fadeIn 1s ease-in',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '100px',
      position: 'relative',
    }}>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .image-container {
            flex: 1;
            padding: 20px !important;
            min-height: calc(100vh - 130px);
          }
        }
      `}</style>
      <Navbar />
      <div className="image-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1400px',
        padding: '40px 20px',
        animation: 'slideUp 1.2s ease-out 0.3s both',
        flex: '1',
        position: 'relative',
        zIndex: 1,
      }}>
        <img 
          src="/iphone-17_overview__d4o74q28yjma.png" 
          alt="iPhone 17 Overview" 
          onError={(e) => {
            console.error('Image failed to load:', e);
            console.error('Image src:', e.currentTarget.src);
          }}
          onLoad={() => {
            console.log('Image loaded successfully');
          }}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            display: 'block',
            visibility: 'visible',
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}


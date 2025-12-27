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
    }, 5500); // Start fading out after 5.5 seconds

    // Complete loading transition
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 6500); // Complete transition after 6.5 seconds

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 1s ease-out',
      }}>
        <LoadingAnimation />
      </div>
    );
  }

  // Blank white page after loading with fade in
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#FFFFFF',
      animation: 'fadeIn 1s ease-in',
    }}>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      <Navbar />
    </div>
  );
}


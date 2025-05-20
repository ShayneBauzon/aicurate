
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

const textToAnimate = "Our AI-powered browser extension helps you verify information by detecting outdated, biased, or false content in real-time. Browse the web with confidence, knowing AIcurate has your back.";
const animationDelayStep = 0.3; // seconds per word

// Fisher-Yates (Knuth) Shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]; // Create a copy
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
}

export default function HeroSection() {
  const [animatedWords, setAnimatedWords] = useState<Array<{ text: string; delay: string }> | null>(null);

  useEffect(() => {
    const originalWords = textToAnimate.split(' ');
    const numberOfWords = originalWords.length;
    
    const delayIndices = Array.from({ length: numberOfWords }, (_, i) => i);
    const shuffledDelayIndices = shuffleArray(delayIndices);

    const words = originalWords.map((word, index) => ({
      text: word,
      delay: `${shuffledDelayIndices[index] * animationDelayStep}s`,
    }));
    setAnimatedWords(words);
  }, []); // Empty dependency array ensures this runs once on client mount

  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
              Verify Information <span className="text-primary">Instantly</span> with AIcurate
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl">
              {animatedWords ? (
                animatedWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span
                      className="word-to-highlight"
                      style={{ animationDelay: wordObj.delay }}
                    >
                      {wordObj.text}
                    </span>
                    {index < animatedWords.length - 1 && ' '}
                  </React.Fragment>
                ))
              ) : (
                // Render static text before client-side effect completes
                textToAnimate
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Link href="#cta">Download AIcurate Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg transform hover:scale-105 transition-transform duration-200 border-primary text-primary hover:bg-primary/10">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center h-full">
             {/* Animated elements container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg width="280" height="100" viewBox="0 0 280 100" className="opacity-30">
                <circle cx="140" cy="50" r="48" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="4 8" className="animate-spin-slow" />
                <circle cx="140" cy="50" r="135" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="2 10" className="animate-spin-very-slow" />
              </svg>
            </div>
            <Image
              src="/photos/aicuratelogo.png" 
              alt="AIcurate Logo"
              width={240} 
              height={56}  
              className="relative z-10 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

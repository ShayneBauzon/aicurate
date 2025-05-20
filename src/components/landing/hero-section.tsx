
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React, { useMemo } from 'react';

const textToAnimate = "Our AI-powered browser extension helps you curate information by detecting outdated, biased, or false content in real-time. Browse the web with confidence, knowing AIcurate has your back.";
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
  const animatedWords = useMemo(() => {
    const originalWords = textToAnimate.split(' ');
    const numberOfWords = originalWords.length;
    
    // Create an array of indices [0, 1, ..., numberOfWords - 1]
    const delayIndices = Array.from({ length: numberOfWords }, (_, i) => i);
    // Shuffle these indices to randomize the animation order
    const shuffledDelayIndices = shuffleArray(delayIndices);

    return originalWords.map((word, index) => ({
      text: word,
      // Assign delay based on the word's position in the shuffled sequence
      delay: `${shuffledDelayIndices[index] * animationDelayStep}s`,
    }));
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
              Curate Information <span className="text-primary">Instantly</span> with AIcurate
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl">
              {animatedWords.map((wordObj, index) => (
                <React.Fragment key={index}>
                  <span
                    className="word-to-highlight"
                    style={{ animationDelay: wordObj.delay }}
                  >
                    {wordObj.text}
                  </span>
                  {index < animatedWords.length - 1 && ' '}
                </React.Fragment>
              ))}
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

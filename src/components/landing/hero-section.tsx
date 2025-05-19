import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
              Verify Information <span className="text-primary">Instantly</span> with VerifAI
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl">
              Our AI-powered browser extension detects outdated, biased, or false information in real-time. Browse the web with confidence, knowing VerifAI has your back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Link href="#cta">Download VerifAI Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg transform hover:scale-105 transition-transform duration-200 border-primary text-primary hover:bg-primary/10">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center group"> {/* Removed the inner div that created the square */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:max-w-[380px] lg:max-h-[380px] transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              aria-labelledby="verifaiLogoTitle"
            >
              <title id="verifaiLogoTitle">VerifAI Logo</title>
              {/* Shield background */}
              <path
                d="M50 5 C 55 5, 90 20, 90 50 C 90 80, 55 95, 50 95 C 45 95, 10 80, 10 50 C 10 20, 45 5, 50 5 Z"
                fill="hsl(var(--primary))"
              />
              {/* 'V' letter */}
              <path
                d="M30 35 L50 65 L70 35"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Checkmark */}
              <path
                d="M52 58 L60 66 L78 42"
                stroke="hsl(var(--accent))"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}


import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight animate-text-scan">
              Curate Information <span className="text-primary">Instantly</span> with AIcurate
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl">
              Our AI-powered browser extension helps you curate information by detecting outdated, biased, or false content in real-time. Browse the web with confidence, knowing AIcurate has your back.
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
          
          <div className="flex justify-center items-center">
            {/* Removed SVG animated elements. The div structure is simplified. */}
            <Image
              src="/photos/aicuratelogo.png"
              alt="AIcurate Logo"
              width={240} 
              height={56}  
              className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

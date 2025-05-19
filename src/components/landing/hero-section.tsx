import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src="https://placehold.co/1280x720.png"
              alt="VerifAI browser extension in action"
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              data-ai-hint="browser extension user interface"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

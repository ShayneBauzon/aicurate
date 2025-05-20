
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Chrome, DownloadCloud } from 'lucide-react';

// Placeholder for Firefox icon if not in lucide-react. You can use an SVG or a different generic icon.
const FirefoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l3-3 2.5 2.5 4.5-4.5-3 3-2.5-2.5-4.5 4.5z" />
  </svg>
);


export default function CtaSection() {
  return (
    <section id="cta" className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Ready to Browse with <span className="text-primary">Confidence</span>?
          </h2>
          <p className="mt-6 mb-10 text-muted-foreground md:text-xl max-w-xl mx-auto">
            Download AIcurate today and take control of your online information. It's free, secure, and easy to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl transform hover:scale-105 transition-transform duration-200 px-10 py-7 text-lg">
              <Link href="/download">
                <DownloadCloud className="mr-2 h-5 w-5" /> Download AIcurate Now
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex justify-center items-center gap-6">
            <Link href="/download" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Chrome className="h-5 w-5" /> Available for Chrome
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="#firefox-store-link" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 6.5l-1 5.2L2 13l3.5 3 2.5.2L9.3 15l1.2-1.5H11l.7 1.5.2 1.3 2.5-.2L18 13l-1.5-1.3-1-5.2L14.2 5l-2 .2-1.8 1.3zm-.2 5.2c.2-.7.5-1.2 1-1.5l.2-.2.8.2.6.8.2 1-.2 1-.6.8-.8.2-.2-.2c-.5-.3-.8-.8-1-1.5zm9.4 0c.2-.7.5-1.2 1-1.5l.2-.2.8.2.6.8.2 1-.2 1-.6.8-.8.2-.2-.2c-.5-.3-.8-.8-1-1.5zM9 18.5l-1-1.2-.8-1.3-1.5.2-.2 1.5.2 1.5 1.5.2.8-1.3zm6 0l1-1.2.8-1.3 1.5.2.2 1.5-.2 1.5-1.5.2-.8-1.3z"/><path d="M15.5 6.8A4.5 4.5 0 0 0 12 5a4.5 4.5 0 0 0-3.5 1.8l-.1.2c.4.5.4 1.2-.1 1.8L8 11.3V13a1 1 0 0 0 1 1h.5l.2-.5.5-1.3.2-.5h2.2l.2.5.5 1.3.2.5H15a1 1 0 0 0 1-1v-1.8l-.2-2.5z"/></svg>
              Coming soon for Firefox
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

    
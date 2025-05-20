
import Link from 'next/link';

// Define the SVG logo component locally for the footer
const AIcurateLogoIcon = () => (
  <svg aria-label="AIcurate Logo Icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title id="aicuratelogo-target-icon-footer">AIcurate Target Logo Icon</title>
    {/* Target Rings */}
    <circle cx="16" cy="16" r="12" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.6"/>
    <circle cx="16" cy="16" r="8" stroke="hsl(var(--primary))" strokeWidth="2"/>
    <circle cx="16" cy="16" r="4" fill="hsl(var(--primary))"/>

    {/* Arrow Shaft - from top-right towards center */}
    <line x1="26" y1="6" x2="19" y2="13" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Arrow Head */}
    <path d="M19 13 L21 10 L17 11 Z" fill="hsl(var(--accent))"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/main" className="inline-flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity" aria-label="AIcurate Homepage">
              <AIcurateLogoIcon />
              <span className="font-semibold text-xl text-foreground">AIcurate</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering you with trustworthy information, in real-time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/main#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link href="/main#demo" className="text-sm text-muted-foreground hover:text-primary">Demo</Link></li>
              <li><Link href="/main#testimonials" className="text-sm text-muted-foreground hover:text-primary">Testimonials</Link></li>
              <li><Link href="/download" className="text-sm text-muted-foreground hover:text-primary">Download</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} AIcurate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


import Link from 'next/link';
// import Image from 'next/image'; // No longer using Image for logo here

const AIcurateLogoIcon = () => (
  <svg aria-label="AIcurate Logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title id="aicuratelogoiconfooter">AIcurate Logo Icon</title>
    <path d="M16 2C16 2 6 5.33333 6 16C6 26.6667 16 30 16 30C16 30 26 26.6667 26 16C26 5.33333 16 2 16 2Z" fill="hsl(var(--primary))"/>
    <path d="M11 16L14.5 19.5L21 12.5" stroke="hsl(var(--primary-foreground))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity" aria-label="AIcurate Homepage">
              <AIcurateLogoIcon />
              <span className="font-semibold text-lg text-foreground">AIcurate</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering you with trustworthy information, in real-time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link href="#demo" className="text-sm text-muted-foreground hover:text-primary">Demo</Link></li>
              <li><Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary">Testimonials</Link></li>
              <li><Link href="#cta" className="text-sm text-muted-foreground hover:text-primary">Download</Link></li>
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

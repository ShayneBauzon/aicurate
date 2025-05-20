
import Link from 'next/link';
import Image from 'next/image'; // Import next/image

// AIcurateLogoIcon is no longer needed here if we use the image directly

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity" aria-label="AIcurate Homepage">
              <Image
                src="/photos/aicuratelogo.png" 
                alt="AIcurate Logo"
                width={128} // Adjust width as needed for footer display
                height={32} // Adjust height as needed for footer display
                className="h-8 w-auto" // Maintain aspect ratio, set height
              />
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


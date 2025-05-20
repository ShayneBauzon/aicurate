
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
                width={160} // Increased width
                height={40} // Increased height
                className="h-10 w-auto" // Adjusted class for new height
              />
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

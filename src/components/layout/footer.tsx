
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/photos/aicurate.png" alt="AIcurate Logo" width={28} height={28} className="h-7 w-7" />
              <span className="text-xl font-bold text-primary">AIcurate</span>
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
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary"><Github size={20} /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
            </div>
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

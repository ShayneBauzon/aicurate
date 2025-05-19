import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShieldCheck, LogOut } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <ShieldCheck className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-primary">VerifAI</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="#cta">Download Now</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground">
            <Link href="/login">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold text-primary">VerifAI</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                  <Link href="#cta">Download Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="mt-2">
                  <Link href="/login">
                     <LogOut className="mr-2 h-5 w-5" />
                    Logout
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

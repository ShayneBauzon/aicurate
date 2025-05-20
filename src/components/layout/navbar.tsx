
'use client'; 

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogOut } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const AIcurateLogoIcon = () => (
  <svg aria-label="AIcurate Logo Icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title id="aicuratelogoiconnav">AIcurate Logo Icon</title>
    <path d="M16 2C16 2 6 5.33333 6 16C6 26.6667 16 30 16 30C16 30 26 26.6667 26 16C26 5.33333 16 2 16 2Z" fill="hsl(var(--primary))"/>
    {/* Replaced checkmark with "AC" */}
    <text 
      x="16" 
      y="17.5" 
      dominantBaseline="middle" 
      textAnchor="middle" 
      fontFamily="Arial, sans-serif" 
      fontSize="13" 
      fontWeight="bold" 
      fill="hsl(var(--primary-foreground))"
    >
      AC
    </text>
  </svg>
);

export default function Navbar() {
  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Testimonials', href: '#testimonials' },
  ];
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ title: "Logged Out", description: "You have been successfully logged out." });
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/main" className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="AIcurate Homepage"> 
          <AIcurateLogoIcon />
          <span className="font-semibold text-lg text-foreground">AIcurate</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`/main${item.href}`} 
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="/download">Download Now</Link>
          </Button>
          <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
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
                <Link href="/main" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity" aria-label="AIcurate Homepage"> 
                  <AIcurateLogoIcon />
                  <span className="font-semibold text-lg text-foreground">AIcurate</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={`/main${item.href}`} 
                    className="text-lg font-medium text-foreground hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                  <Link href="/download">Download Now</Link>
                </Button>
                <Button variant="outline" size="lg" className="mt-2" onClick={handleLogout}>
                   <LogOut className="mr-2 h-5 w-5" />
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

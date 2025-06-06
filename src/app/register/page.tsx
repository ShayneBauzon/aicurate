
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { UserPlus, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const AIcurateLogoIcon = () => (
  <svg aria-label="AIcurate Logo Icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title id="aicuratelogo-target-icon">AIcurate Target Logo Icon</title>
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

export default function RegisterPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);


  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError("Full name cannot be empty.");
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      setError("Password cannot be empty.");
      return;
    }
    if (password.length < 6) { 
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    toast({
      title: "Registration Successful!",
      description: "You can now log in with your new account.",
    });
    router.push('/login');
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary/20 p-4">
      <div className="absolute top-8 left-8">
        <Link 
          href="/main" 
          className={cn(
            "flex items-center gap-2 hover:opacity-80 transition-opacity",
            isLoading ? 'pointer-events-none opacity-50' : ''
          )}
          aria-disabled={isLoading}
          tabIndex={isLoading ? -1 : undefined}
          aria-label="AIcurate Homepage"
        >
          <AIcurateLogoIcon />
          <span className="font-semibold text-lg text-foreground">AIcurate</span>
        </Link>
      </div>
      <Card className="w-full max-w-md shadow-2xl rounded-xl">
        <CardHeader className="text-center space-y-2 pt-8">
          <div className="flex justify-center mb-4">
            <UserPlus className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground">
            Create an Account
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Join AIcurate to start browsing with confidence.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent className="space-y-4 py-8">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-foreground/80">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                className="bg-input border-border focus:ring-primary"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="bg-input border-border focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground/80">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-input border-border focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground/80">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="bg-input border-border focus:ring-primary"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            {error && <p className="text-xs text-destructive pt-1">{error}</p>}
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pb-8">
            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold shadow-md transform hover:scale-105 transition-transform duration-200"
            >
              {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className={cn("font-semibold text-primary hover:underline", isLoading ? 'pointer-events-none opacity-50' : '')}
          aria-disabled={isLoading}
          tabIndex={isLoading ? -1 : undefined}
        >
          Login here
        </Link>
      </p>
    </div>
  );
}

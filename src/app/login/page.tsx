
'use client'; 

import { useState } from "react";
import Image from 'next/image';
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
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !email.includes('@')) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      setError("Password cannot be empty.");
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800)); 

    toast({
      title: "Login Successful!",
      description: "Redirecting to the main page...",
    });
    router.push('/main'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary/20 p-4">
      <div className="absolute top-8 left-8">
        <Link 
          href="/" 
          className={cn(
            "flex items-center hover:opacity-80 transition-opacity",
            isLoading ? 'pointer-events-none opacity-50' : ''
          )}
          aria-disabled={isLoading}
          tabIndex={isLoading ? -1 : undefined}
        >
          <Image src="/photos/aicuratelogo.png" alt="AIcurate Logo" width={128} height={32} />
        </Link>
      </div>
      <Card className={cn(
          "w-full max-w-md shadow-2xl rounded-xl",
          isLoading ? "login-card-smooth-exit" : ""
        )}>
        <CardHeader className="text-center space-y-2 pt-8">
          <CardTitle className="text-3xl font-bold text-foreground">
            Login to AIcurate
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your credentials to access AIcurate.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-6 py-8">
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
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium text-foreground/80">Password</Label>
                <Link
                  href="#" 
                  className={cn(
                    "text-xs text-primary hover:underline",
                    isLoading ? 'pointer-events-none opacity-50' : ''
                  )}
                  aria-disabled={isLoading}
                  tabIndex={isLoading ? -1 : undefined}
                >
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="bg-input border-border focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
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
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="w-full h-12 text-base border-primary text-primary hover:bg-primary/10 shadow-md transform hover:scale-105 transition-transform duration-200"
              disabled={isLoading}
            >
              <Link href="/register">Register</Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link 
          href="/register" 
          className={cn(
            "font-semibold text-primary hover:underline",
            isLoading ? 'pointer-events-none opacity-50' : ''
          )}
          aria-disabled={isLoading}
          tabIndex={isLoading ? -1 : undefined}
        >
          Sign up here
        </Link>
      </p>
    </div>
  );
}


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
import { ShieldCheck, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate API call / authentication
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    router.push('/main'); // Redirect to the new main page
    // setIsLoading(false); // Not strictly needed due to navigation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary/20 p-4">
      <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <ShieldCheck className="h-7 w-7" />
          <span className="text-xl font-bold">AIcurate</span>
        </Link>
      </div>
      <Card className="w-full max-w-md shadow-2xl rounded-xl">
        <CardHeader className="text-center space-y-2 pt-8">
          <CardTitle className="text-3xl font-bold text-foreground">
            Login to AIcurate
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your credentials to access AIcurate.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 py-8">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground/80">Email or Username</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              required 
              className="bg-input border-border focus:ring-primary"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-medium text-foreground/80">Password</Label>
              <Link
                href="#"
                className={`text-xs text-primary hover:underline ${isLoading ? 'pointer-events-none opacity-50' : ''}`}
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
              required 
              className="bg-input border-border focus:ring-primary"
              disabled={isLoading}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pb-8">
          <Button 
            onClick={handleLogin}
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
      </Card>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link 
          href="/register" 
          className={`font-semibold text-primary hover:underline ${isLoading ? 'pointer-events-none opacity-50' : ''}`}
          aria-disabled={isLoading}
          tabIndex={isLoading ? -1 : undefined}
        >
          Sign up here
        </Link>
      </p>
    </div>
  );
}

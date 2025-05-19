
'use client';

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
import { ShieldCheck, UserPlus } from "lucide-react";

export default function RegisterPage() {
  // Basic handler for demo, can be expanded
  const handleRegister = () => {
    // In a real app, you'd handle form submission here
    console.log("Register button clicked");
    // Potentially redirect or show a success message
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary/20 p-4">
      <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <ShieldCheck className="h-7 w-7" />
          <span className="text-xl font-bold">VerifAI</span>
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
            Join VerifAI to start browsing with confidence.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 py-8">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-foreground/80">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              required
              className="bg-input border-border focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="bg-input border-border focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground/80">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="bg-input border-border focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground/80">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              required
              className="bg-input border-border focus:ring-primary"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pb-8">
          <Button 
            onClick={handleRegister}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold shadow-md transform hover:scale-105 transition-transform duration-200"
          >
            Register
          </Button>
        </CardFooter>
      </Card>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}

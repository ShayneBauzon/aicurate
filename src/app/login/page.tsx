
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
import { ShieldCheck } from "lucide-react";

export default function LoginPage() {
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
          <CardTitle className="text-3xl font-bold text-foreground">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your credentials to access VerifAI.
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
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-medium text-foreground/80">Password</Label>
              <Link
                href="#"
                className="text-xs text-primary hover:underline"
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
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pb-8">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold shadow-md transform hover:scale-105 transition-transform duration-200">
            Login
          </Button>
          <Button variant="outline" className="w-full h-12 text-base border-primary text-primary hover:bg-primary/10 shadow-md transform hover:scale-105 transition-transform duration-200">
            Register
          </Button>
        </CardFooter>
      </Card>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="#" className="font-semibold text-primary hover:underline">
          Sign up here
        </Link>
      </p>
    </div>
  );
}

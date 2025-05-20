
'use client';

import { useState, useEffect } from "react";
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
import { ShieldCheck, KeyRound, Loader2 } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const verify2FASchema = z.object({
  code: z.string().length(6, { message: "Code must be 6 digits." }),
});

type Verify2FAFormValues = z.infer<typeof verify2FASchema>;

export default function Verify2FAPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    // Retrieve email from localStorage. In a real app, derive this from a pre-2FA token or session.
    const storedEmail = localStorage.getItem('aicurate_2fa_email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      // If no email, user shouldn't be here. Redirect to login.
      toast({ title: "Error", description: "No email found for 2FA. Please log in again.", variant: "destructive" });
      router.push('/login');
    }
  }, [router, toast]);


  const { register, handleSubmit, formState: { errors } } = useForm<Verify2FAFormValues>({
    resolver: zodResolver(verify2FASchema),
  });

  const handleVerify2FA: SubmitHandler<Verify2FAFormValues> = async (data) => {
    if (!email) {
        toast({ title: "Error", description: "Email is missing for 2FA verification.", variant: "destructive"});
        return;
    }
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/verify-2fa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: data.code }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Verification Successful!",
          description: "You are now fully logged in.",
        });
        localStorage.removeItem('aicurate_2fa_email'); // Clean up
        router.push('/main'); 
      } else {
        toast({
          title: "Verification Failed",
          description: result.error || "Invalid or expired code.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("2FA verification error:", error);
      toast({
        title: "Verification Error",
        description: "Could not connect to the server. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!email) {
    // Still loading email or redirecting
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-secondary/20 p-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    );
  }

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
          <div className="flex justify-center mb-4">
            <KeyRound className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground">
            Two-Factor Authentication
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            A verification code has been (simulated) sent to your email ({email}). 
            Please check your server console for the code.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(handleVerify2FA)}>
          <CardContent className="space-y-6 py-8">
            <div className="space-y-2">
              <Label htmlFor="code" className="text-sm font-medium text-foreground/80">Verification Code</Label>
              <Input 
                id="code" 
                type="text" 
                placeholder="123456" 
                maxLength={6}
                className="bg-input border-border focus:ring-primary text-center tracking-[0.3em]"
                {...register("code")}
                disabled={isLoading}
              />
              {errors.code && <p className="text-xs text-destructive pt-1">{errors.code.message}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pb-8">
            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold shadow-md"
            >
              {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {isLoading ? "Verifying..." : "Verify Code"}
            </Button>
          </CardFooter>
        </form>
         <div className="px-6 pb-6 text-center">
            <Button variant="link" onClick={() => router.push('/login')} className="text-sm text-primary" disabled={isLoading}>
                Cancel and go back to Login
            </Button>
        </div>
      </Card>
    </div>
  );
}

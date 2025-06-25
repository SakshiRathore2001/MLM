
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BarChart, ArrowRight } from 'lucide-react';
import Images from '@/constants/Images.constants';

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = () => {
    // In a real app, you would handle form submission and send the OTP here.
    router.push('/otp');
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background">
       <Image
        src={Images.bg1}
        alt="Signup background"
        fill
        className="object-cover opacity-20"
        data-ai-hint="modern abstract pattern"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="relative z-10 w-full max-w-md p-4">
        <div className="mb-8 flex justify-center">
             <Link href="/" className="flex items-center gap-2">
                <BarChart className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">Fxvibe</span>
            </Link>
        </div>
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Create an Account</CardTitle>
            <CardDescription>Enter your details below to get started</CardDescription>
          </Header>
          <CardContent className="grid gap-4">
             <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="referral-id">Referral ID (Optional)</Label>
              <Input id="referral-id" type="text" placeholder="Enter referral ID" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" onClick={handleSignup}>
              Create Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
             <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="underline hover:text-primary">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

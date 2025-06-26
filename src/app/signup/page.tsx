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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterValues } from '@/lib/types';
import { authAPI } from '@/lib/api';
import { useState } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { FullPageSpinner } from '@/components/ui/full-page-spinner';

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [showGlobalLoading, setShowGlobalLoading] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterValues) => {
    setError(null);
    // Only send the 10-digit mobile number to the backend
    const mobile = data.mobile.replace(/\D/g, '').slice(-10); // keep only last 10 digits
    const result = await authAPI.register({ ...data, mobile });
    if (result.success) {
      // Do not set auth token, redirect to OTP page
      const email = result.data?.user.email || data.email;
      router.push(`/otp?email=${encodeURIComponent(email)}`);
    } else {
      setError(result.message || 'Registration failed');
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background">
      {showGlobalLoading && <FullPageSpinner />}
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
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="John Doe" {...register('name')} />
                {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="flex gap-2">
                  <span className="flex items-center px-3 rounded-md border border-input bg-background text-muted-foreground">+91</span>
                  <Input id="mobile" type="tel" placeholder="9876543210" className="flex-1" {...register('mobile')} maxLength={10} />
                </div>
                <span className="text-xs text-muted-foreground">Enter your 10-digit Indian mobile number (without country code)</span>
                {errors.mobile && <span className="text-sm text-red-500">{errors.mobile.message}</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" {...register('email')} />
                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" {...register('password')} />
                {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" {...register('confirmPassword')} />
                {errors.confirmPassword && <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>}
              </div>
              {error && <div className="text-sm text-red-500 text-center">{error}</div>}
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Spinner className="mr-2 h-4 w-4" />
                    Creating Account...
                  </>
                ) : (
                  <><span>Create Account</span> <ArrowRight className="ml-2 h-4 w-4" /></>
                )}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="underline hover:text-primary">
                  Login
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}

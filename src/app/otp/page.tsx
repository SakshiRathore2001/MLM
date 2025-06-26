"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

export default function OtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = (searchParams && searchParams.get('email')) || '';
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<{ otp: string }>({});
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [resendError, setResendError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  const onSubmit = async ({ otp }: { otp: string }) => {
    setError(null);
    setSuccess(false);
    const res = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (data.success) {
      setSuccess(true);
      setTimeout(() => router.push('/login'), 1500);
    } else {
      setError(data.message || 'OTP verification failed');
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    setResendSuccess(false);
    setResendError(null);
    const res = await fetch('/api/auth/resend-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setResendLoading(false);
    if (data.success) {
      setResendSuccess(true);
      setCooldown(30);
    } else {
      setResendError(data.message || 'Failed to resend OTP');
    }
  };

  // Cooldown timer effect
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Verify OTP</CardTitle>
          <CardDescription>
            Enter the OTP sent to your email <span className="font-medium">{email}</span>
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="otp">OTP</Label>
              <Input id="otp" type="text" maxLength={6} placeholder="Enter 6-digit OTP" {...register('otp', { required: 'OTP is required', minLength: { value: 6, message: 'OTP must be 6 digits' }, maxLength: { value: 6, message: 'OTP must be 6 digits' } })} />
              {errors.otp && <span className="text-sm text-red-500">{errors.otp.message}</span>}
            </div>
            {error && <div className="text-sm text-red-500 text-center">{error}</div>}
            {success && <div className="text-sm text-green-600 text-center">OTP verified! Redirecting to login...</div>}
            <div className="text-center text-sm mt-2">
              <p className="text-muted-foreground">
                Didn't receive the code?{' '}
                <Button variant="link" className="p-0 h-auto text-primary" type="button" onClick={handleResend} disabled={resendLoading || cooldown > 0}>
                  {resendLoading ? <Spinner className="mr-2 h-4 w-4 inline" /> : null}
                  Resend OTP{cooldown > 0 ? ` (${cooldown}s)` : ''}
                </Button>
              </p>
              {resendSuccess && <div className="text-green-600">OTP resent! Check your email.</div>}
              {resendError && <div className="text-red-500">{resendError}</div>}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? <><Spinner className="mr-2 h-4 w-4" />Verifying...</> : 'Verify OTP'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

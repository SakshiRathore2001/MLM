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
import { loginSchema, type LoginValues } from '@/lib/types';
import { authAPI } from '@/lib/api';
import { useState } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { FullPageSpinner } from '@/components/ui/full-page-spinner';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [showGlobalLoading, setShowGlobalLoading] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginValues) => {
    setError(null);
    const result = await authAPI.login(data);
    if (result.success) {
      authAPI.setAuthToken(result.data!.token);
      setShowGlobalLoading(true);
      router.push('/');
    } else {
      setError(result.message || 'Login failed');
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background">
      {showGlobalLoading && <FullPageSpinner />}
      <Image
        src={Images.bg2}
        alt="Login background"
        fill
        className="object-cover opacity-20"
        data-ai-hint="abstract geometric background"
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
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="grid gap-4">
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
              {error && <div className="text-sm text-red-500 text-center">{error}</div>}
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Spinner className="mr-2 h-4 w-4" />
                    Logging in...
                  </>
                ) : (
                  <><span>Login</span> <ArrowRight className="ml-2 h-4 w-4" /></>
                )}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="underline hover:text-primary">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}

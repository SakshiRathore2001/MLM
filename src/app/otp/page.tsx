
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BarChart, KeyRound } from 'lucide-react';
import Images from '@/constants/Images.constants';

export default function OtpPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background">
      <Image
        src={Images.bg2}
        alt="OTP background"
        fill
        className="object-cover opacity-20"
        data-ai-hint="security abstract"
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
            <CardTitle className="text-2xl">OTP Verification</CardTitle>
            <CardDescription>
              We've sent a one-time password to your email. Please enter it below.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2 text-center">
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                id="otp"
                type="text"
                placeholder="______"
                className="text-center text-2xl tracking-[0.5em]"
                maxLength={6}
              />
            </div>
            <div className="text-center text-sm">
                <p className="text-muted-foreground">
                    Didn't receive the code?{' '}
                    <Button variant="link" className="p-0 h-auto text-primary">
                        Resend OTP
                    </Button>
                </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full">
              <KeyRound className="mr-2 h-4 w-4" />
              Verify Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="crypto trading"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm text-primary">About Us</div>
              <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
                We're on a Mission to Innovate
              </h2>
              <p className="max-w-xl text-muted-foreground md:text-lg">
                Our team is dedicated to creating high-quality, developer-friendly templates that accelerate your time to market. We believe in the power of good design and clean code.
              </p>
            </div>
            <ul className="grid gap-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Developer Focused:</strong> Built for developers, by developers.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Future Proof:</strong> Utilizing the latest technologies to ensure longevity.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Community Driven:</strong> We value feedback and contributions from our users.
                </p>
              </li>
            </ul>
            <div className="pt-4">
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

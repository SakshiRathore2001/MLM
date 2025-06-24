
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section id="cta" className="w-full py-20 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
          Ready to Prove Your Trading Skills?
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Our evaluation process is designed to identify talented traders. Pass the challenge and get funded.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/evaluation">
              Start Your Evaluation Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

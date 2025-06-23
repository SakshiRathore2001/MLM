import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="w-full py-20 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Ready to Dive In?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Start building your next masterpiece today. It's free to get started.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

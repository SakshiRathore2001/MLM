import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build your next project faster
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            A professional, modern, and fully responsive Next.js template to kickstart your development and streamline your workflow.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

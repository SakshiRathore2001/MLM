import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    serviceNumber: "SERVICE #1",
    title: "Currency Pair and Analysis",
    description: "Holds in these matters this principles...",
    image: "https://placehold.co/600x400.png",
    aiHint: "currency analysis"
  },
  {
    serviceNumber: "SERVICE #2",
    title: "Proprietary Trading Accounts",
    description: "The great explorer of the truth master...",
    image: "https://placehold.co/600x400.png",
    aiHint: "trading account"
  },
  {
    serviceNumber: "SERVICE #3",
    title: "Trading Platforms and Tools",
    description: "Rationally encounter consequences...",
    image: "https://placehold.co/600x400.png",
    aiHint: "trading platform"
  }
];

export default function Features() {
  return (
    <section id="services" className="w-full py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-2 text-primary font-semibold tracking-wider">
              <TrendingUp className="h-5 w-5" />
              <span>WHAT WE OFFER</span>
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl mt-4">
            Provide all you need for trading success
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group text-left overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
              <div className="p-6 flex-grow">
                <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">{service.serviceNumber}</p>
                <h3 className="text-xl font-bold mt-2">{service.title}</h3>
                <Separator className="my-4" />
                <p className="text-muted-foreground text-sm">{service.description}</p>

              </div>
              <div className="mt-auto relative">
                <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={service.aiHint}
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/60" />
                <div className="absolute inset-0 p-6">
                    <Button
                        variant="ghost"
                        className={cn(
                            "absolute h-auto rounded-full font-semibold transition-all duration-300 ease-in-out shadow-md flex items-center",
                            // Default state: small, white, bottom-left
                            "bg-white/90 text-black hover:bg-white px-4 py-2 text-xs bottom-6 left-6",
                            // On card hover: move to center, get bigger, but keep original colors
                            "group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2",
                            "group-hover:px-6 group-hover:py-3 group-hover:text-sm group-hover:shadow-lg",
                            // On button hover while card is hovered: turn orange
                            "group-hover:hover:bg-orange-500 group-hover:hover:text-white"
                        )}
                    >
                        <ArrowRight className="h-4 w-4 mr-2 shrink-0" />
                        <span>Explore</span>
                    </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
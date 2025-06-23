import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

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
            <Card key={service.title} className="text-left overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="p-6 flex-grow">
                <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">{service.serviceNumber}</p>
                <h3 className="text-xl font-bold mt-2">{service.title}</h3>
                <Separator className="my-4" />
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
              <div className="mt-auto">
                <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover"
                    data-ai-hint={service.aiHint}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

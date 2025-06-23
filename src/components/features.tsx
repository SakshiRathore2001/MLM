import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ServiceCard = ({ serviceNumber, title, description, image, imageHint }: { serviceNumber: string; title: string; description: string; image: string; imageHint: string; }) => (
    <Card className="group flex flex-col bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="p-6">
            <p className="text-xs font-semibold text-gray-500 tracking-widest">{serviceNumber}</p>
            <h2 className="mt-2 text-xl font-bold leading-snug text-gray-900">{title}</h2>
            <hr className="my-4" />
            <p className="text-sm text-gray-700 h-12">{description}</p>
        </div>
        <div className="relative mt-auto">
             <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={imageHint}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </div>
             <Button className={cn(
                "absolute bottom-4 bg-white/95 text-black rounded-full shadow-md backdrop-blur-sm",
                "transition-all duration-300 ease-in-out",
                "left-4",
                "group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:w-32",
                "hover:bg-primary hover:text-primary-foreground"
             )}>
                 <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                 Explore
             </Button>
        </div>
    </Card>
);

const services = [
  {
    serviceNumber: "SERVICE #1",
    title: "Currency Pair and Analysis",
    description: "Holds in these matters this principles...",
    image: "https://placehold.co/600x400.png",
    imageHint: "currency money",
  },
  {
    serviceNumber: "SERVICE #2",
    title: "Proprietary Trading Accounts",
    description: "The great explorer of the truth master...",
    image: "https://placehold.co/600x400.png",
    imageHint: "trading analysis chart",
  },
  {
    serviceNumber: "SERVICE #3",
    title: "Trading Platforms and Tools",
    description: "Rationally encounter consequences...",
    image: "https://placehold.co/600x400.png",
    imageHint: "stock market screen",
  },
];

export default function Features() {
  return (
    <section id="services" className="w-full py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-black">
            What We Offer
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Our platform provides a comprehensive suite of tools and services to help you succeed in the world of trading.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: "https://placehold.co/80x80.png",
    iconHint: "trading analysis",
    title: "AI Trading",
    description: "Leverage our advanced AI to make informed, profitable trades.",
  },
  {
    icon: "https://placehold.co/80x80.png",
    iconHint: "financial security",
    title: "Proprietary Trading",
    description: "Gain access to our capital and trade on behalf of the firm.",
  },
  {
    icon: "https://placehold.co/80x80.png",
    iconHint: "community support",
    title: "Community & Support",
    description: "Join a network of traders and get support from our experts.",
  },
];

const ServiceCardWithHover = ({ icon, iconHint, title, description }: { icon: string; iconHint: string; title: string; description: string }) => (
    <Card className="group relative overflow-hidden text-center bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-[350px] flex flex-col justify-end items-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
            <Image
                src={icon}
                alt={title}
                width={80}
                height={80}
                className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={iconHint}
            />
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-muted-foreground mt-2 text-sm">{description}</p>
        </div>
        <Button variant="default" className="absolute z-20 bottom-1/2 translate-y-[calc(50%+2rem)] left-1/2 -translate-x-1/2 w-40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out scale-90 group-hover:scale-100 bg-white text-black hover:bg-primary hover:text-primary-foreground">
            Explore <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
    </Card>
);

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
            <ServiceCardWithHover key={service.title} {...service} />
          ))}
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3 items-center">
            <div className="md:col-span-1">
                <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Illustration" 
                    width={600} 
                    height={400} 
                    className="rounded-2xl"
                    data-ai-hint="financial planning illustration"
                />
            </div>
            <div className="md:col-span-1">
                <ServiceCardWithHover 
                    icon="https://placehold.co/80x80.png"
                    iconHint="education learning"
                    title="Education & Training"
                    description="Access our library of educational resources and training materials."
                />
            </div>
            <div className="md:col-span-1">
                 <Card className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg h-[350px] flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-bold">Ready to Start?</h3>
                    <p className="mt-2">Join FXVibe today and take your trading to the next level.</p>
                    <Button variant="secondary" className="mt-6 bg-white text-primary hover:bg-white/90">
                        Get Started
                    </Button>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight, FileText } from "lucide-react";

const ServiceCard = ({ serviceNumber, title, description, image, imageHint }: { serviceNumber: string; title: string; description: string; image: string; imageHint: string; }) => {
    const truncatedDescription = description.split(' ').slice(0, 5).join(' ') + (description.split(' ').length > 5 ? '...' : '');

    return (
        <Card className="group flex flex-col bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
                <p className="text-xs font-semibold text-gray-500 tracking-widest">{serviceNumber}</p>
                <h2 className="mt-2 text-xl font-bold leading-snug text-gray-900">{title}</h2>
                <hr className="my-4" />
                <p className="text-sm text-gray-700 h-12">{truncatedDescription}</p>
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
    )
};

const services = [
  {
    serviceNumber: "SERVICE #1",
    title: "📈 Stable Monthly Profit Sharing",
    description: "Stable Monthly Profit Sharing (e.g., 5.4%)",
    image: "https://placehold.co/600x400.png",
    imageHint: "profit chart graph",
  },
  {
    serviceNumber: "SERVICE #2",
    title: "🔁 Reinvestment + Withdrawal Flexibility",
    description: "Reinvestment + Withdrawal Flexibility (Custom SWP Plan)",
    image: "https://placehold.co/600x400.png",
    imageHint: "money transfer cycle",
  },
  {
    serviceNumber: "SERVICE #3",
    title: "🧠 AI-based Risk Management",
    description: "AI-based Risk Management (Dynamic Position Control)",
    image: "https://placehold.co/600x400.png",
    imageHint: "ai circuit brain",
  },
];

const GuidanceCard = () => (
    <Card className="relative rounded-lg overflow-hidden p-6 text-white bg-emerald-800 h-full flex flex-col justify-center items-center">
        <Image
            src="https://placehold.co/600x800.png"
            alt="Expert guidance"
            fill
            className="object-cover opacity-20"
            data-ai-hint="man smiling phone"
        />
        <div className="relative z-10 flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold leading-tight">Fxvibe Expert Guidance for Financial Rise!...</h3>
            <p className="text-sm">Customized Forex Strategy Consultation.</p>
            <Button className="mt-4 bg-white text-black hover:bg-primary hover:text-primary-foreground rounded-full font-semibold">
                <ArrowRight className="mr-2 h-4 w-4" /> START NOW
            </Button>
        </div>
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
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            <div className="hidden lg:flex items-center justify-center p-8">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Financial Growth Illustration"
                    width={450}
                    height={300}
                    className="w-full h-auto object-contain"
                    data-ai-hint="bull market financial graph"
                />
            </div>

            <ServiceCard
                serviceNumber="SERVICE #4"
                title="🪙 MNT Token Ecosystem Integration"
                description="Become part of the growing MrMint ecosystem with integrated MNT token features."
                image="https://placehold.co/600x400.png"
                imageHint="crypto token network"
            />

            <GuidanceCard />
        </div>
      </div>
    </section>
  );
}

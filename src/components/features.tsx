
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, TrendingUp, Repeat, ShieldCheck, Share2, FileText } from "lucide-react";

const ServiceCard = ({ icon, title, description, image, imageHint }: { icon: React.ReactNode; title: string; description: string; image: string; imageHint: string; }) => {
    return (
        <Card className="group relative rounded-xl overflow-hidden text-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 h-96">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6 space-y-4">
                <div className="text-primary bg-background/30 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center border border-primary/30">
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{description}</p>
                </div>
                <div className="pt-2">
                    <Button variant="ghost" className="self-start px-0 text-primary hover:text-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Card>
    );
};

const services = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Stable Monthly Profit Sharing",
    description: "Benefit from consistent monthly returns powered by our advanced AI, designed for predictable growth.",
    image: "https://placehold.co/600x800.png",
    imageHint: "upward graph arrow",
  },
  {
    icon: <Repeat className="w-8 h-8" />,
    title: "Flexible Reinvestment & Withdrawals",
    description: "Tailor your investment journey with customizable plans for reinvesting profits or making withdrawals.",
    image: "https://placehold.co/600x800.png",
    imageHint: "investment cycle illustration",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "AI-Powered Risk Management",
    description: "Our AI dynamically manages positions and mitigates risks, safeguarding your capital around the clock.",
    image: "https://placehold.co/600x800.png",
    imageHint: "secure data shield",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "MNT Token Ecosystem",
    description: "Engage with the broader MrMint ecosystem through seamless MNT token integration and rewards.",
    image: "https://placehold.co/600x800.png",
    imageHint: "digital token network",
  },
];

const GuidanceCard = () => (
    <Card className="relative rounded-xl overflow-hidden p-8 text-white bg-emerald-800/50 h-full flex flex-col md:flex-row justify-between items-center gap-8">
        <Image
            src="https://placehold.co/1200x400.png"
            alt="Expert guidance"
            fill
            className="object-cover opacity-20"
            data-ai-hint="man smiling phone"
        />
        <div className="relative z-10 flex items-center gap-6 text-left">
            <div className="hidden sm:flex w-20 h-20 rounded-full bg-white/10 flex-shrink-0 items-center justify-center backdrop-blur-sm border border-white/20">
                <FileText className="w-10 h-10 text-white" />
            </div>
            <div>
                <h3 className="text-3xl font-bold leading-tight">Expert Guidance for Your Financial Rise!</h3>
                <p className="text-base text-gray-300 mt-2">Customized Forex Strategy Consultation.</p>
            </div>
        </div>
        <div className="relative z-10">
            <Button className="bg-white text-black hover:bg-primary hover:text-primary-foreground rounded-full font-semibold px-8 py-3 text-base whitespace-nowrap">
                START NOW <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
    </Card>
);

export default function Features() {
  return (
    <section id="services" className="w-full py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-foreground">
            What We Offer
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            A comprehensive suite of tools and services to supercharge your trading journey. Explore our core features.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-16">
            <GuidanceCard />
        </div>
      </div>
    </section>
  );
}

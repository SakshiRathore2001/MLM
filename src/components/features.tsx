
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, TrendingUp, Repeat, ShieldCheck, Share2, FileText } from "lucide-react";
import Images from "@/constants/Images.constants";

const services = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Stable Monthly Profit Sharing",
    description: "Benefit from consistent monthly returns powered by our advanced AI, designed for predictable growth.",
  },
  {
    icon: <Repeat className="w-8 h-8 text-primary" />,
    title: "Flexible Reinvestment & Withdrawals",
    description: "Tailor your investment journey with customizable plans for reinvesting profits or making withdrawals.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "AI-Powered Risk Management",
    description: "Our AI dynamically manages positions and mitigates risks, safeguarding your capital around the clock.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "MNT Token Ecosystem",
    description: "Engage with the broader MrMint ecosystem through seamless MNT token integration and rewards.",
  },
];

const GuidanceCard = () => (
    <Card className="relative rounded-xl overflow-hidden p-8 text-white bg-emerald-800/50 h-full flex flex-col md:flex-row justify-between items-center gap-8">
        <Image
            src={Images.dynamic}
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
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="p-6 text-center bg-card">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="mt-2 text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
            <GuidanceCard />
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, GitCommit, BrainCircuit, Coins } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Stable Monthly Profit Sharing",
    description: "📈 Stable Monthly Profit Sharing (e.g., 5.4%)",
  },
  {
    icon: <GitCommit className="h-8 w-8 text-primary" />,
    title: "Reinvestment + Withdrawal Flexibility",
    description: "🔁 Reinvestment + Withdrawal Flexibility (Custom SWP Plan)",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "AI-based Risk Management",
    description: "🧠 AI-based Risk Management (Dynamic Position Control)",
  },
  {
    icon: <Coins className="h-8 w-8 text-primary" />,
    title: "MNT Token Ecosystem Integration",
    description: "🪙 MNT Token Ecosystem Integration",
  },
];

export default function Features() {
  return (
    <section id="objectives" className="w-full py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Core Objectives
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Our strategy is built on four key pillars to ensure sustainable growth and security for our clients.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <p className="mt-2 text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

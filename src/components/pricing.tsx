import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    price: "$19",
    description: "For individuals and small teams just getting started.",
    features: ["1 Project", "Basic Analytics", "Community Support"],
    isPopular: false,
  },
  {
    name: "Standard",
    price: "$49",
    description: "For growing teams that need more power and features.",
    features: ["5 Projects", "Advanced Analytics", "Priority Support", "Custom Branding"],
    isPopular: true,
  },
  {
    name: "Premium",
    price: "$99",
    description: "For large organizations with advanced needs.",
    features: ["Unlimited Projects", "Full Analytics Suite", "Dedicated Support", "API Access"],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Our Pricing Plans
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Choose a plan that fits your needs. No hidden fees.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn("flex flex-col", plan.isPopular && "border-primary ring-2 ring-primary shadow-lg")}>
              <CardHeader className="text-center">
                {plan.isPopular && (
                  <div className="text-sm font-semibold text-primary">MOST POPULAR</div>
                )}
                <CardTitle className="text-2xl pt-2">{plan.name}</CardTitle>
                <CardDescription className="pt-2">{plan.description}</CardDescription>
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

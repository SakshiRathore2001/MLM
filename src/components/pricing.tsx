"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "3 Year Plan",
    start: "$1000 Start",
    description: "Ideal for short-term growth with a balanced approach to reinvestment and withdrawal.",
    features: [
      "Monthly ROI: 5.4%", 
      "50% Reinvested, 50% Withdrawn", 
      "Year 1 Cumulative Withdrawal: $354", 
      "Final Capital: $1,730+ (Projected)"
    ],
    isPopular: false,
  },
  {
    name: "5 Year Plan",
    start: "$1000 Start",
    description: "A mid-term strategy for steady capital appreciation and consistent returns.",
    features: [
      "Monthly ROI: 5.4%", 
      "50% Reinvested, 50% Withdrawn", 
      "Cumulative Withdrawal: ~$800+", 
      "Final Capital: $3,000+ (Projected)"
    ],
    isPopular: true,
  },
  {
    name: "10 Year Plan",
    start: "$1000 Start",
    description: "Maximize long-term wealth generation through the power of compounding.",
    features: [
      "Monthly ROI: 5.4%", 
      "50% Reinvested, 50% Withdrawn", 
      "Cumulative Withdrawal: ~$2,500+", 
      "Final Capital: $10,000+ (Projected)"
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("5 Year Plan");

  return (
    <section id="plans" className="w-full py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Investment Plans
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Choose a plan that aligns with your financial goals.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              onClick={() => setSelectedPlan(plan.name)}
              className={cn(
                "flex flex-col cursor-pointer transition-shadow", 
                selectedPlan === plan.name ? "border-primary ring-2 ring-primary shadow-lg" : "hover:shadow-md"
              )}
            >
              <CardHeader className="text-center">
                {plan.isPopular && (
                  <div className="text-sm font-semibold text-primary">MOST POPULAR</div>
                )}
                <div className="inline-flex items-center justify-center gap-2">
                    <Briefcase className="h-6 w-6" />
                    <CardTitle className="text-2xl pt-2">{plan.name}</CardTitle>
                </div>
                <CardDescription className="pt-2">{plan.start}</CardDescription>
                <p className="text-muted-foreground text-sm px-4">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={selectedPlan === plan.name ? "default" : "outline"}>
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

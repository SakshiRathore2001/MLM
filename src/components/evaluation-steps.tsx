
"use client";

import { TrendingUp, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

const StepCard = ({ step, title, description }: { step: string; title: string; description: string; }) => (
    <div className="w-full text-center bg-card backdrop-blur-sm border-border rounded-lg p-8 shadow-lg h-full flex flex-col justify-center">
        <p className="text-primary font-bold tracking-wider">{step}</p>
        <h3 className="text-2xl font-bold mt-2 text-foreground">{title}</h3>
        <p className="mt-4 text-muted-foreground text-sm">{description}</p>
    </div>
);

const DownArrowCircle = () => (
    <div className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center bg-background">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
    </div>
);

const RightArrowCircle = () => (
    <div className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center bg-background">
        <ChevronRight className="w-6 h-6 text-muted-foreground" />
    </div>
);

const steps = [
    {
        step: "STEP #1",
        title: "Trading Challenge",
        description: "Pass our evaluation process to prove you have what it takes to be a funded trader."
    },
    {
        step: "STEP #2",
        title: "Verification",
        description: "Once you pass the challenge, we'll verify your results and get you set up with a funded account."
    },
    {
        step: "STEP #3",
        title: "Get Paid",
        description: "Trade our capital and keep up to 90% of the profits you generate. Get paid out regularly."
    }
];

export default function EvaluationSteps() {
  return (
    <section id="evaluation-steps" className="w-full py-20 md:py-32 bg-background text-foreground relative overflow-hidden">
      {/* Background Illustrations */}
      <Image 
        src="https://placehold.co/800x800.png"
        alt="Bull illustration"
        width={800}
        height={800}
        className="absolute top-1/2 left-0 opacity-[0.03] -translate-y-1/2 -translate-x-1/3 pointer-events-none"
        data-ai-hint="bull lineart"
      />
      <Image 
        src="https://placehold.co/800x800.png"
        alt="Bear illustration"
        width={800}
        height={800}
        className="absolute top-1/2 right-0 opacity-[0.03] -translate-y-1/2 translate-x-1/3 pointer-events-none"
        data-ai-hint="bear lineart"
      />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="flex justify-center items-center gap-2 text-primary font-semibold tracking-wider">
            <TrendingUp className="h-5 w-5" />
            <span>HOW IT WORKS</span>
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl mt-4">
            Deep Dive into Evaluation
        </h2>

        <div className="mt-16 max-w-5xl mx-auto">
            {/* Mobile View */}
            <div className="flex flex-col items-center gap-8 md:hidden">
                <StepCard {...steps[0]} />
                <DownArrowCircle />
                <StepCard {...steps[1]} />
                <DownArrowCircle />
                <StepCard {...steps[2]} />
            </div>

            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-8">
                 <StepCard {...steps[0]} />
                 <div className="flex justify-center items-center h-full pt-16">
                    <RightArrowCircle />
                 </div>
                 <StepCard {...steps[1]} />
                 <div className="flex justify-center items-center h-full pt-16">
                    <RightArrowCircle />
                 </div>
                 <StepCard {...steps[2]} />
            </div>
        </div>
      </div>
    </section>
  );
}

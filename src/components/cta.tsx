import { PlayCircle, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const StepCard = ({ step, title }: { step: string; title: string; }) => (
    <div className="w-full text-center bg-card backdrop-blur-sm border-border rounded-lg p-8 shadow-lg h-full flex flex-col justify-center">
        <p className="text-primary font-bold tracking-wider">{step}</p>
        <h3 className="text-2xl font-bold mt-2 text-foreground">{title}</h3>
    </div>
);

const DownArrowCircle = () => (
    <div className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center bg-background">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
    </div>
);

export default function Cta() {
  return (
    <section id="evaluation" className="w-full py-20 md:py-32 bg-background text-foreground relative overflow-hidden">
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
            <span>HOW IT'S WORK</span>
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl mt-4">
            Deep Dive into Evaluation
        </h2>

        <div className="mt-16 max-w-5xl mx-auto">
            {/* Video Player Placeholder */}
            <div className="relative bg-card/50 border border-border rounded-xl p-8 flex items-center justify-center min-h-[300px] overflow-hidden backdrop-blur-sm">
                <span className="absolute text-8xl md:text-[10rem] font-black text-foreground/5 select-none z-0">PROCESS</span>
                <div className="relative z-10 text-center">
                    <p className="font-semibold tracking-widest text-foreground">EVALUATION</p>
                    <button className="mt-4 text-primary hover:text-primary/80 transition-colors" aria-label="Play video">
                        <PlayCircle className="h-16 w-16 md:h-20 md:w-20" />
                    </button>
                </div>
            </div>

            {/* Mobile View */}
            <div className="mt-12 flex flex-col items-center gap-8 md:hidden">
                <DownArrowCircle />
                <StepCard step="STEP #1" title="Trading Challenge" />
                <DownArrowCircle />
                <StepCard step="STEP #2" title="Verification" />
                <DownArrowCircle />
                <StepCard step="STEP #3" title="Get Paid" />
            </div>

            {/* Desktop View */}
            <div className="hidden md:block mt-16 relative">
                 {/* Connectors */}
                <div className="absolute top-0 left-1/4 -translate-x-5"> <DownArrowCircle /> </div>
                <div className="absolute top-0 right-1/4 -translate-x-5"> <DownArrowCircle /> </div>
                <div className="absolute top-[28px] left-1/4 right-1/4 h-px bg-border"></div>
                <div className="absolute top-[28px] left-1/2 w-px h-16 bg-border"></div>
                <div className="absolute top-[88px] left-1/2 -translate-x-5"> <DownArrowCircle /> </div>

                <div className="grid grid-cols-2 gap-x-8 pt-20">
                    <StepCard step="STEP #1" title="Trading Challenge" />
                    <StepCard step="STEP #3" title="Get Paid" />
                </div>
                <div className="flex justify-center mt-24">
                    <div className="w-full max-w-md">
                        <StepCard step="STEP #2" title="Verification" />
                    </div>
                </div>
            </div>
        </div>

      </div>
      <div className="fixed bottom-8 right-8 z-50">
        <Link href="#home" className="hidden md:inline-flex" aria-label="Scroll to top">
            <Button size="icon" className="rounded-full h-14 w-14 bg-primary hover:bg-primary/90 shadow-lg">
                <ChevronUp className="h-8 w-8" />
            </Button>
        </Link>
      </div>
    </section>
  );
}

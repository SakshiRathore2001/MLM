"use client";

import Image from "next/image";
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Images from '../constants/Images.constants';

const slides = [
  {
    tagline: "SMART PROFIT SYSTEM & FLEXIBLE SWP PLAN ",
    title: "AI TRADING AGENT",
    description:
      "Our goal is to provide a FIXED, STABLE ROI. Trading risk is controlled by AI.",
    image: Images.business4,
    imageHint: "ai trading bot",
    // featureImage: Images.business4,
    featureImageHint: "robot trading chart",
  },
  {
    tagline: "UNLOCK YOUR TRADING POTENTIAL",
    title: "BECOME A FUNDED TRADER",
    description:
      "Pass our evaluation and get access to a funded account with up to $200,000 in capital.",
    image: Images.business2,
    imageHint: "stock market graph",
    // featureImage: Images.traderScreen,
    featureImageHint: "trader looking at screen",
  },
  {
    tagline: "KEEP UP TO 90% OF PROFITS",
    title: "PROFIT-SHARING MODEL",
    description:
      "Our success is tied to yours. We provide the capital, you provide the skill. It's a win-win.",
    image: Images.traderScreen,
    imageHint: "financial success",
    // featureImage: "https://placehold.co/600x600.png",
    featureImageHint: "gold coins pile",
  },
];

const RotatingCircle = () => (
  <div className="relative h-48 w-48">
    <div className="absolute inset-0 animate-spin-slow">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <path d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="hsl(var(--primary))" />
        <path
          id="circlePath"
          fill="none"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        />
        <text>
          <textPath
            href="#circlePath"
            className="text-sm font-bold uppercase tracking-widest"
            fill="hsl(var(--primary-foreground))"
          >
            AI • TRADING • AGENT • AI • TRADING • AGENT •
          </textPath>
        </text>
      </svg>
    </div>
  </div>
);

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsAnimating(false);
    }, 500); // Corresponds to the animation duration
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section id="home" className="w-full overflow-hidden relative text-foreground min-h-[calc(100vh-128px)] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 transition-opacity duration-500 ease-in-out" style={{ opacity: isAnimating ? 0 : 1 }}>
        <Image
          src={currentSlide.image}
          alt="Background"
          fill
          className="object-cover"
          data-ai-hint={currentSlide.imageHint}
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCh2YXIoLS1ib3JkZXIpKSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTAgLjVIMzJNLjUgMFYzMiIvPjwvc3ZnPg==')] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsla(155,65%,55%,0.1),transparent)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6 py-12">
            <div className={cn("flex items-center gap-2 text-primary font-semibold tracking-wider transition-all duration-500", isAnimating ? "opacity-0" : "opacity-100")}>
              <TrendingUp className="h-5 w-5" />
              <span>{currentSlide.tagline}</span>
            </div>
            <h1
              className={cn("text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl !leading-tight transition-all duration-500", isAnimating ? "opacity-0" : "opacity-100")}
            >
              {currentSlide.title}
            </h1>
            <p className={cn("max-w-xl text-muted-foreground md:text-lg transition-all duration-500", isAnimating ? "opacity-0" : "opacity-100")}>
              {currentSlide.description}
            </p>
          </div>
          {/* <div className="relative hidden md:flex items-center justify-center">
            <Image
              src={currentSlide.featureImage}
              alt="AI Trading Agent"
              width={600}
              height={600}
              className={cn("transition-all duration-500 ease-in-out", isAnimating ? "opacity-0 scale-90" : "opacity-80 scale-100")}
              data-ai-hint={currentSlide.featureImageHint}
            />
          </div> */}
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full hidden md:flex flex-col justify-center items-center gap-12 bg-card/50 p-6 backdrop-blur-sm border-l border-border">
        <div className="flex flex-col gap-4 text-center text-xs font-bold uppercase tracking-widest">
          <button onClick={handlePrev} className="hover:text-primary transition-colors">Prev</button>
          <div className="flex flex-col gap-2 items-center">
            {slides.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  currentIndex === index ? "bg-primary scale-125" : "bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
          <button onClick={handleNext} className="hover:text-primary transition-colors">Next</button>
        </div>
        <div className="mt-24">
          <RotatingCircle />
        </div>
      </div>
    </section>
  );
}

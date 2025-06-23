"use client";

import Image from "next/image";
import { TrendingUp } from "lucide-react";

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

  return (
    <section id="home" className="w-full overflow-hidden relative text-foreground min-h-[calc(100vh-128px)] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
            <Image
                src="https://placehold.co/1920x1080.png"
                alt="Background"
                fill
                className="object-cover opacity-20"
                data-ai-hint="ai trading bot"
                priority
            />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCh2YXIoLS1ib3JkZXIpKSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTAgLjVIMzJNLjUgMFYzMiIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsla(155,65%,55%,0.1),transparent)]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-6 py-12">
                    <div className="flex items-center gap-2 text-primary font-semibold tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <TrendingUp className="h-5 w-5" />
                        <span>SMART PROFIT SYSTEM + FLEXIBLE SWP PLAN</span>
                    </div>
                    <h1
                        className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl !leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000"
                    >
                       🔥 AI TRADING AGENT
                    </h1>
                    <p className="max-w-xl text-muted-foreground md:text-lg animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        हमारा उद्देश्य है एक FIXED, STABLE ROI देना। ट्रेडिंग रिस्क को एआई द्वारा कंट्रोल किया जाता है।
                    </p>
                </div>
                <div className="relative hidden md:flex items-center justify-center">
                    <Image
                        src="https://placehold.co/600x600.png"
                        alt="AI Trading Agent"
                        width={600}
                        height={600}
                        className="opacity-80 animate-in fade-in zoom-in-75 duration-1000"
                        data-ai-hint="robot trading chart"
                    />
                </div>
            </div>
        </div>
        <div className="absolute right-0 top-0 h-full hidden md:flex flex-col justify-center items-center gap-12 bg-card/50 p-6 backdrop-blur-sm border-l border-border">
            <div className="mt-24">
                <RotatingCircle />
            </div>
        </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react";

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
                Discover • Prosper • Trade • Discover • Prosper • Trade •
              </textPath>
            </text>
        </svg>
      </div>
    </div>
  );

export default function Hero() {
  return (
    <section id="home" className="w-full overflow-hidden relative text-foreground" style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(160 20% 6%) 100%)'}}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCgwIDAlIDEwMCUgMC4wNSkiPjxwYXRoIGQ9Ik0wIC41SDMyTTYuNSAwVjMyTTIzIDBWMyINCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9Ik0xMi41IDBWMzJNMTkuNSA0VjMyIi8+PC9zdmc+')] opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsla(155,65%,55%,0.1),transparent)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-2 min-h-[calc(100vh-128px)]">
                <div className="flex flex-col justify-center space-y-6 py-12">
                    <div className="flex items-center gap-2 text-primary font-semibold tracking-wider">
                        <TrendingUp className="h-5 w-5" />
                        <span>PROFIT WITH PRECISION</span>
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl !leading-tight">
                        Excellence in <br />
                        every trade, <br />
                        prosperity in <br />
                        every move.
                    </h1>
                </div>
                <div className="relative hidden md:flex items-center justify-center">
                    <Image
                        src="https://placehold.co/600x600.png"
                        alt="Stacked gold coins"
                        width={600}
                        height={600}
                        className="opacity-80"
                        data-ai-hint="gold coins stack"
                    />
                </div>
            </div>
        </div>
        <div className="absolute right-0 top-0 h-full hidden md:flex flex-col justify-center items-center gap-12 bg-card/10 p-6 backdrop-blur-sm border-l border-border">
            <div className="mt-24">
                <RotatingCircle />
            </div>
            <div className="flex flex-col items-center gap-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                <button className="flex items-center gap-2 hover:text-primary">
                    <ArrowUp className="h-4 w-4" />
                    <span>Prev</span>
                </button>
                <div className="h-16 w-px bg-border"></div>
                <button className="flex items-center gap-2 hover:text-primary">
                    <span>Next</span>
                    <ArrowDown className="h-4 w-4" />
                </button>
            </div>
        </div>
    </section>
  );
}

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Download, Landmark, LineChart, PauseCircle, PieChart, TrendingUp, Wallet } from "lucide-react";
import SwpChart from "./swp-chart";

const flowSteps = [
    {
        icon: <Landmark className="h-8 w-8" />,
        title: "Initial Investment",
        description: "User invests a fixed amount (e.g., $1000) into the AI Trading Agent. Funds are allocated to AI-managed trading pools."
    },
    {
        icon: <LineChart className="h-8 w-8" />,
        title: "Profit Generation",
        description: "Profits are generated using AI-powered strategies. A predefined minimum ROI (e.g., 5% monthly) is targeted."
    },
    {
        icon: <PieChart className="h-8 w-8" />,
        title: "Profit Segregation",
        description: "At the end of each cycle, a portion is reinvested, a portion is withdrawn, and fees/referrals are calculated."
    },
    {
        icon: <Wallet className="h-8 w-8" />,
        title: "Distribution Mechanism",
        description: "Example breakdown: 60% to user (withdrawable), 20% reinvested, 10% AI platform fee, 10% referral bonuses."
    },
    {
        icon: <Download className="h-8 w-8" />,
        title: "Withdrawal Options",
        description: "Set fixed monthly withdrawals, percentage-based withdrawals, or complete profit withdrawal with no reinvestment."
    },
    {
        icon: <PauseCircle className="h-8 w-8" />,
        title: "Flexibility & Pause",
        description: "Users may pause withdrawals for full reinvestment or make emergency withdrawals (penalty/delay may apply)."
    }
]

export default function SwpPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full py-20 md:py-24 text-white">
                <Image
                    src="https://placehold.co/1920x1080.png"
                    alt="SWP background"
                    fill
                    className="object-cover"
                    data-ai-hint="investment strategy chart"
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Systematic Withdrawal Plan (SWP)</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">A disciplined investment strategy for consistent cash flow without liquidating your entire investment.</p>
                </div>
            </section>

            {/* What is SWP? */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-3xl font-bold text-primary">What is SWP?</h2>
                                <p className="mt-4 text-muted-foreground">
                                    The Systematic Withdrawal Plan (SWP) in the context of our AI Trading Agent is a disciplined financial mechanism that enables investors to withdraw a fixed or custom amount of profit at regular intervals—while the remaining capital continues to compound through AI-powered trading strategies.
                                </p>
                                <p className="mt-4 text-muted-foreground">
                                    Unlike traditional investment models, our SWP is smart, adaptive, and optimized for both wealth growth and liquidity. It is built to support your financial journey with predictable returns, customizable reinvestment logic, and low risk exposure—all guided by intelligent automation.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                                    <Wallet className="h-6 w-6" />
                                    <span>Key Benefits</span>
                                </h3>
                                <ul className="mt-4 space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3"><TrendingUp className="h-4 w-4 mt-1 text-primary/70 flex-shrink-0" /><span>Regular and predictable passive income stream</span></li>
                                    <li className="flex items-start gap-3"><TrendingUp className="h-4 w-4 mt-1 text-primary/70 flex-shrink-0" /><span>Capital continues to grow through AI-backed reinvestment</span></li>
                                    <li className="flex items-start gap-3"><TrendingUp className="h-4 w-4 mt-1 text-primary/70 flex-shrink-0" /><span>Flexibility to set monthly, quarterly, or custom withdrawal cycles</span></li>
                                    <li className="flex items-start gap-3"><TrendingUp className="h-4 w-4 mt-1 text-primary/70 flex-shrink-0" /><span>Low emotional stress—powered by data, not impulses</span></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                                    <Bot className="h-6 w-6" />
                                    <span>How It Works</span>
                                </h3>
                                <ul className="mt-4 space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3"><TrendingUp className="h-4 w-4 mt-1 text-primary/70 flex-shrink-0" /><span>Your profits are calculated based on trading performance</span></li>
                                    <li className="flex items-start gap-3"><TrendingUp className="h-4 w-4 mt-1 text-primary/70 flex-shrink-0" /><span>A percentage (e.g., 50%) is reinvested automatically</span></li>
                                    <li className="flex items-start gap-3"><TrendingUp className="h-4 w-4 mt-1 text-primary/70 flex-shrink-0" /><span>The remaining profit is sent to your wallet periodically</span></li>
                                    <li className="flex items-start gap-3"><TrendingUp className="h-4 w-4 mt-1 text-primary/70 flex-shrink-0" /><span>All decisions follow preset rules, removing human error</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src="https://placehold.co/600x800.png" alt="SWP diagram" width={600} height={800} className="rounded-lg shadow-2xl" data-ai-hint="futuristic financial chart" />
                        </div>
                    </div>
                </div>
            </section>

             {/* SWP Flow */}
            <section className="py-20 md:py-24 bg-card">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold">SWP Flow Overview</h2>
                        <p className="mt-4 text-muted-foreground">From initial investment to profit distribution, here's how our automated SWP process works.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {flowSteps.map((step) => (
                            <Card key={step.title} className="bg-background p-6 text-center flex flex-col items-center">
                                <div className="text-primary mb-4">{step.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* SWP Simulation */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold">SWP Simulation</h2>
                        <p className="mt-4 text-muted-foreground">This simulation illustrates how your capital grows steadily due to partial reinvestment while you continue to withdraw a portion monthly—achieving both growth and liquidity.</p>
                    </div>
                    <Card className="p-4 md:p-6">
                        <SwpChart />
                    </Card>
                </div>
            </section>
        </div>
    )
}

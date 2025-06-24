import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bot, Download, Landmark, LineChart, PauseCircle, PieChart, TrendingUp, UserCheck, Wallet } from "lucide-react";
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

const benefits = [
    {
        icon: <Wallet className="h-6 w-6 text-primary" />,
        title: "Regular Income",
        description: "Provides passive income from trading profits."
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-primary" />,
        title: "Capital Growth",
        description: "Ensures part of the capital is always reinvested."
    },
    {
        icon: <Landmark className="h-6 w-6 text-primary" />,
        title: "Liquidity Control",
        description: "Withdrawals don’t interrupt the trading strategy."
    },
    {
        icon: <BarChart className="h-6 w-6 text-primary" />,
        title: "Goal-Oriented",
        description: "Useful for monthly goals (bills, savings, etc.)."
    },
    {
        icon: <Bot className="h-6 w-6 text-primary" />,
        title: "Automation",
        description: "Fully automated by AI, minimal user intervention."
    }
]

const aiCustomization = [
    "User risk profile",
    "Target ROI",
    "Investment tenure",
    "Withdrawal frequency",
    "Referral earnings",
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
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">What is SWP?</h2>
                            <p className="text-lg text-muted-foreground">The Systematic Withdrawal Plan (SWP) in the context of your AI Trading Agent refers to a structured method where profits earned through trading are withdrawn periodically in a controlled, rule-based manner—balancing reinvestment, liquidity, and user incentives.</p>
                            <p className="text-muted-foreground">This approach allows you to enjoy a regular income stream while your core investment continues to grow through the power of our AI-driven strategies.</p>
                        </div>
                        <div>
                            <Image src="https://placehold.co/600x400.png" alt="SWP diagram" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="flowchart diagram finance" />
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

            {/* Benefits & Customization */}
            <section className="py-20 md:py-24 bg-card">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-bold mb-8">Benefits of SWP</h2>
                            <div className="space-y-6">
                                {benefits.map((benefit) => (
                                    <div key={benefit.title} className="flex items-start gap-4">
                                        <div className="flex-shrink-0">{benefit.icon}</div>
                                        <div>
                                            <h4 className="font-semibold">{benefit.title}</h4>
                                            <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                             <Card className="bg-primary/10 p-6 h-full border-primary">
                                <CardHeader className="p-0">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Bot className="h-8 w-8 text-primary" />
                                        <CardTitle className="text-2xl">AI Customization</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-muted-foreground mb-4">The AI Trading Agent can personalize SWP based on:</p>
                                    <ul className="space-y-3">
                                        {aiCustomization.map((item) => (
                                            <li key={item} className="flex items-center gap-3">
                                                <UserCheck className="h-5 w-5 text-primary flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                             </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

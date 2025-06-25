
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, TrendingUp, Zap } from "lucide-react";
import RoiChart from "./roi-chart";
import Images from "@/constants/Images.constants";

const roiExampleData = [
    { month: 1, capitalBefore: 1000.00, monthlyProfit: 54.00, withdrawn: 27.00, reinvested: 27.00, newCapital: 1027.00, cumulative: 27.00 },
    { month: 2, capitalBefore: 1027.00, monthlyProfit: 55.46, withdrawn: 27.73, reinvested: 27.73, newCapital: 1054.73, cumulative: 54.73 },
    { month: 3, capitalBefore: 1054.73, monthlyProfit: 56.96, withdrawn: 28.48, reinvested: 28.48, newCapital: 1083.21, cumulative: 83.21 },
    { month: 4, capitalBefore: 1083.21, monthlyProfit: 58.49, withdrawn: 29.25, reinvested: 29.25, newCapital: 1112.45, cumulative: 112.45 },
    { month: 5, capitalBefore: 1112.45, monthlyProfit: 60.07, withdrawn: 30.04, reinvested: 30.04, newCapital: 1142.49, cumulative: 142.49 },
];

const roiBenefits = [
    { icon: <TrendingUp className="h-6 w-6 text-primary" />, title: "Predictable Growth", description: "With fixed ROI and reinvestment strategies, users can predict the growth of their capital." },
    { icon: <DollarSign className="h-6 w-6 text-primary" />, title: "Consistency", description: "Ensures a stable income stream through regular withdrawals and reinvestment." },
    { icon: <Zap className="h-6 w-6 text-primary" />, title: "Scalability", description: "Users can scale their investments, increasing monthly profit and withdrawal amounts." }
];

export default function RoiPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full py-20 md:py-24 text-white">
                <Image
                    src={Images.bgmainn}
                    alt="ROI background"
                    fill
                    className="object-cover"
                    data-ai-hint="return on investment graph"
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Return on Investment (ROI)</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Understand how ROI measures the profitability of an investment relative to its cost in our AI Trading System.
                    </p>
                </div>
            </section>

            {/* What is ROI? */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary">What is ROI?</h2>
                            <p className="text-lg text-muted-foreground">
                                Return on Investment (ROI) measures the profitability of an investment relative to its cost. In the context of your AI Trading Agent, ROI is calculated based on the trading profits generated from capital, considering both the monthly profits and the amount withdrawn or reinvested.
                            </p>
                            <h3 className="text-2xl font-bold pt-4">How ROI Works</h3>
                            <p className="text-muted-foreground">
                                The user starts with a fixed capital, and the AI aims to generate a monthly profit (e.g., 5.4% monthly). This profit is then split between withdrawal and reinvestment, ensuring both short-term liquidity and long-term growth.
                            </p>
                        </div>
                        <div>
                            <Image src={Images.graphimage} alt="ROI diagram" width={500} height={200} className="rounded-lg shadow-lg" data-ai-hint="financial growth chart" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Example Calculation */}
            <section className="py-20 md:py-24 bg-card">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold">Example Calculation</h2>
                        <p className="mt-4 text-muted-foreground">This table shows a 5-month projection based on a $1,000 initial investment with a 5.4% monthly ROI, split 50/50 between withdrawal and reinvestment.</p>
                    </div>
                    <Card>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Month</TableHead>
                                    <TableHead className="hidden md:table-cell">Capital Before Profit</TableHead>
                                    <TableHead className="hidden sm:table-cell">Monthly Profit (5.4%)</TableHead>
                                    <TableHead>Withdrawn</TableHead>
                                    <TableHead className="hidden sm:table-cell">Reinvested</TableHead>
                                    <TableHead>New Capital</TableHead>
                                    <TableHead className="hidden md:table-cell">Cumulative Withdrawal</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {roiExampleData.map((row) => (
                                    <TableRow key={row.month}>
                                        <TableCell>{row.month}</TableCell>
                                        <TableCell className="hidden md:table-cell">${row.capitalBefore.toFixed(2)}</TableCell>
                                        <TableCell className="hidden sm:table-cell">${row.monthlyProfit.toFixed(2)}</TableCell>
                                        <TableCell>${row.withdrawn.toFixed(2)}</TableCell>
                                        <TableCell className="hidden sm:table-cell">${row.reinvested.toFixed(2)}</TableCell>
                                        <TableCell>${row.newCapital.toFixed(2)}</TableCell>
                                        <TableCell className="hidden md:table-cell">${row.cumulative.toFixed(2)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>
            </section>

            {/* ROI Simulation Chart */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold">ROI And Capital Growth In SWP</h2>
                        <p className="mt-4 text-muted-foreground">This graph illustrates how the capital grows with reinvestment, while the withdrawals gradually increase.</p>
                    </div>
                    <Card className="p-4 md:p-6">
                        <RoiChart />
                    </Card>
                </div>
            </section>

            {/* ROI Benefits */}
            <section className="py-20 md:py-24 bg-card">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold">ROI Benefits</h2>
                        <p className="mt-4 text-muted-foreground">Our system is designed to provide consistent, scalable, and predictable returns.</p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        {roiBenefits.map((benefit) => (
                            <Card key={benefit.title} className="bg-background p-6 text-center flex flex-col items-center">
                                <div className="text-primary mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm flex-grow">{benefit.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

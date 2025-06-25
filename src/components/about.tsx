
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TrendingUp, ShieldCheck, PieChart, Quote, ArrowRight, Database, KeyRound, FileClock, CalendarCheck2, Activity, HeartHandshake, BrainCircuit, AreaChart, Wallet, Sparkles } from "lucide-react";
import Images from "@/constants/Images.constants";

// Data for the page
const aumBreakdown = [
    { strategy: "AI Trading", allocation: "60%" },
    { strategy: "Risk Management", allocation: "25%" },
    { strategy: "Market Insights", allocation: "10%" },
    { strategy: "Fixed Income", allocation: "5%" },
];

const securityFeatures = [
    { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "End-to-End Encryption", description: "All user and transaction data is encrypted to the highest standards, ensuring your information remains confidential and secure." },
    { icon: <Database className="h-8 w-8 text-primary" />, title: "Insurance Coverage", description: "In the unlikely event of platform failure, our comprehensive insurance policy is in place to protect your investments." },
    { icon: <KeyRound className="h-8 w-8 text-primary" />, title: "AI-Powered Risk Management", description: "Our proprietary risk models actively monitor and adjust investments to minimize losses during market volatility." },
];

const testimonials = [
    {
        name: "John D.",
        quote: "I’ve seen incredible growth with the AUM platform. The transparency and consistent results give me peace of mind knowing my assets are in safe hands.",
        image: Images.rating3,
    },
    {
        name: "Emily S.",
        quote: "The AI-driven investment strategies are unlike anything I’ve seen. I’m more confident in my investments than ever before.",
        image: Images.rating2,
    },
];


const stats = [
    { icon: <FileClock className="h-10 w-10 text-primary" />, value: "4 Hours", description: "Avg Payout Processing Time" },
    { icon: <CalendarCheck2 className="h-10 w-10 text-primary" />, value: "2 Days", description: "To Earn a Trading Account" },
    { icon: <Activity className="h-10 w-10 text-primary" />, value: "10 Million", description: "No. of Trades Opened Last Month" },
    { icon: <TrendingUp className="h-10 w-10 text-primary" />, value: "8+ Years", description: "Providing Funds to Futures Traders" }
];

const whyChooseUs = [
    { icon: <BrainCircuit className="h-8 w-8 text-primary" />, title: "AI-Powered Trading", description: "Our advanced algorithms analyze markets 24/7 to execute trades with precision and speed." },
    { icon: <AreaChart className="h-8 w-8 text-primary" />, title: "Predictable ROI", description: "Benefit from our stable, fixed ROI models designed for consistent and predictable growth." },
    { icon: <Wallet className="h-8 w-8 text-primary" />, title: "Flexible SWP", description: "Customize your cash flow with our Systematic Withdrawal Plan to suit your financial goals." },
    { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Top-Tier Security", description: "Your investments are protected with end-to-end encryption and comprehensive insurance coverage." },
    { icon: <HeartHandshake className="h-8 w-8 text-primary" />, title: "Profit Sharing", description: "We succeed when you do. Our model ensures our interests are fully aligned with yours." },
    { icon: <Sparkles className="h-8 w-8 text-primary" />, title: "Transparent Reporting", description: "Stay informed with real-time performance tracking and detailed reports on your AUM." }
];


export default function About() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full py-20 md:py-24 text-white">
                <Image
                    src={Images.bg3}
                    alt="AUM background"
                    fill
                    className="object-cover"
                    data-ai-hint="business meeting analytics"
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Our Assets Under Management (AUM)</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        At Fxvibe, we are committed to building lasting wealth for our investors. AUM is a critical indicator of the trust and success we've built, and we're proud to share our growth with you.
                    </p>
                </div>
            </section>

            {/* AUM Overview */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Total AUM Overview</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="text-center p-8 bg-card shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-4xl font-extrabold">$150M+</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Total AUM</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-8 bg-card shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-4xl font-extrabold">35%</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Increase (Year Over Year)</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                className="py-20 md:py-24 bg-[#1a2e2a] text-white relative"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgba(95,184,172,0.1)'%3e%3cpath d='M0 16h16l8-8m-4 16l8-8'/%3e%3c/svg%3e\")" }}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.value} className="flex flex-col items-center text-center">
                                {stat.icon}
                                <h3 className="text-3xl md:text-4xl font-bold mt-4">{stat.value}</h3>
                                <p className="text-sm text-gray-300 mt-2 max-w-[150px] mx-auto">{stat.description}</p>
                                <div className="w-16 h-px bg-primary/50 mt-4"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
                        <p className="mt-4 text-muted-foreground">Discover the advantages of partnering with Fxvibe for your investment journey.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((reason) => (
                            <Card key={reason.title} className="bg-card p-6 text-center">
                                <div className="mb-4 inline-block">{reason.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                                <p className="text-muted-foreground text-sm">{reason.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* AUM Breakdown & Performance */}
            <section className="py-20 md:py-24 bg-card">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-2 text-primary font-semibold tracking-wider mb-4">
                                <PieChart className="h-5 w-5" />
                                <span>AUM BREAKDOWN BY STRATEGY</span>
                            </div>
                            <p className="text-muted-foreground mb-6">Our AUM is diversified across various trading strategies to minimize risk and maximize returns.</p>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Strategy</TableHead>
                                        <TableHead className="text-right">Allocation</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {aumBreakdown.map((item) => (
                                        <TableRow key={item.strategy}>
                                            <TableCell className="font-medium">{item.strategy}</TableCell>
                                            <TableCell className="text-right">{item.allocation}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-primary font-semibold tracking-wider mb-4">
                                <TrendingUp className="h-5 w-5" />
                                <span>PERFORMANCE TRACKING</span>
                            </div>
                            <p className="text-muted-foreground mb-6">Our system offers detailed tracking of your assets' performance. A line graph here would show AUM growth over time.</p>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-background p-4 rounded-lg">
                                    <p className="text-2xl font-bold">1.8%</p>
                                    <p className="text-xs text-muted-foreground">Monthly Growth</p>
                                </div>
                                <div className="bg-background p-4 rounded-lg">
                                    <p className="text-2xl font-bold">21.6%</p>
                                    <p className="text-xs text-muted-foreground">Annual Growth</p>
                                </div>
                                <div className="bg-background p-4 rounded-lg">
                                    <p className="text-2xl font-bold">75%</p>
                                    <p className="text-xs text-muted-foreground">Total Return</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold">Security and Risk Management</h2>
                        <p className="mt-4 text-muted-foreground">We understand the importance of securing your investments. That's why we have implemented top-tier security measures.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {securityFeatures.map((feature) => (
                            <Card key={feature.title} className="bg-card p-6 text-center">
                                <div className="mb-4 inline-block">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 md:py-24 bg-card">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold">Client Testimonials</h2>
                        <p className="mt-4 text-muted-foreground">We value the trust of our investors. Here's what some of them have to say.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.name} className="p-6 flex flex-col items-center text-center">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full mb-4 object-cover"
                                />
                                <CardContent className="p-0">
                                    {/* <Quote className="h-8 w-8 text-primary/50 mb-4 mx-auto" /> */}
                                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                                    <p className="font-semibold">- {testimonial.name}</p>
                                </CardContent>
                            </Card>

                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            {/* <section className="w-full py-20 md:py-24 bg-primary/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
                        Ready to Start Investing?
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        Join us today and let our AI-driven strategies work for you.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg">
                            <Link href="/evaluation">
                                Start Your Evaluation Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

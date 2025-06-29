
import Image from "next/image";
import EvaluationSteps from "./evaluation-steps";
import ProfitCalculator from "./profit-calculator";
import { TrendingUp, Calculator } from "lucide-react";
import Images from "@/constants/Images.constants";

export default function EvaluationPage() {
    return (
        <div className="bg-background">
            <section className="relative w-full py-20 md:py-24 text-white">
                <Image
                    src={Images.bg1}
                    alt="Evaluation background"
                    fill
                    className="object-cover"
                    data-ai-hint="financial planning desk"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="flex items-center gap-2 text-primary font-semibold tracking-wider">
                                <Calculator className="h-5 w-5" />
                                <span>PLAN YOUR PROFIT</span>
                            </div>
                            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl mt-4">
                                Calculate Your Potential Earnings
                            </h2>
                            <p className="mt-4 text-gray-300 md:text-lg">
                                Use our interactive calculator to project your profits based on different investment amounts and time periods. See how our profit-sharing model works and plan your financial journey with confidence.
                            </p>
                        </div>
                        <div>
                            <ProfitCalculator />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-20 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="relative">
                        {/* <Image
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
                        /> */}
                        <div className="text-center mb-12">
                            <div className="flex justify-center items-center gap-2 text-primary font-semibold tracking-wider">
                                <TrendingUp className="h-5 w-5" />
                                <span>HOW IT WORKS</span>
                            </div>
                            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl mt-4">
                                Deep Dive into Our Evaluation Process
                            </h2>
                        </div>
                        <EvaluationSteps />
                    </div>
                </div>
            </section>
        </div>
    );
}


import Image from "next/image";
import Link from "next/link";
import EvaluationSteps from "./evaluation-steps";

export default function EvaluationPage() {
    return (
        <div>
            <section className="relative w-full py-20 md:py-24 text-white">
                <Image
                    src="https://placehold.co/1920x1080.png"
                    alt="Evaluation background"
                    fill
                    className="object-cover"
                    data-ai-hint="abstract geometric background"
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold">Evaluation Process</h1>
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                            <Link href="/" className="hover:text-white">Home</Link>
                            <span>&gt;</span>
                            <span>Evaluation</span>
                        </div>
                    </div>
                </div>
            </section>
            <EvaluationSteps />
        </div>
    );
}

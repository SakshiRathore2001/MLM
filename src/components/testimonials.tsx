import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Lock } from "lucide-react";

const insights = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Single-Level Marketing",
    insight: "🎯 Landing page has single-level marketing plan.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "MrMint Ecosystem",
    insight: "💡 2.5% of trading profit is used in MrMint ecosystem.",
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "MNT Token Reserve",
    insight: "🔒 10% deposit reserved for MNT token purchase + reward pool.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            System Insights
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Key operational details that define our system's architecture and strategy.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {insights.map((item) => (
            <Card key={item.title} className="text-center">
               <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">
                  {item.insight}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Settings, Smartphone, Code } from "lucide-react";

const features = [
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: "Modern Design",
    description: "A sleek and contemporary design that will make your project stand out.",
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Easy to Customize",
    description: "Built with Tailwind CSS, making it simple to modify and adapt to your brand.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Fully Responsive",
    description: "Looks great on any device, from mobile phones to desktop computers.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Clean Code",
    description: "Well-structured and commented code that is easy to understand and maintain.",
  },
];

export default function Features() {
  return (
    <section id="services" className="w-full py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            FXVibe comes with all the features you need to launch your next project.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

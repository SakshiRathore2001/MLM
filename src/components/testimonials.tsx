import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "person portrait",
    testimonial: "FXVibe has been a game-changer for our development team. The clean code and modern design allowed us to launch our new site in record time.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, Innovate LLC",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "person portrait",
    testimonial: "As a developer, I appreciate the attention to detail. It's easy to customize and the responsiveness is flawless. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Creative Minds",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    testimonial: "This template saved us weeks of work. The design is beautiful and our users love the new look and feel of our platform.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We're trusted by leading companies and startups.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <p className="text-muted-foreground">"{item.testimonial}"</p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={item.avatar} alt={item.name} data-ai-hint={item.aiHint} />
                    <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

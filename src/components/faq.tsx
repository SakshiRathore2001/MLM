import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this template built with the Next.js App Router?",
    answer: "Yes, it's built using the latest Next.js features, including the App Router, Server Components, and Server Actions for optimal performance and developer experience.",
  },
  {
    question: "Can I use this for commercial projects?",
    answer: "Absolutely. You can use this template for any personal or commercial project. We just ask that you don't resell the template itself.",
  },
  {
    question: "What is included in the purchase?",
    answer: "You get access to the full source code, documentation, and any future updates to the template. Support is available via our community channels.",
  },
  {
    question: "How do I customize the theme and colors?",
    answer: "The template uses Tailwind CSS and CSS variables. You can easily change the color scheme, fonts, and other design tokens by editing the `globals.css` and `tailwind.config.ts` files.",
  },
];

export default function Faq() {
  return (
    <section className="w-full py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Have questions? We've got answers.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index + 1}`} key={faq.question}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}


"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronUp, Mail, Phone, MessageCircleQuestion, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const RequestCallBackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-primary"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.1 2.9a2 2 0 0 1 2.12.04 2 2 0 0 1 .71 2.56 2 2 0 0 1-2.56.71 2 2 0 0 1-.71-2.56 2 2 0 0 1 .04-2.12Z" />
    <path d="M15 9h.01" />
  </svg>
);

const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.42 3.62 2.42 5.82-1.554e-5 4.54-3.7 8.24-8.23 8.24z M17.47 14.38c-.297-.149-.758-.372-1.03-.46-.272-.088-.48-.149-.652.149-.172.296-.62.757-.762.923-.14.165-.28.184-.525.038-.246-.149-1.03-1.03-1.93-1.93-.706-.706-1.176-1.334-1.358-1.58-.18-.246-.038-.372.11-.524.128-.13.297-.247.478-.373.173-.117.247-.223.373-.46.126-.238.063-.448-.038-.61-.1-.166-.652-.798-.925-1.09-.272-.29-.55-.246-.762-.246-.21 0-.44.019-.652.019-.21 0-.55.075-.797.372-.246.297-.94.9-1.207 1.49-.268.59-1.25 2.52-1.25 2.52s-1.007 2.61.223 4.12c1.23 1.51 2.82 3.23 4.9 3.23 2.08 0 3.86-1.46 4.36-2.13.5-.67.5-.67.5-.67s.484-.465.484-.465l.075-.075c.012-.012.025-.025.037-.037a.488.488 0 0 0 .163-.372c.012-.024.012-.05.012-.074.012-.138.012-.288.012-.438 0-.21-.05-.418-.125-.59z"/>
    </svg>
);


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={scrollToTop}
        size="icon"
        className={cn(
          "rounded-full h-12 w-12 bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300 ease-in-out",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  );
};


export default function ContactPage() {
    return (
        <div className="relative">
            <section className="relative w-full py-20 md:py-32 text-white">
                <Image
                    src="https://placehold.co/1920x1080.png"
                    alt="Contact background"
                    fill
                    className="object-cover"
                    data-ai-hint="financial graph background"
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                            <Link href="/" className="hover:text-white">Home</Link>
                            <span>&gt;</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-20 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8 lg:grid-cols-3 lg:items-start lg:gap-12">
                        <Card className="flex flex-col items-center text-center p-8 bg-card shadow-lg rounded-xl h-full">
                            <CardHeader>
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                  <RequestCallBackIcon />
                                </div>
                                <CardTitle className="text-xl font-bold">Request Call Back</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col items-center space-y-4 w-full">
                                <p className="text-muted-foreground">Share ph num, we will back.</p>
                                <Input placeholder="Ph Num..." className="bg-background text-sm" />
                            </CardContent>
                        </Card>

                        <Card className="flex flex-col items-center text-center p-8 bg-card shadow-lg rounded-xl h-full">
                            <CardHeader>
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                    <MessageCircleQuestion className="h-10 w-10 text-primary" />
                                </div>
                                <CardTitle className="text-xl font-bold">Chat with Expert</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-center items-center space-y-4 w-full">
                                <p className="text-muted-foreground">Live chat with forex specialist.</p>
                                <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    START CHAT
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="p-8 bg-card shadow-lg rounded-xl space-y-6 h-full">
                            <h3 className="text-xl font-bold text-left">Quick Contact</h3>
                            <div className="space-y-3">
                                <Button asChild variant="secondary" className="w-full justify-start rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                                    <Link href="tel:+18007661234">
                                        <Phone className="h-4 w-4 mr-3" />
                                        +1 800 766-1234
                                    </Link>
                                </Button>
                                <Button asChild variant="secondary" className="w-full justify-start rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                                    <Link href="mailto:sendmail@example.com">
                                        <Mail className="h-4 w-4 mr-3" />
                                       sendmail@example.com
                                    </Link>
                                </Button>
                            </div>
                            <div className="pt-2">
                                <h3 className="text-xl font-bold text-left">Business Hours</h3>
                                <p className="text-muted-foreground mt-2 text-sm text-left">Mon - Friday : 9 am to 5 pm, Saturday : 10 am to 1 pm</p>
                            </div>
                            <div className="pt-2">
                                <Button variant="ghost" className="rounded-full text-primary hover:text-primary hover:bg-transparent p-0 justify-start w-full">
                                   <div className="bg-primary/10 p-2 rounded-full mr-3">
                                     <WhatsAppIcon />
                                   </div>
                                   <span className="font-semibold">WHATSAPP</span>
                                </Button>
                            </div>
                        </Card>

                    </div>
                </div>
            </section>
            <ScrollToTopButton />
        </div>
    );
}

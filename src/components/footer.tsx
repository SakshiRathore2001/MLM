"use client";

import Link from "next/link";
import { BarChart, ChevronUp, Facebook, Twitter, Instagram, Youtube, BookOpen, LogIn, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Images from '../constants/Images.constants';

// Scroll to top button component
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

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#163e37] text-gray-300 font-body">
      {/* Subscribe Section */}
      <div className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Become a part of our update community...
              </h2>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-4">
                  <Image src={Images.rating3} width={40} height={40} alt="Subscriber" className="rounded-full border-2 border-[#163e37]" data-ai-hint="man portrait" />
                  <Image src={Images.rating2} width={40} height={40} alt="Subscriber" className="rounded-full border-2 border-[#163e37]" data-ai-hint="woman portrait" />
                  <Image src={Images.rating1} width={40} height={40} alt="Subscriber" className="rounded-full border-2 border-[#163e37]" data-ai-hint="person portrait" />
                </div>
                <div className="bg-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full">5M+</div>
                <p className="text-white font-semibold">Subscribers</p>
              </div>
            </div>
            <div className="relative">
              <Input
                type="email"
                placeholder="Your email address..."
                className="w-full h-14 pl-6 pr-36 rounded-full bg-black/30 border-gray-600 text-white placeholder-gray-400 focus:ring-primary focus:border-primary"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 rounded-full bg-white text-black hover:bg-gray-200 font-semibold">
                <LogIn className="h-4 w-4 mr-2" />
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">

          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <BarChart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">Fxvibe</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Access valuable insights and expertise download free trading guides today!..
            </p>
            <Button asChild variant="ghost" className="mt-6 text-primary p-0 hover:bg-transparent hover:text-primary/80">
              <Link href="#">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white">FREE</p>
                  <p className="font-bold text-base">TRADING GUIDES <ArrowRight className="inline h-4 w-4" /></p>
                </div>
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/contact" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Email Us</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Help Center</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Faq's</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Live Chat</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Useful Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Home</Link></li>
              <li><Link href="/#allocation" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Story</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> History</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Our Team</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Trading Rules</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Blog Post</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 opacity-0 hidden md:block">_</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Markets</Link></li>
              <li><Link href="/#evaluation" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Evaluations</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Affiliates</Link></li>
              <li><Link href="/#plans" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Pricing</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Get Funded</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-white"><ChevronUp className="h-4 w-4 text-primary" /> Course</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-1">
            <h3 className="font-bold text-white mb-6">Social Connect</h3>
            <div className="flex gap-3 mb-6">
              <Link href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Youtube" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 md:px-6 flex flex-col md:flex-row justify-between items-center text-center text-xs">
          <p>&copy; 2025 Fxvibe Made with Expertise, All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <span className="text-gray-500">.</span>
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
            <span className="text-gray-500">.</span>
            <Link href="#" className="hover:text-white">Legal</Link>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}

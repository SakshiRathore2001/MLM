"use client";

import Link from "next/link";
import { BarChart, ChevronUp, Facebook, Twitter, Instagram, Youtube, BookOpen, LogIn, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

// Inline SVGs for Apple and Google Play icons
const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 384 512" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.6 0 184.2 0 241.2c0 61.6 31.3 158.4 82.2 207.1 29.7 28.1 63.3 40.8 96.2 40.8 34.3 0 63.6-12.6 88.9-12.6 25.4 0 55.6 12.6 88.9 12.6 33.8 0 65.8-12.6 94.4-40.8-21.4-19-42.5-44.1-42.5-76.3zm-67.4-168.9-24.3-16.7c-7.5-5.2-13-13.6-13.8-22.7-1.7-18.4 12.1-34.6 30.6-34.6 1.4 0 2.7.1 4.1.3 17.5 2.1 31.2 15.8 34.1 32.5.1 1.7.2 3.5.2 5.1-1.2 21.4-18.6 38.6-41.4 36.3z" />
    </svg>
  );

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0L11 27.3l151.7 151.7L47 0zm152 453.4l60.1-60.1-280.8-161.2L199 453.4zM451.2 256l-57-57-152.1 152.1 57 57 152.1-152.1z" />
    </svg>
  );

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
    <footer className="bg-[#163e37] text-gray-300 font-body">
      {/* Subscribe Section */}
      <div className="py-16 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(22, 62, 55, 0.9), rgba(22, 62, 55, 0.9)), url('https://placehold.co/1920x1080.png')" }} data-ai-hint="abstract dark green">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Become a part of our update community...
              </h2>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-4">
                  <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Subscriber" className="rounded-full border-2 border-[#163e37]" data-ai-hint="man portrait"/>
                  <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Subscriber" className="rounded-full border-2 border-[#163e37]" data-ai-hint="woman portrait"/>
                  <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Subscriber" className="rounded-full border-2 border-[#163e37]" data-ai-hint="person portrait"/>
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
      <div className="container mx-auto px-4 py-16 md:px-6">
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
            <div className="space-y-3">
                <Button asChild className="w-full h-12 bg-transparent border border-gray-500 hover:bg-white/10 justify-start rounded-lg text-left">
                    <Link href="#">
                        <AppleIcon className="h-6 w-6 mr-3 flex-shrink-0" />
                        <span>
                            <span className="block text-xs font-light">Download on the</span>
                            <span className="block font-bold">APP STORE</span>
                        </span>
                    </Link>
                </Button>
                <Button asChild className="w-full h-12 bg-white text-black hover:bg-gray-200 justify-start rounded-lg text-left">
                    <Link href="#">
                        <GooglePlayIcon className="h-6 w-6 mr-3 flex-shrink-0" />
                        <span>
                            <span className="block text-xs font-light">GET IT ON</span>
                            <span className="block font-bold">GOOGLE PLAY</span>
                        </span>
                    </Link>
                </Button>
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

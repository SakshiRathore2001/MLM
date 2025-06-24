
"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  BarChart,
  ChevronDown,
  User,
  Globe,
  DollarSign,
  Search,
  Mail,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const TopBar = () => (
  <div className="bg-card text-muted-foreground border-b border-border">
    <div className="container mx-auto flex h-12 items-center justify-between px-4 md:px-6 text-xs">
      <div className="flex items-center gap-6">
        <Link href="#" className="flex items-center gap-2 hover:text-foreground">
          <User className="h-4 w-4" />
          <div className="hidden sm:block">
            <p className="font-semibold">Login</p>
            <p>
              <span className="text-[rgb(112,212,157)]">or</span> Create your account
            </p>
          </div>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-1 p-0 h-auto hover:bg-transparent text-muted-foreground hover:text-foreground">
              <Globe className="h-4 w-4" />
              <span>Se</span>
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Español</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />
          <p>Traders payouts since 2015: <span className="font-bold text-foreground">$26,769,485</span></p>
        </div>
        <div className="relative">
          <Input type="search" placeholder="Search" className="h-8 pr-8 w-40" />
          <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <Link href="mailto:sendmail@example.com" className="flex items-center gap-2 hover:text-foreground">
          <Mail className="h-5 w-5 text-primary" />
          <div>
            <p>Mail us</p>
            <p className="font-semibold">sendmail@example.com</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
);


const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
  >
    {children}
  </Link>
);

const NavLinkDropdown = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleOpen = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    setOpen(true);
  };

  const handleClose = () => {
    timerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        asChild
      >
        <button
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {label}
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={() => setOpen(false)}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#allocation", label: "About" },
    { href: "#services", label: "SWP" },
    { href: "#plans", label: "ROI" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border/50">
      <TopBar />
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2">
          <BarChart className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">Fxvibe</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <NavLinkDropdown key={link.href} label={link.label}>
                <DropdownMenuItem>Sub-item 1</DropdownMenuItem>
                <DropdownMenuItem>Sub-item 2</DropdownMenuItem>
              </NavLinkDropdown>
            ) : (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden lg:flex items-center gap-2 rounded-full p-2 h-auto bg-card hover:bg-card">
            <div className="bg-background rounded-full p-2">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left text-xs pr-2">
              <p className="font-bold text-foreground">START</p>
              <p className="text-muted-foreground">EVALUATION</p>
            </div>
            <ArrowRight className="h-4 w-4 text-primary" />
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="#" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <BarChart className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold">Fxvibe</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button variant="default" className="w-full">Start Evaluation</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // If on home page, just scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home page with hash
      window.location.href = `/#${id}`;
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Committees", href: "/committee" },
    { name: "Dates", href: "/dates" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="font-heading font-bold text-xl md:text-2xl tracking-tighter cursor-pointer flex items-center gap-2 md:gap-3 shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img 
            src="/klh.png" 
            alt="KLH Logo" 
            className="h-6 md:h-8 w-auto object-contain"
          />
          <span className={cn(
            "text-xl md:text-2xl font-light",
            scrolled ? "text-foreground/60" : "text-white/60"
          )}>×</span>
          <span className="text-primary truncate">AI-CQCOM</span>
          <span className={cn(scrolled ? "text-foreground" : "text-white")}> 2026</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  scrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button 
            onClick={() => window.location.href = '/registration'}
            variant={scrolled ? "default" : "secondary"}
            size="sm"
          >
            Register Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu className={scrolled ? "text-foreground" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b shadow-lg md:hidden flex flex-col p-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              <a
                className="py-3 text-left font-medium text-foreground/80 hover:text-primary border-b border-dashed border-border/50 last:border-0"
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="mt-4 w-full" onClick={() => window.location.href = '/registration'}>
            Register Now
          </Button>
        </div>
      )}
    </nav>
  );
}

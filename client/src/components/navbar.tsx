import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent cursor-pointer">
            Вероника Таргетолог
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
          <a href="#stats" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
          <a href="#stats" className="text-sm font-medium hover:text-primary transition-colors">Результаты</a>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6">
            <a href="#contact">Консультация</a>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Услуги</a>
          <a href="#stats" className="text-lg font-medium" onClick={() => setIsOpen(false)}>О нас</a>
          <a href="#stats" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Результаты</a>
          <Button asChild className="w-full bg-primary" onClick={() => setIsOpen(false)}>
            <a href="#contact">Консультация</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Contact />
      </main>
      
      <footer className="py-8 bg-black/40 border-t border-border/40 text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Вероника Таргетолог. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
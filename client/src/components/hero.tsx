import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_digital_marketing_data_flow_with_blue_and_purple_gradients.png";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp size={16} />
              <span>Максимум продаж, минимум расходов</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
              Я Вероника —<br />
              <span className="text-gradient">ваш таргетолог</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Я специализируюсь на одном: помочь вашему бизнесу увеличить продажи с минимальными затратами на рекламу. Instagram и Facebook — мой инструмент, а ваш успех — моя цель.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12 px-8 rounded-full">
                <a href="#contact">Начать кампанию</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 text-lg h-12 px-8 rounded-full">
                <a href="#services" className="flex items-center gap-2">
                  Наши стратегии <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
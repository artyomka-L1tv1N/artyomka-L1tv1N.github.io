import { motion } from "framer-motion";

const stats = [
  { value: "300%", label: "Минимальный ROAS для всех клиентов" },
  { value: "95+", label: "Благодарных клиентов" },
  { value: "2-3", label: "Месяца до 10x дохода" },
  { value: "100%", label: "Клиентов, которые возвращаются" },
];

export function Stats() {
  return (
    <section id="stats" className="py-20 border-y border-border/50 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-heading tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
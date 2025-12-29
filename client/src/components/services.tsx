import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, BarChart3, Users, Zap, Search, Layers } from "lucide-react";

const services = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Точное таргетирование за деньги",
    description: "Я нахожу именно тех людей, которые готовы купить у вас прямо сейчас. Каждый рубль бюджета работает на реальные продажи, а не на просмотры."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-accent" />,
    title: "CPA, который вас устроит",
    description: "Я отслеживаю стоимость каждого клиента и постоянно её снижаю. Ваши расходы становятся всё меньше, а доход — всё больше."
  },
  {
    icon: <Zap className="h-8 w-8 text-chart-3" />,
    title: "Быстрая оптимизация",
    description: "Первые 2-3 дня — сбор данных. Затем я тестирую, анализирую и масштабирую только то, что работает. Нет времени на эксперименты."
  },
  {
    icon: <Users className="h-8 w-8 text-chart-4" />,
    title: "Аудит существующих кампаний",
    description: "Ваша реклама не работает? Я найду, где теряются деньги, и перенаправлю бюджет на канал, который приносит продажи."
  },
  {
    icon: <Search className="h-8 w-8 text-chart-5" />,
    title: "Стратегия под ваш бюджет",
    description: "Работаю я с малыми бизнесами на 10 тысяч рублей в месяц или с крупными на миллионы. Результат всегда один — максимум продаж за минимум денег."
  },
  {
    icon: <Layers className="h-8 w-8 text-chart-1" />,
    title: "Воронка продаж на Instagram и Facebook",
    description: "Я создаю полный цикл: от первого клика до покупки. На каждом этапе стремлюсь снизить затраты и увеличить конверсию."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Как я работаю</h2>
          <p className="text-muted-foreground text-lg">Забудьте про "продвинуть пост" в Facebook. Я строю точные, прибыльные кампании, где каждый рубль приносит результат.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <div className="mb-4 p-3 rounded-xl bg-background/50 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
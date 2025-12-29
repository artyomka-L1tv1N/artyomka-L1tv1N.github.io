import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.string().email("Некорректный адрес электронной почты"),
  website: z.string().url("Введите корректный URL").optional().or(z.literal("")),
  budget: z.string({
    required_error: "Пожалуйста, выберите ежемесячный бюджет",
  }),
  message: z.string().min(10, "Пожалуйста, расскажите подробнее о ваших целях (минимум 10 символов)"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Запрос отправлен!",
      description: "Мы свяжемся с вами в течение 24 часов, чтобы запланировать аудит.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Хотите больше продаж за меньше денег?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Заполните форму, и я проанализирую вашу ситуацию. Посмотрю, есть ли потенциал, и расскажу честно — стоит ли вам со мной работать или лучше подождать.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg">Бесплатный аудит</h3>
                  <p className="text-muted-foreground">Я проверю вашу текущую рекламу или посмотрю, с чего начать, если её ещё нет.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg">Стратегия под вас</h3>
                  <p className="text-muted-foreground">Я разрабатываю план, который работает именно для вашего бизнеса, а не универсальный скрипт.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-chart-3/10 flex items-center justify-center text-chart-3 text-xl font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg">Результаты в деньгах</h3>
                  <p className="text-muted-foreground">Никаких красивых отчётов про лайки. Только цифры продаж и стоимость каждого клиента.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-white/10 bg-card/60 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Имя</Label>
                        <FormControl>
                          <Input placeholder="Иван Иванов" {...field} className="bg-background/50 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Email</Label>
                        <FormControl>
                          <Input placeholder="ivan@company.com" {...field} className="bg-background/50 border-white/10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Веб-сайт (опционально)</Label>
                          <FormControl>
                            <Input placeholder="https://..." {...field} className="bg-background/50 border-white/10" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Ежемесячный бюджет</Label>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-white/10">
                                <SelectValue placeholder="Выберите..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-1k">До $1,000</SelectItem>
                              <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10k+">$10,000+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Детали проекта</Label>
                        <FormControl>
                          <Textarea 
                            placeholder="Расскажите нам о вашем бизнесе и целях..." 
                            className="resize-none bg-background/50 border-white/10 min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-lg">
                    Получить бесплатный аудит
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
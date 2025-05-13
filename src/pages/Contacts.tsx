
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function Contacts() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.",
    });
  };

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Свяжитесь со мной по любым вопросам, касающимся обучения иностранным языкам, 
            методики преподавания или сотрудничества.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Связаться со мной</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="font-medium">Ваше имя</label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="email" className="font-medium">Электронная почта</label>
                    <Input id="email" type="email" placeholder="ivan@example.com" required />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="subject" className="font-medium">Тема</label>
                    <Input id="subject" placeholder="Запрос материалов" required />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="message" className="font-medium">Сообщение</label>
                    <Textarea 
                      id="message" 
                      placeholder="Опишите ваш вопрос или запрос..." 
                      rows={5}
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full md:w-auto">
                  Отправить сообщение
                </Button>
              </form>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">График консультаций</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Calendar" className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Понедельник, среда:</p>
                      <p className="text-muted-foreground">14:00 - 16:00</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Calendar" className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Пятница:</p>
                      <p className="text-muted-foreground">15:00 - 17:00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
              
              <div className="bg-muted p-6 rounded-lg mb-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Электронная почта:</p>
                      <a href="mailto:teacher@example.com" className="text-primary hover:underline">
                        teacher@example.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Телефон:</p>
                      <a href="tel:+71234567890" className="text-primary hover:underline">
                        +7 (123) 456-78-90
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Адрес:</p>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Школьная, д. 123
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex space-x-3">
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <a href="#" aria-label="ВКонтакте">
                    <Icon name="MessageCircle" className="text-primary" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <a href="#" aria-label="Телеграм">
                    <Icon name="Send" className="text-primary" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <a href="#" aria-label="Электронная почта">
                    <Icon name="Mail" className="text-primary" />
                  </a>
                </Button>
              </div>
              
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="AlertCircle" className="text-primary" />
                      Примечание
                    </CardTitle>
                    <CardDescription>
                      Важная информация для посетителей
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Пожалуйста, учитывайте, что ответ на ваше сообщение может занять до 2 рабочих дней.
                      Если вопрос срочный, лучше связаться по телефону в рабочее время.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      description:
        "Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.",
    });
  };

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Свяжитесь со мной по любым вопросам, касающимся обучения иностранным
            языкам, методики преподавания или сотрудничества.
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
                    <label htmlFor="name" className="font-medium">
                      Ваше имя
                    </label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="email" className="font-medium">
                      Электронная почта
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="subject" className="font-medium">
                      Тема
                    </label>
                    <Input
                      id="subject"
                      placeholder="Запрос материалов"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="message" className="font-medium">
                      Сообщение
                    </label>
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
              <div className="flex flex-col items-center mb-8">
                <div className="w-64 h-64 rounded-full overflow-hidden mb-4">
                  <img
                    src="https://cdn.poehali.dev/files/85f006cb-13e3-4d8a-ab90-c21c025e9337.jpg"
                    alt="Дьяченко Юлия Сергеевна"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold">Дьяченко Юлия Сергеевна</h2>
                <p className="text-muted-foreground">
                  Учитель иностранного языка
                </p>
              </div>

              <div className="bg-muted p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Контактная информация
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Электронная почта:</p>
                      <a
                        href="mailto:yulya.yagina.03@mail.ru"
                        className="text-primary hover:underline"
                      >
                        yulya.yagina.03@mail.ru
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Icon
                      name="Phone"
                      className="text-primary mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-medium">Телефон:</p>
                      <a
                        href="tel:+79656887260"
                        className="text-primary hover:underline"
                      >
                        +7 (965) 688-72-60
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Icon
                      name="MapPin"
                      className="text-primary mt-1"
                      size={20}
                    />
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
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href="https://wa.me/79656887260"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <Icon name="MessageSquare" className="text-primary" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href="https://t.me/J_U_L_I"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Телеграм"
                  >
                    <Icon name="Send" className="text-primary" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href="mailto:yulya.yagina.03@mail.ru"
                    aria-label="Электронная почта"
                  >
                    <Icon name="Mail" className="text-primary" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

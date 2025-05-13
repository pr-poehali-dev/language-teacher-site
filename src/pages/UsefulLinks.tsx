
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function UsefulLinks() {
  const linkCategories = [
    {
      title: "Образовательные ресурсы",
      icon: "BookOpen",
      links: [
        {
          title: "British Council",
          description: "Ресурсы для изучения английского языка от Британского Совета",
          url: "https://learnenglish.britishcouncil.org/",
          icon: "Globe"
        },
        {
          title: "Goethe-Institut",
          description: "Материалы для изучения немецкого языка",
          url: "https://www.goethe.de/",
          icon: "Globe"
        },
        {
          title: "BBC Learning English",
          description: "Актуальные материалы для изучения английского языка",
          url: "https://www.bbc.co.uk/learningenglish/",
          icon: "Radio"
        }
      ]
    },
    {
      title: "Словари и справочники",
      icon: "BookText",
      links: [
        {
          title: "Cambridge Dictionary",
          description: "Онлайн-словарь английского языка от издательства Cambridge",
          url: "https://dictionary.cambridge.org/",
          icon: "BookOpen"
        },
        {
          title: "PONS Online Dictionary",
          description: "Многоязычный онлайн-словарь",
          url: "https://en.pons.com/",
          icon: "Languages"
        },
        {
          title: "Grammarly",
          description: "Сервис для проверки грамматики и правописания",
          url: "https://www.grammarly.com/",
          icon: "Check"
        }
      ]
    },
    {
      title: "Методические материалы",
      icon: "Files",
      links: [
        {
          title: "Единая коллекция ЦОР",
          description: "Цифровые образовательные ресурсы для учителей",
          url: "http://school-collection.edu.ru/",
          icon: "FolderArchive"
        },
        {
          title: "TeachingEnglish",
          description: "Ресурсы для учителей английского языка",
          url: "https://www.teachingenglish.org.uk/",
          icon: "GraduationCap"
        },
        {
          title: "Goethe-Institut für Lehrer",
          description: "Материалы для учителей немецкого языка",
          url: "https://www.goethe.de/ins/ru/ru/spr/unt.html",
          icon: "School"
        }
      ]
    },
    {
      title: "Аутентичные материалы",
      icon: "FileVideo",
      links: [
        {
          title: "TED Talks",
          description: "Видео-выступления по разным темам на английском языке",
          url: "https://www.ted.com/talks",
          icon: "Video"
        },
        {
          title: "Deutsche Welle",
          description: "Новости и учебные материалы на немецком языке",
          url: "https://www.dw.com/de/",
          icon: "Radio"
        },
        {
          title: "News in Levels",
          description: "Новости на английском языке разного уровня сложности",
          url: "https://www.newsinlevels.com/",
          icon: "Newspaper"
        }
      ]
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Полезные ссылки</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            В этом разделе собраны ссылки на полезные ресурсы для изучения иностранных языков, 
            методические материалы, словари и справочники.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8">
            {linkCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name={category.icon} className="text-primary" />
                    {category.title}
                  </CardTitle>
                  <CardDescription>
                    Подборка ресурсов в категории "{category.title}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="multiple" className="w-full">
                    {category.links.map((link, linkIndex) => (
                      <AccordionItem key={linkIndex} value={`item-${index}-${linkIndex}`}>
                        <AccordionTrigger className="text-left">
                          <span className="flex items-center gap-2">
                            <Icon name={link.icon} size={16} className="text-primary" />
                            {link.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pb-4">
                            <p className="mb-4 text-muted-foreground">{link.description}</p>
                            <Button asChild variant="outline" size="sm">
                              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Icon name="ExternalLink" size={16} />
                                Перейти на сайт
                              </a>
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="HelpCircle" className="text-primary" />
              Предложить ресурс
            </h2>
            <p className="mb-4">
              Если у вас есть ссылка на полезный ресурс для изучения иностранных языков, 
              которого нет в этом списке, вы можете предложить его для добавления.
            </p>
            <Button asChild>
              <a href="mailto:teacher@example.com" className="flex items-center gap-2">
                <Icon name="Send" size={16} />
                Отправить предложение
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

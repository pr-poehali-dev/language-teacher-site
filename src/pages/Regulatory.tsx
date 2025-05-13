
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function Regulatory() {
  const documents = [
    {
      category: "Федеральные документы",
      items: [
        {
          title: "ФГОС начального общего образования",
          description: "Приказ Министерства просвещения РФ от 31 мая 2021 г. № 286",
          link: "#"
        },
        {
          title: "ФГОС основного общего образования",
          description: "Приказ Министерства просвещения РФ от 31 мая 2021 г. № 287",
          link: "#"
        },
        {
          title: "ФГОС среднего общего образования",
          description: "Приказ Министерства образования и науки РФ от 17 мая 2012 г. № 413",
          link: "#"
        }
      ]
    },
    {
      category: "Методические рекомендации",
      items: [
        {
          title: "Примерные рабочие программы по иностранным языкам",
          description: "Методические рекомендации для учителей иностранного языка",
          link: "#"
        },
        {
          title: "Требования к предметным результатам обучения",
          description: "Документ содержит перечень требований к результатам обучения",
          link: "#"
        }
      ]
    },
    {
      category: "Локальные акты",
      items: [
        {
          title: "Положение о рабочей программе",
          description: "Локальный акт образовательной организации",
          link: "#"
        },
        {
          title: "Положение о внеурочной деятельности",
          description: "Локальный акт образовательной организации",
          link: "#"
        }
      ]
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Нормативно-правовая база</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            В этом разделе собраны основные нормативные документы, регламентирующие 
            образовательную деятельность по иностранным языкам.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid gap-8">
            {documents.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileText" className="text-primary" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>
                    Нормативные документы, относящиеся к категории "{category.category}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((doc, docIndex) => (
                      <AccordionItem key={docIndex} value={`item-${index}-${docIndex}`}>
                        <AccordionTrigger className="text-left">
                          {doc.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pb-4">
                            <p className="mb-4 text-muted-foreground">{doc.description}</p>
                            <Button asChild variant="outline" size="sm">
                              <a href={doc.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Icon name="FileDown" size={16} />
                                Скачать документ
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
            <h2 className="text-2xl font-bold mb-4">Полезная информация</h2>
            <p className="mb-4">
              Все представленные документы являются действующими на момент публикации. 
              Следите за обновлениями нормативной базы, так как в документы могут вноситься изменения.
            </p>
            <div className="flex items-center gap-2 text-amber-600">
              <Icon name="AlertTriangle" />
              <p className="font-medium">
                Для использования документов в официальных целях, пожалуйста, 
                обращайтесь к оригинальным источникам публикации.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

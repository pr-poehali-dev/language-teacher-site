
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Methodical() {
  const methodicalMaterials = {
    lessons: [
      {
        title: "План-конспект урока «Путешествие по Лондону»",
        description: "Урок английского языка для 7 класса с применением игровых технологий",
        tags: ["7 класс", "Английский язык", "Путешествия"],
        link: "#"
      },
      {
        title: "Урок «Familie und Freunde»",
        description: "Конспект урока немецкого языка для 6 класса по теме «Семья и друзья»",
        tags: ["6 класс", "Немецкий язык", "Семья"],
        link: "#"
      },
      {
        title: "Урок-викторина «Знаете ли вы Великобританию?»",
        description: "Интерактивная викторина для проверки знаний о культуре и истории Великобритании",
        tags: ["8-9 классы", "Английский язык", "Страноведение"],
        link: "#"
      }
    ],
    presentations: [
      {
        title: "Präsentation «Die Jahreszeiten»",
        description: "Презентация для изучения темы «Времена года» на немецком языке",
        tags: ["5 класс", "Немецкий язык", "Времена года"],
        link: "#"
      },
      {
        title: "Презентация «Irregular Verbs»",
        description: "Наглядное пособие для запоминания неправильных глаголов английского языка",
        tags: ["6-7 классы", "Английский язык", "Грамматика"],
        link: "#"
      },
      {
        title: "Презентация «Food and Drinks»",
        description: "Интерактивная презентация для изучения лексики по теме «Еда и напитки»",
        tags: ["5-6 классы", "Английский язык", "Лексика"],
        link: "#"
      }
    ],
    tests: [
      {
        title: "Тест на времена английского языка",
        description: "Проверочная работа на знание системы времен английского языка",
        tags: ["9-11 классы", "Английский язык", "Грамматика"],
        link: "#"
      },
      {
        title: "Тест «Modalverben»",
        description: "Тест на знание модальных глаголов в немецком языке",
        tags: ["8 класс", "Немецкий язык", "Грамматика"],
        link: "#"
      },
      {
        title: "Итоговый тест за 1 полугодие",
        description: "Комплексный тест для проверки знаний учащихся по английскому языку",
        tags: ["7 класс", "Английский язык", "Контроль знаний"],
        link: "#"
      }
    ]
  };

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Методическая копилка</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            В этом разделе собраны авторские методические разработки, презентации, 
            тестовые материалы и другие ресурсы для преподавания иностранных языков.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="lessons" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="lessons" className="flex items-center gap-2">
                <Icon name="BookOpen" size={16} />
                <span>Планы уроков</span>
              </TabsTrigger>
              <TabsTrigger value="presentations" className="flex items-center gap-2">
                <Icon name="PresentationScreen" size={16} />
                <span>Презентации</span>
              </TabsTrigger>
              <TabsTrigger value="tests" className="flex items-center gap-2">
                <Icon name="ClipboardCheck" size={16} />
                <span>Тесты</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lessons" className="space-y-6">
              {methodicalMaterials.lessons.map((material, index) => (
                <ResourceCard key={index} material={material} />
              ))}
            </TabsContent>

            <TabsContent value="presentations" className="space-y-6">
              {methodicalMaterials.presentations.map((material, index) => (
                <ResourceCard key={index} material={material} />
              ))}
            </TabsContent>

            <TabsContent value="tests" className="space-y-6">
              {methodicalMaterials.tests.map((material, index) => (
                <ResourceCard key={index} material={material} />
              ))}
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 bg-primary/5 rounded-lg">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="BookMarked" className="text-primary" />
              Добавление новых материалов
            </h2>
            <p className="mb-4">
              Методическая база регулярно пополняется новыми материалами. Если вы не нашли то, что искали,
              пожалуйста, проверьте этот раздел позже или свяжитесь со мной напрямую.
            </p>
            <Button asChild>
              <a href="mailto:teacher@example.com">
                Запросить материал
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

interface Material {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

function ResourceCard({ material }: { material: Material }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{material.title}</CardTitle>
        <CardDescription>{material.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {material.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <Button asChild variant="outline">
          <a href={material.link} className="flex items-center gap-2">
            <Icon name="Download" size={16} />
            Скачать материал
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

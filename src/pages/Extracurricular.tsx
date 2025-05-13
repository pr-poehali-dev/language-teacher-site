import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Extracurricular() {
  const activities = {
    competitions: [
      {
        title: "Олимпиада по английскому языку",
        description: "Школьная олимпиада для учащихся 7-11 классов",
        date: "Ноябрь 2024",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
        link: "#",
      },
      {
        title: "Конкурс переводчиков",
        description: "Творческий конкурс перевода стихотворений и прозы",
        date: "Февраль 2025",
        image:
          "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=2069",
        link: "#",
      },
      {
        title: "Языковой марафон",
        description: "Интенсивная неделя погружения в языковую среду",
        date: "Март 2025",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
        link: "#",
      },
    ],
    events: [
      {
        title: "Праздник «День Европы»",
        description:
          "Культурное мероприятие, посвященное европейским странам и языкам",
        date: "9 мая 2025",
        image:
          "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070",
        link: "#",
      },
      {
        title: "Рождественская ярмарка",
        description:
          "Тематическое мероприятие с погружением в традиции англоязычных стран",
        date: "Декабрь 2024",
        image:
          "https://images.unsplash.com/photo-1482330454287-3cf6c095710c?q=80&w=2071",
        link: "#",
      },
      {
        title: "Театральная постановка на английском языке",
        description: "Спектакль по мотивам произведений английской литературы",
        date: "Апрель 2025",
        image:
          "https://images.unsplash.com/photo-1568642625141-8ba0c95b3540?q=80&w=2069",
        link: "#",
      },
    ],
    clubs: [
      {
        title: "Разговорный клуб «English Speaking Club»",
        description:
          "Еженедельные встречи для практики разговорного английского",
        schedule: "Каждый четверг, 15:00-16:30",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2072",
        link: "#",
      },
      {
        title: "Клуб любителей английской литературы",
        description: "Обсуждение произведений англоязычных авторов",
        schedule: "Каждая вторая среда месяца, 16:00-17:30",
        image:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028",
        link: "#",
      },
      {
        title: "Киноклуб «English Movies»",
        description: "Просмотр и обсуждение фильмов на английском языке",
        schedule: "Последняя пятница месяца, 15:30-17:30",
        image:
          "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070",
        link: "#",
      },
    ],
  };

  return (
    <>
      <section className="bg-gradient-to-b from-cyan-50 to-white dark:from-slate-950 dark:to-slate-900 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Внеклассная работа</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Творческие проекты, конкурсы, олимпиады и мероприятия, которые
            помогают учащимся полюбить иностранные языки и культуру стран
            изучаемого языка.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="competitions" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="competitions"
                className="flex items-center gap-2"
              >
                <Icon name="Trophy" size={16} />
                <span>Олимпиады и конкурсы</span>
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                <span>Мероприятия</span>
              </TabsTrigger>
              <TabsTrigger value="clubs" className="flex items-center gap-2">
                <Icon name="Users" size={16} />
                <span>Кружки и клубы</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="competitions">
              <div className="grid md:grid-cols-3 gap-6">
                {activities.competitions.map((activity, index) => (
                  <ActivityCard
                    key={index}
                    title={activity.title}
                    description={activity.description}
                    date={activity.date}
                    image={activity.image}
                    link={activity.link}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid md:grid-cols-3 gap-6">
                {activities.events.map((activity, index) => (
                  <ActivityCard
                    key={index}
                    title={activity.title}
                    description={activity.description}
                    date={activity.date}
                    image={activity.image}
                    link={activity.link}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="clubs">
              <div className="grid md:grid-cols-3 gap-6">
                {activities.clubs.map((club, index) => (
                  <ClubCard
                    key={index}
                    title={club.title}
                    description={club.description}
                    schedule={club.schedule}
                    image={club.image}
                    link={club.link}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 bg-primary/5 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Хотите принять участие?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Внеклассные мероприятия открыты для всех учащихся, интересующихся
              иностранными языками. Для получения дополнительной информации
              свяжитесь со мной.
            </p>
            <Button asChild size="lg">
              <a
                href="mailto:teacher@example.com"
                className="flex items-center gap-2"
              >
                <Icon name="Mail" size={16} />
                Подать заявку на участие
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

interface ActivityCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

function ActivityCard({
  title,
  description,
  date,
  image,
  link,
}: ActivityCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon name="Calendar" size={16} />
          <span>{date}</span>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="outline" className="w-full">
          <a href={link}>
            Подробнее
            <Icon name="ArrowRight" className="ml-2" size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

interface ClubCardProps {
  title: string;
  description: string;
  schedule: string;
  image: string;
  link: string;
}

function ClubCard({
  title,
  description,
  schedule,
  image,
  link,
}: ClubCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon name="Clock" size={16} />
          <span>{schedule}</span>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild variant="outline" className="w-full">
          <a href={link}>
            Подробнее
            <Icon name="ArrowRight" className="ml-2" size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

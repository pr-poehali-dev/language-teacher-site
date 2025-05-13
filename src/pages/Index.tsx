
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Index() {
  const features = [
    {
      icon: "BookOpen",
      title: "Методические материалы",
      description: "Авторские разработки уроков и проверенные методики обучения иностранным языкам",
      link: "/methodical"
    },
    {
      icon: "FileText",
      title: "Нормативные документы",
      description: "Актуальная нормативно-правовая база для преподавателей иностранного языка",
      link: "/regulatory"
    },
    {
      icon: "Users",
      title: "Внеклассная работа",
      description: "Сценарии мероприятий, олимпиад и конкурсов для вовлечения учащихся",
      link: "/extracurricular"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Добро пожаловать на сайт учителя иностранного языка
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Здесь вы найдете полезные материалы, методические разработки и информацию для изучения
              иностранных языков. Развивайте языковые навыки вместе с нами!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/methodical">Методическая копилка</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contacts">Связаться со мной</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-4 w-24 h-24 rounded-full bg-blue-100 opacity-50 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-8 w-32 h-32 rounded-full bg-purple-100 opacity-40 blur-3xl"></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070" 
                alt="Учитель иностранного языка" 
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Об учителе</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Преподаватель с многолетним опытом работы в сфере обучения иностранным языкам. Имею высшую квалификационную категорию и постоянно совершенствую свои методики преподавания.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Моя методика основана на коммуникативном подходе, который позволяет учащимся быстро преодолеть языковой барьер и начать свободно говорить на изучаемом языке.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" />
                  <span>Индивидуальный подход к каждому ученику</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" />
                  <span>Применение современных образовательных технологий</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" />
                  <span>Автор методических пособий и разработок</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contacts">Подробнее обо мне</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Разделы сайта</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={feature.link}>
                      Перейти
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы изучать иностранные языки?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Используйте материалы сайта для эффективного изучения языка или свяжитесь со мной для получения консультации.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/contacts">Связаться</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

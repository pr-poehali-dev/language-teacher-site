import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    {
      path: "/regulatory",
      label: "Нормативно-правовая база",
      icon: "FileText",
    },
    { path: "/methodical", label: "Методическая копилка", icon: "BookOpen" },
    { path: "/extracurricular", label: "Внеклассная работа", icon: "Users" },
    { path: "/useful-links", label: "Полезные ссылки", icon: "Link" },
    { path: "/contacts", label: "Контакты", icon: "Mail" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl mr-6">
          <Icon name="GraduationCap" size={24} className="text-primary" />
          <span className="hidden sm:inline-block">Дьяченко Ю.С.</span>
        </Link>
        <nav className="flex-1 flex justify-end md:justify-center">
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Button asChild variant="ghost" size="sm">
                  <Link to={item.path} className="flex items-center gap-1">
                    <Icon name={item.icon} size={16} />
                    {item.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <Button variant="outline" size="icon" className="md:hidden">
            <Icon name="Menu" />
            <span className="sr-only">Меню</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}

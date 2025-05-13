
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Icon name="GraduationCap" className="text-primary" />
              ИнЯз Учитель
            </h3>
            <p className="text-muted-foreground">
              Персональный сайт учителя иностранного языка с методическими материалами
              и полезной информацией для учеников и коллег.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Главная</Link></li>
              <li><Link to="/methodical" className="text-muted-foreground hover:text-foreground">Методическая копилка</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-foreground">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors" aria-label="ВКонтакте">
                <Icon name="MessageCircle" size={20} className="text-primary" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors" aria-label="Телеграм">
                <Icon name="Send" size={20} className="text-primary" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors" aria-label="Электронная почта">
                <Icon name="Mail" size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} ИнЯз Учитель. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

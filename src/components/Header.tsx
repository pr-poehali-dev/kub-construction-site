import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-kub-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-kub-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">
                К
              </span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-kub-dark">
                ООО "КУБ"
              </h1>
              <p className="text-sm text-kub-gray">Строительная компания</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-kub-gray hover:text-kub-accent transition-colors font-body"
            >
              Услуги
            </a>
            <a
              href="#projects"
              className="text-kub-gray hover:text-kub-accent transition-colors font-body"
            >
              Проекты
            </a>
            <a
              href="#about"
              className="text-kub-gray hover:text-kub-accent transition-colors font-body"
            >
              О компании
            </a>
            <a
              href="#contact"
              className="text-kub-gray hover:text-kub-accent transition-colors font-body"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:flex border-kub-accent text-kub-accent hover:bg-kub-accent hover:text-white"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

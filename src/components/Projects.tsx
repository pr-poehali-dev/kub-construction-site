import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Projects() {
  const projects = [
    {
      title: "ЖК Мангазея",
      type: "Кровельные работы",
      area: "4,000 м²",
      description:
        "Устройство мягкой кровли в жилом комплексе премиум-класса с применением современных технологий гидроизоляции.",
      icon: "Home",
      color: "bg-blue-500",
    },
    {
      title: "Здание МИНФИН",
      type: "Фасадные работы",
      area: "5,000 м²",
      description:
        "Полная реконструкция фасада административного здания с применением вентилируемых фасадных систем.",
      icon: "Building",
      color: "bg-green-500",
    },
    {
      title: "ЦМТ",
      type: "Кровельные работы",
      area: "10,000 м²",
      description:
        "Масштабный проект по ремонту кровли Центра Международной торговли с использованием мембранных технологий.",
      icon: "Factory",
      color: "bg-purple-500",
    },
    {
      title: "Отель Movenpick",
      type: "Отделочные работы",
      area: "2,000 м²",
      description:
        "Премиальная отделка номерного фонда и общественных зон гостиницы международного уровня.",
      icon: "Hotel",
      color: "bg-orange-500",
    },
    {
      title: "Принц Плаза",
      type: "Кровельные работы",
      area: "3,000 м²",
      description:
        "Комплексные кровельные работы в торгово-развлекательном центре с интеграцией инженерных систем.",
      icon: "ShoppingBag",
      color: "bg-red-500",
    },
    {
      title: "Большой Казенный переулок",
      type: "Фасадные работы",
      area: "3,000 м²",
      description:
        "Реставрация и ремонт фасада исторического здания с сохранением архитектурных особенностей.",
      icon: "Landmark",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl text-kub-dark mb-4">
            Реализованные проекты
          </h2>
          <p className="font-body text-xl text-kub-gray max-w-3xl mx-auto">
            Наша компания успешно реализовала множество крупных проектов в
            Москве и регионах России. Каждый проект выполнен с максимальным
            качеством и в установленные сроки.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center text-white`}
                  >
                    <Icon name={project.icon as any} size={24} />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-kub-light text-kub-accent border-0"
                  >
                    {project.area}
                  </Badge>
                </div>
                <CardTitle className="font-heading text-xl text-kub-dark group-hover:text-kub-accent transition-colors">
                  {project.title}
                </CardTitle>
                <Badge
                  variant="outline"
                  className="w-fit border-kub-accent/30 text-kub-accent"
                >
                  {project.type}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="font-body text-kub-gray leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-kub-light px-6 py-3 rounded-full">
            <Icon name="Award" size={20} className="text-kub-accent" />
            <span className="font-body text-kub-dark font-medium">
              Все проекты выполнены с гарантией качества
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

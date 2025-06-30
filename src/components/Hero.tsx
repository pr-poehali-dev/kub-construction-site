import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const stats = [
    { value: "15+", label: "Лет опыта", icon: "Calendar" },
    { value: "200+", label: "Завершенных проектов", icon: "Building" },
    { value: "50,000+", label: "м² выполненных работ", icon: "Ruler" },
    { value: "100%", label: "Довольных клиентов", icon: "Star" },
  ];

  return (
    <section className="bg-gradient-to-br from-kub-light to-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-kub-dark mb-6 leading-tight">
            Премиальные решения в
            <span className="text-kub-accent block">строительстве</span>
          </h1>
          <p className="font-body text-xl text-kub-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            ООО «КУБ» — это полный спектр ремонтно-строительных и отделочных
            работ для корпоративных и частных клиентов. Мы создаем проекты любой
            сложности с гарантией качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-kub-accent hover:bg-kub-accent/90 text-white px-8 py-4 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-kub-accent text-kub-accent hover:bg-kub-accent hover:text-white px-8 py-4 text-lg"
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Наши проекты
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-kub-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className="text-kub-accent"
                  />
                </div>
                <div className="font-heading font-bold text-3xl text-kub-dark mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-kub-gray">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

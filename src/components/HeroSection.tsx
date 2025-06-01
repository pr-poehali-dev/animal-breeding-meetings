import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-50 opacity-70"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/e81682ee-2670-438c-9d2e-c98c8ad1a777.jpg)",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-6 font-montserrat">
          Найдите идеальную пару для вашего питомца
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-open-sans">
          Платформа для знакомства заводчиков и поиска партнеров для вязки.
          Безопасно, надежно и с заботой о здоровье животных.
        </p>

        <Card className="max-w-2xl mx-auto p-6 mb-12 bg-white/80 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Порода животного (например, лабрадор)"
                className="h-12 text-lg"
              />
            </div>
            <div className="flex-1">
              <Input placeholder="Город" className="h-12 text-lg" />
            </div>
            <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-lg">
              <Icon name="Search" size={20} className="mr-2" />
              Найти
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">
              Проверенные заводчики
            </h3>
            <p className="text-gray-600 font-open-sans">
              Все заводчики проходят верификацию и имеют документы
            </p>
          </Card>

          <Card className="p-6 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">
              Безопасные встречи
            </h3>
            <p className="text-gray-600 font-open-sans">
              Организуем встречи в безопасной обстановке
            </p>
          </Card>

          <Card className="p-6 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" size={24} className="text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">
              Здоровое потомство
            </h3>
            <p className="text-gray-600 font-open-sans">
              Контроль здоровья и родословной животных
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

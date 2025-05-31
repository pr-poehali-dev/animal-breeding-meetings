import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Создайте профиль",
      description:
        "Зарегистрируйтесь и добавьте информацию о вашем питомце с фотографиями",
      icon: "UserPlus",
      color: "bg-purple-500",
    },
    {
      step: "2",
      title: "Найдите пару",
      description:
        "Используйте фильтры по породе, возрасту и геолокации для поиска подходящих партнеров",
      icon: "Search",
      color: "bg-green-500",
    },
    {
      step: "3",
      title: "Свяжитесь с заводчиком",
      description:
        "Обсудите детали встречи, обменяйтесь документами и медицинскими справками",
      icon: "MessageCircle",
      color: "bg-blue-500",
    },
    {
      step: "4",
      title: "Организуйте встречу",
      description:
        "Встретьтесь в безопасном месте и дайте питомцам познакомиться",
      icon: "Calendar",
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 font-open-sans">
            Простой процесс от регистрации до счастливой встречи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div
                  className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon name={step.icon} size={24} className="text-white" />
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400 mb-2 font-montserrat">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 font-montserrat">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    {step.description}
                  </p>
                </div>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-8">
                  <Icon name="ArrowRight" size={24} className="text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const BreederProfiles = () => {
  const breeders = [
    {
      name: "Анна Петрова",
      specialty: "Лабрадоры и Ретриверы",
      rating: 4.9,
      reviews: 127,
      experience: "8 лет",
      location: "Москва",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    {
      name: "Дмитрий Волков",
      specialty: "Немецкие овчарки",
      rating: 4.8,
      reviews: 89,
      experience: "12 лет",
      location: "Санкт-Петербург",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    {
      name: "Елена Козлова",
      specialty: "Британские кошки",
      rating: 4.9,
      reviews: 156,
      experience: "6 лет",
      location: "Екатеринбург",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Лучшие заводчики
          </h2>
          <p className="text-xl text-gray-600 font-open-sans">
            Опытные и проверенные заводчики с отличной репутацией
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {breeders.map((breeder, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
            >
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <img
                    src={breeder.avatar}
                    alt={breeder.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  {breeder.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-1 font-montserrat">
                  {breeder.name}
                </h3>
                <p className="text-purple-600 font-medium mb-2 font-open-sans">
                  {breeder.specialty}
                </p>
                <p className="text-gray-500 text-sm font-open-sans">
                  {breeder.location}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-open-sans">Рейтинг:</span>
                  <div className="flex items-center">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-400 mr-1"
                    />
                    <span className="font-semibold">{breeder.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">
                      ({breeder.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-open-sans">Опыт:</span>
                  <span className="font-semibold">{breeder.experience}</span>
                </div>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Связаться
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            Посмотреть всех заводчиков
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BreederProfiles;

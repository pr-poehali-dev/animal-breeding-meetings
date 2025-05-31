import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BreedCategories = () => {
  const breeds = [
    {
      name: "Собаки",
      count: "1,200+ животных",
      icon: "Dog",
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=200&fit=crop",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Кошки",
      count: "800+ животных",
      icon: "Cat",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop",
      gradient: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Популярные категории
          </h2>
          <p className="text-xl text-gray-600 font-open-sans">
            Найдите партнера для вашего питомца среди тысяч животных
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {breeds.map((breed, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${breed.gradient} opacity-70`}
                ></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name={breed.icon} size={24} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">
                  {breed.name}
                </h3>
                <p className="text-gray-600 font-open-sans">{breed.count}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreedCategories;

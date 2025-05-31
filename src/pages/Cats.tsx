import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Cats = () => {
  const catBreeds = [
    {
      name: "Британская короткошерстная",
      description: "Спокойные и независимые кошки с плюшевой шерстью",
      image:
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop",
      traits: ["Спокойный", "Независимый", "Плюшевый"],
    },
    {
      name: "Мейн-кун",
      description: "Крупные и дружелюбные кошки с длинной шерстью",
      image:
        "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop",
      traits: ["Крупный", "Дружелюбный", "Пушистый"],
    },
    {
      name: "Сиамская",
      description: "Активные и общительные кошки с яркой внешностью",
      image:
        "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop",
      traits: ["Активный", "Общительный", "Элегантный"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Популярные породы кошек
          </h1>
          <p className="text-xl text-gray-600 font-open-sans">
            Выберите породу для поиска партнера вашему питомцу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catBreeds.map((breed, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">
                  {breed.name}
                </h3>
                <p className="text-gray-600 mb-4 font-open-sans">
                  {breed.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {breed.traits.map((trait, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                <Button className="w-full">
                  <Icon name="Heart" size={16} className="mr-2" />
                  Выбрать для встречи
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cats;

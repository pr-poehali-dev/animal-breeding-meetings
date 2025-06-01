import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Dogs = () => {
  const dogBreeds = [
    {
      name: "Лабрадор",
      description:
        "Дружелюбные и энергичные собаки, отлично подходят для семей",
      image:
        "https://cdn.poehali.dev/files/84f75fff-0962-40df-ab21-54f9817bb0eb.jpg",
      traits: ["Дружелюбный", "Активный", "Умный"],
    },
    {
      name: "Немецкая овчарка",
      description: "Верные и умные собаки, отличные компаньоны и защитники",
      image:
        "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
      traits: ["Верный", "Умный", "Защитник"],
    },
    {
      name: "Хаски",
      description: "Энергичные и независимые собаки с красивой внешностью",
      image:
        "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop",
      traits: ["Энергичный", "Независимый", "Красивый"],
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
            Популярные породы собак
          </h1>
          <p className="text-xl text-gray-600 font-open-sans">
            Выберите породу для поиска партнера вашему питомцу
          </p>
        </div>

        <div className="text-center mb-8">
          <Link to="/dogs/create">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 h-auto">
              <Icon name="Plus" size={20} className="mr-2" />
              Создать анкету собаки
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogBreeds.map((breed, index) => (
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
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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

export default Dogs;

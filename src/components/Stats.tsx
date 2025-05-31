import { Card } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    { number: "2,500+", label: "Успешных вязок", color: "text-purple-600" },
    { number: "1,800+", label: "Заводчиков", color: "text-green-600" },
    { number: "150+", label: "Пород", color: "text-pink-600" },
    { number: "98%", label: "Довольных клиентов", color: "text-blue-600" },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`text-4xl font-bold mb-2 font-montserrat ${stat.color}`}
              >
                {stat.number}
              </div>
              <div className="text-gray-600 font-open-sans">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

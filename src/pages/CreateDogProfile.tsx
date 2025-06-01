import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const dogProfileSchema = z.object({
  ownerName: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  city: z.string().min(2, "Укажите город"),
  dogName: z.string().min(2, "Кличка должна содержать минимум 2 символа"),
  breed: z.string().min(2, "Укажите породу"),
  age: z.string().min(1, "Укажите возраст"),
  gender: z.string().min(1, "Выберите пол"),
  vaccinations: z.string().min(1, "Выберите статус прививок"),
  behavior: z.string().min(10, "Опишите поведение питомца"),
  partnerRequirements: z.string().min(10, "Укажите пожелания к партнеру"),
});

type DogProfileFormData = z.infer<typeof dogProfileSchema>;

const CreateDogProfile = () => {
  const form = useForm<DogProfileFormData>({
    resolver: zodResolver(dogProfileSchema),
    defaultValues: {
      ownerName: "",
      phone: "",
      city: "",
      dogName: "",
      breed: "",
      age: "",
      gender: "",
      vaccinations: "",
      behavior: "",
      partnerRequirements: "",
    },
  });

  const onSubmit = (data: DogProfileFormData) => {
    console.log("Анкета собаки:", data);
    // Здесь будет отправка данных на сервер
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/dogs"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <Icon name="ArrowLeft" size={20} />К породам собак
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Icon name="Dog" size={24} className="text-blue-600" />
              Создание анкеты собаки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Информация о владельце */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Информация о владельце
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="ownerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя владельца</FormLabel>
                          <FormControl>
                            <Input placeholder="Введите ваше имя" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Телефон</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+7 (999) 123-45-67"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Город</FormLabel>
                          <FormControl>
                            <Input placeholder="Москва" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Информация о собаке */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Информация о собаке
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="dogName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Кличка</FormLabel>
                          <FormControl>
                            <Input placeholder="Бобик" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="breed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Порода</FormLabel>
                          <FormControl>
                            <Input placeholder="Лабрадор" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Возраст</FormLabel>
                          <FormControl>
                            <Input placeholder="2 года" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Пол</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите пол" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Кобель</SelectItem>
                              <SelectItem value="female">Сука</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="vaccinations"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Прививки</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Статус прививок" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="current">
                                Все прививки актуальны
                              </SelectItem>
                              <SelectItem value="partial">
                                Частично привит
                              </SelectItem>
                              <SelectItem value="none">Не привит</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Поведение и пожелания */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Характер и пожелания
                  </h3>
                  <FormField
                    control={form.control}
                    name="behavior"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Особенности поведения</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Опишите характер, темперамент, привычки вашей собаки..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="partnerRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Пожелания к партнеру</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Укажите желаемые качества партнера для вашей собаки..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700"
                >
                  <Icon name="Save" size={20} className="mr-2" />
                  Создать анкету собаки
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateDogProfile;

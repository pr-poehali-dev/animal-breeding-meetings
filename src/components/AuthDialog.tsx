import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useAuth } from "@/contexts/AuthContext";
import Icon from "@/components/ui/icon";

const registerSchema = z.object({
  contact: z.string().min(1, "Email или телефон обязателен"),
  username: z.string().min(3, "Никнейм должен содержать минимум 3 символа"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

const loginSchema = z.object({
  contact: z.string().min(1, "Email или телефон обязателен"),
  password: z.string().min(1, "Пароль обязателен"),
});

interface AuthDialogProps {
  children: React.ReactNode;
}

const AuthDialog = ({ children }: AuthDialogProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const { register, login } = useAuth();

  const registerForm = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      contact: "",
      username: "",
      password: "",
    },
  });

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      contact: "",
      password: "",
    },
  });

  const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const onRegister = async (data: z.infer<typeof registerSchema>) => {
    const email = isEmail(data.contact) ? data.contact : "";
    const phone = !isEmail(data.contact) ? data.contact : "";

    await register(email, phone, data.username, data.password);
    setOpen(false);
  };

  const onLogin = async (data: z.infer<typeof loginSchema>) => {
    // Симуляция входа
    login({
      id: "1",
      email: isEmail(data.contact) ? data.contact : undefined,
      phone: !isEmail(data.contact) ? data.contact : undefined,
      username: "TestUser",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            {isLogin ? "Вход в аккаунт" : "Создание аккаунта"}
          </DialogTitle>
        </DialogHeader>

        {isLogin ? (
          <Form {...loginForm}>
            <form
              onSubmit={loginForm.handleSubmit(onLogin)}
              className="space-y-4"
            >
              <FormField
                control={loginForm.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email или телефон</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@mail.ru или +7 900 123 45 67"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Введите пароль"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                <Icon name="LogIn" size={18} className="mr-2" />
                Войти
              </Button>
            </form>
          </Form>
        ) : (
          <Form {...registerForm}>
            <form
              onSubmit={registerForm.handleSubmit(onRegister)}
              className="space-y-4"
            >
              <FormField
                control={registerForm.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email или телефон</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@mail.ru или +7 900 123 45 67"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={registerForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Никнейм</FormLabel>
                    <FormControl>
                      <Input placeholder="Ваш никнейм" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={registerForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Минимум 6 символов"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                <Icon name="UserPlus" size={18} className="mr-2" />
                Зарегистрироваться
              </Button>
            </form>
          </Form>
        )}

        <div className="text-center pt-4 border-t">
          <Button
            variant="ghost"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm"
          >
            {isLogin
              ? "Нет аккаунта? Зарегистрируйтесь"
              : "Уже есть аккаунт? Войдите"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;

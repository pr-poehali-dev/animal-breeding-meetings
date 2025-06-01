import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import AuthDialog from "@/components/AuthDialog";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Heart" size={28} className="text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">PetMatch</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Главная
          </a>
          <a
            href="/dogs"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Собаки
          </a>
          <a
            href="/cats"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Кошки
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              <span className="text-gray-700">Привет, {user?.username}!</span>
              <Button variant="outline" onClick={logout}>
                <Icon name="LogOut" size={18} className="mr-2" />
                Выйти
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <AuthDialog>
                <Button variant="outline">
                  <Icon name="LogIn" size={18} className="mr-2" />
                  Войти
                </Button>
              </AuthDialog>

              <AuthDialog>
                <Button>
                  <Icon name="UserPlus" size={18} className="mr-2" />
                  Регистрация
                </Button>
              </AuthDialog>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

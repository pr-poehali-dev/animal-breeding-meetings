import Header from "@/components/Header";
import ProfileForm from "@/components/ProfileForm";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Создание анкеты питомца
            </h1>
            <p className="text-gray-600">
              Заполните информацию о себе и своем питомце для поиска партнера
            </p>
          </div>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;

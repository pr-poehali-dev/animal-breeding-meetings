import HeroSection from "@/components/HeroSection";
import BreedCategories from "@/components/BreedCategories";
import BreederProfiles from "@/components/BreederProfiles";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <HeroSection />
      <Stats />
      <BreedCategories />
      <HowItWorks />
      <BreederProfiles />
    </div>
  );
};

export default Index;

import Banner from "@/components/Banner";
import AvailableTutors from "@/components/AvailableTutors";
import WhyChooseUs from "@/components/WhyChoose";
import LearningJourney from "@/components/LearningJourney";

export const metadata = {
  title: "Home | MediQueue",
};

export default function Home() {
  return (
    <>
    <Banner/>
    <AvailableTutors/>
    <WhyChooseUs/>
    <LearningJourney/>
    </>
  );
}

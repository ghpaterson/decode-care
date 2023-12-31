import Link from "next/link";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import girlReading from "/public/girlReading.svg";
import boyReading from "/public/boyReading.svg";
import girlSleeping from "/public/girlSleeping.svg";
import MainMenuCard from "@/components/MainMenuCard";

export default function MainMenu() {
  return (
    <>
      <main className="px-10 lg:px-32">
        <NavBar />
        <div className="flex flex-col gap-10 lg:py-16 font-poppins">
          <MainMenuCard
            imageSrc={boyReading}
            title="Real and Nonsense Words"
            description="This is an example explaining the exercise"
            linkHref="/CVCMenu"
            cardColor="bg-gradient-to-b from-white to bg-blue-500"
            imageWidth={150}
            buttonColor="bg-blue-500"
          />
          <MainMenuCard
            imageSrc={girlReading}
            title="High Frequency Words"
            description="This is an example explaining the exercise"
            linkHref="/HFWMenu"
            cardColor="bg-gradient-to-b from-white to bg-yellow-500"
            imageWidth={200}
            buttonColor="bg-yellow-500"
          />
          <MainMenuCard
            imageSrc={girlSleeping}
            title="Coming Soon..."
            description="Watch this space for upcoming exercises"
            linkHref=""
            cardColor="bg-gradient-to-b from-white to bg-gray-500"
            imageWidth={180}
            buttonColor="bg-gray-500"
            filter="filter grayscale"
          />
        </div>
      </main>
    </>
  );
}

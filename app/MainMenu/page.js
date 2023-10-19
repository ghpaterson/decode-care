import Link from "next/link";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import girlReading from "/public/girlReading.svg";
import boyReading from "/public/boyReading.svg";
import MainMenuCard from "@/components/MainMenuCard";

export default function MainMenu() {
  return (
    <>
      <main className="px-10 lg:px-32">
        <NavBar />
        <div className="flex flex-col gap-10 lg:py-16 font-poppins">
          <MainMenuCard
            imageScr={boyReading}
            title="Real and Nonsense Words"
            description="This is an example explaining the exercise"
            linkHref="/CVCMenu"
            cardColor="bg-gradient-to-b from-white to bg-blue-500"
            imageWidth={150}
          />
          <MainMenuCard
            imageScr={girlReading}
            title="High Frequency Words"
            description="This is an example explaining the exercise"
            linkHref="/HFWMenu"
            cardColor="bg-gradient-to-b from-white to bg-yellow-500"
            imageWidth={200}
          />
        </div>
      </main>
    </>
  );
}

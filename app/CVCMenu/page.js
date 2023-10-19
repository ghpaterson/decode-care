import Link from "next/link";
import NavBar from "@/components/NavBar";
import ExerciseMenuCard from "@/components/ExerciseMenuCard";
import blueTriangle from "/public/blueTriangle.svg";
import blueCubeSphere from "/public/blueCubeSphere.svg";
import blueSquare from "/public/blueSquare.svg";
import blueHexagon from "/public/blueHexagon.svg";
import blueCircle from "/public/blueCircle.svg";
import blueCoil from "/public/blueCoil.svg";

export default function CVCMenu() {
  return (
    <>
      <main className="px-10 lg:px-32">
        <NavBar />
        <section>
          <div className="flex flex-col justify-center items-center gap-10 py-14 font-poppins">
            <h1 className="text-4xl">Read Real and Nonsense Words</h1>
            <p className="lg:px-20">
              This is a description of the purpose of the following exercises
              and why they are going to help etc, now this is an extended ramble
              to fill out some space. This needs to edited by a coptwriter or
              the stakeholders
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-10 lg:py-16 font-poppins">
          <ExerciseMenuCard
            imageSrc={blueTriangle}
            title="Exercise One"
            subTitle="CVC/C Words"
            description="This is an example explaining the exercise"
            linkHref=""
            cardColor="bg-gradient-to-b from-white to bg-blue-500"
            imageWidth={150}
            buttonColor="bg-blue-500"
          />
          <ExerciseMenuCard
            imageSrc={blueHexagon}
            title="Exercise Two"
            subTitle="CCVC/C Words"
            description="This is an example explaining the exercise"
            linkHref=""
            cardColor="bg-gradient-to-b from-white to bg-blue-500"
            imageWidth={150}
            buttonColor="bg-blue-500"
          />
          <ExerciseMenuCard
            imageSrc={blueSquare}
            title="Exercise Three"
            subTitle="CCVC/C Words with Silent Letters"
            description="This is an example explaining the exercise"
            linkHref=""
            cardColor="bg-gradient-to-b from-white to bg-blue-500"
            imageWidth={150}
            buttonColor="bg-blue-500"
          />
          <ExerciseMenuCard
            imageSrc={blueCubeSphere}
            title="Exercise Four"
            subTitle="CVCC Words"
            description="This is an example explaining the exercise"
            linkHref=""
            cardColor="bg-gradient-to-b from-white to bg-blue-500"
            imageWidth={150}
            buttonColor="bg-blue-500"
          />
          <ExerciseMenuCard
            imageSrc={blueCircle}
            title="Exercise Five"
            subTitle="CCVCC Words"
            description="This is an example explaining the exercise"
            linkHref=""
            cardColor="bg-gradient-to-b from-white to bg-blue-500"
            imageWidth={150}
            buttonColor="bg-blue-500"
          />
          <ExerciseMenuCard
            imageSrc={blueCoil}
            title="Exercise Six"
            subTitle="CCCVCCC"
            description="This is an example explaining the exercise"
            linkHref=""
            cardColor="bg-gradient-to-b from-white to bg-blue-500"
            imageWidth={150}
            buttonColor="bg-blue-500"
          />
        </section>
      </main>
    </>
  );
}

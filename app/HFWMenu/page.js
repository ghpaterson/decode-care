import Link from "next/link";
import NavBar from "@/components/NavBar";
import ExerciseMenuCard from "@/components/ExerciseMenuCard";
import yellowTriangle from "/public/yellowTriangle.svg";

export default function HFWMenu() {
  return (
    <>
      <main className="px-10 lg:px-32">
        <NavBar />
        <section>
          <div className="flex flex-col justify-center items-center gap-10 py-14 font-poppins">
            <h1 className="text-4xl">Read High Frequency Words</h1>
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
            imageSrc={yellowTriangle}
            title="Exercise One"
            subTitle="High Frequency Words"
            description="This is an example explaining the exercise"
            linkHref=""
            cardColor="bg-gradient-to-b from-white to bg-yellow-500"
            imageWidth={150}
            buttonColor="bg-yellow-500"
          />
        </section>
      </main>
    </>
  );
}

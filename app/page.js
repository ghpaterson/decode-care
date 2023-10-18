import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import homepageImage from "../public/homepageImage.svg";

export default function Home() {
  return (
    <>
      <main className="h-screen bg-gradient-to-b from-blue-300 to bg-blue-700 px-10 lg:px-32 font-poppins">
        <NavBar />
        <section className="lg:mt-20">
          <p className="text-xl lg:text-6xl text-white">
            Transform reading struggles
            <br /> into reading
            <span className=" text-yellow-400"> STRENGTHS</span>
          </p>
          <p className="text-white text-sm lg:text-xl mt-6">
            Our simples exercises will assist your child <br />
            on their journey to become a better reader
          </p>
          <div className="lg:flex justify-between">
            <div className="mt-20 lg:-mt-16 lg:order-2">
              <Image
                src={homepageImage}
                width={550}
                alt="Family Reading Image"
              />
            </div>
            <div className="flex justify-center lg:order-1 mt-10 lg:mt-20">
              <Link href="/MainMenu">
                <button className="lg:text-2xl text-blue-700 bg-white border-blue-200 border-solid border-2 rounded-full px-6 py-2 hover:bg-blue-500 hover:border-yellow-400 hover:text-white">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

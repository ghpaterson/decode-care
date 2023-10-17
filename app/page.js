import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import homepageImage from "../public/homepageImage.svg";

export default function Home() {
  return (
    <>
      <main className="h-screen bg-gradient-to-b from-white to bg-yellow-500 px-10 lg:px-32 font-poppins">
        <NavBar />
        <section className="mt-20">
          <p className="text-xl lg:text-6xl">
            Transform reading struggles
            <br /> into reading
            <span className="font-bold text-blue-500"> STRENGTHS</span> with
            <br /> our simple exercises
          </p>
          <div className="lg:flex justify-between">
            <div className="mt-20 lg:-mt-6 lg:order-2">
              <Image
                src={homepageImage}
                width={550}
                alt="Family Reading Image"
              />
            </div>
            <div className="flex justify-center lg:order-1 mt-10 lg:mt-20">
              <Link href="/MainMenu">
                <button className="lg:text-2xl border-blue-500 border-solid border-2 rounded-full px-6 py-2 hover:bg-blue-500 hover:text-yellow-500">
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

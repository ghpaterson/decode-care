import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <main className="h-screen bg-yellow-200 px-32">
        <NavBar />
        <section className="mt-24">
          <p className="text-5xl">
            Transform reading struggles into
            <br />
            reading<span className="font-bold text-blue-500">
              {" "}
              STRENGTHS
            </span>{" "}
            with our simple
            <br />
            exercises
          </p>

          <div className="my-12">
            <Link href="/MainMenu">
              <button className="text-xl border-blue-500 border-solid border-2 rounded-full px-2 py-2 hover:bg-blue-500 hover:text-white">
                Get Started
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

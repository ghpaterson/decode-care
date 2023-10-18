import Link from "next/link";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import boyReading from "/public/boyReading.svg";
import girlReading from "/public/girlReading.svg";

export default function MainMenu() {
  return (
    <>
      <main className="px-10 lg:px-32">
        <NavBar />
        <div className="flex flex-col gap-10 lg:py-16 font-poppins">
          <section class="cvc-action-card">
            <div className="shadow-md min-w-full py-6">
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <div className="h-60 w-60 bg-gradient-to-b from-white to bg-blue-500 flex justify-center">
                  <Image src={boyReading} width={150} alt="boy reading" />
                </div>
                <div className="flex flex-col gap-4 px-6 items-center lg:items-start">
                  <h1 className="lg:text-4xl">Real and Nonsense Words</h1>
                  <p>This is an example explaining the exercise</p>
                </div>
                <div className="flex justify-end items-end lg:h-60 lg:w-96">
                  <Link href="/CVCMenu">
                    <button className="bg-blue-500 rounded-full text-xl text-white px-4 py-2">
                      Play
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section class="hfw-action-card">
            <div className="shadow-md min-w-full py-6">
              <div className="flex flex-col lg:flex-row">
                <div className="h-60 w-60 bg-gradient-to-b from-white to bg-yellow-500 flex justify-center">
                  <Image src={girlReading} width={200} alt="boy reading" />
                </div>
                <div className="flex flex-col gap-4 px-6">
                  <h1 className="lg:text-4xl">High Frequency Words</h1>
                  <p>This is an example explaining the exercise</p>
                </div>
                <div className="flex lg:justify-end lg:items-end  lg:w-96 lg:ml-16">
                  <Link href="/HFWMenu">
                    <button className="bg-yellow-500 rounded-full text-xl text-white px-4 py-2">
                      Play
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <Link href="/HFWMenu">HFW Menu</Link> */}
          </section>
        </div>
      </main>
    </>
  );
}

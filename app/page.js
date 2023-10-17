import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <main className="h-screen bg-blue-100 px-32">
        <NavBar />
        <Link href="/MainMenu">Get Started</Link>
      </main>
    </>
  );
}

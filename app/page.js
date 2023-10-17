import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Decode Care</h1>
      <Link href="/MainMenu">Get Started</Link>
    </>
  );
}

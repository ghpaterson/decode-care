import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function HFWMenu() {
  return (
    <>
      <main className="px-32">
        <NavBar />
        <h1 className="text-3xl">High Frequency Words Menu</h1>
        <Link href="/MainMenu">Menu</Link>
      </main>
    </>
  );
}

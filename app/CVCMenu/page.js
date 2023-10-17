import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function CVCMenu() {
  return (
    <>
      <main className="px-32">
        <NavBar />
        <h1 className="text-3xl">CVC Menu</h1>
        <Link href="/MainMenu">Menu</Link>
      </main>
    </>
  );
}

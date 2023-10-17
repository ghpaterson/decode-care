import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function MainMenu() {
  return (
    <>
      <main className="px-10 lg:px-32">
        <NavBar />
        <h1 className="text-3xl">Main Menu</h1>
        <div className="flex flex-col gap-2">
          <Link href="/CVCMenu">CVC Menu</Link>
          <Link href="/HFWMenu">HFW Menu</Link>
        </div>
      </main>
    </>
  );
}

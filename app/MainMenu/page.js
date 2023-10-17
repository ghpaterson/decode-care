import Link from "next/link";

export default function MainMenu() {
  return (
    <>
      <h1 className="text-3xl">Main Menu</h1>
      <div className="flex flex-col gap-2">
        <Link href="/CVCMenu">CVC Menu</Link>
        <Link href="/HFWMenu">HFW Menu</Link>
      </div>
    </>
  );
}

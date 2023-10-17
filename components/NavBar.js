"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [showMainMenuLink, setShowMainMenuLink] = useState(false);

  useEffect(() => {
    // Check if the current pathname matches "/CVCMenu" or "/HFWMenu"
    const currentPathname = window.location.pathname;
    setShowMainMenuLink(
      currentPathname === "/CVCMenu" || currentPathname === "/HFWMenu"
    );
  }, []);

  return (
    <>
      <nav className="py-6 lg:text-3xl">
        <div className="flex justify-between">
          <h1>Decode Care</h1>
          {showMainMenuLink && <Link href="/MainMenu">Menu</Link>}
        </div>
      </nav>
    </>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoSphere from "../public/logoSphere.svg";

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
      <nav className="py-6 lg:text-3xl font-poppins">
        <div className="flex justify-between">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src={logoSphere} width={45} alt="logo" />

              <h1>Decode Care</h1>
            </div>
          </Link>

          {showMainMenuLink && <Link href="/MainMenu">Menu</Link>}
        </div>
      </nav>
    </>
  );
}

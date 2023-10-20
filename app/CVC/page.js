"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
export default function CVC() {
  const [vowel, setVowel] = useState("?");
  const vowels = ["a", "e", "i", "o", "u"];

  const [firstLetter, setFirstLetter] = useState("?");
  const firstBox = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "r",
    "s",
    "t",
    "v",
    "w",
    "y",
    "z",
  ];

  const [lastLetter, setLastLetter] = useState("?");
  const lastBox = [
    "b",
    "ck",
    "d",
    "ff",
    "g",
    "ll",
    "m",
    "n",
    "p",
    "ss",
    "t",
    "x",
    "zz",
  ];

  const handleVowelClick = () => {
    const newVowel = vowels[Math.floor(Math.random() * vowels.length)];
    setVowel(newVowel);
  };

  const handleFirstBoxClick = () => {
    const newFirstLetter =
      firstBox[Math.floor(Math.random() * firstBox.length)];
    setFirstLetter(newFirstLetter);
  };

  const handleLastBoxClick = () => {
    let newLastBox = lastBox;
    if (firstLetter === "f" && vowel === "u") {
      newLastBox = lastBox.filter((letter) => letter !== "ck");
    }
    if (firstLetter === "c" && vowel === "o") {
      newLastBox = lastBox.filter((letter) => letter !== "ck");
    }
    if (firstLetter === "w" && vowel === "o") {
      newLastBox = lastBox.filter((letter) => letter !== "g");
    }
    if (firstLetter === "s" && vowel === "e") {
      newLastBox = lastBox.filter((letter) => letter !== "x");
    }
    if (firstLetter === "d" && vowel === "i") {
      newLastBox = lastBox.filter((letter) => letter !== "ck");
    }
    const newLastLetter =
      newLastBox[Math.floor(Math.random() * newLastBox.length)];
    setLastLetter(newLastLetter);
  };

  const handleResetClick = () => {
    setVowel("?");
    setFirstLetter("?");
    setLastLetter("?");
  };

  return (
    <>
      <main className="px-10 lg:px-32 font-poppins">
        <NavBar />
        <section className="mt-20">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl lg:text-4xl">
              Let's Read Real and Nonsense Words
            </h1>
            <h2 className="lg:text-2xl">
              Click the boxes to change the letters
            </h2>
          </div>
          <div className="flex justify-center gap-4 lg:gap-2 my-10 px-6 text-5xl lg:text-8xl">
            <div
              className=" flex justify-center items-center h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-gray-900 hover:cursor-pointer"
              onClick={handleFirstBoxClick}
            >
              {firstLetter}
            </div>
            <div
              className=" flex justify-center items-center h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-bittersweet hover:cursor-pointer"
              onClick={handleVowelClick}
            >
              {vowel}
            </div>
            <div
              className=" flex justify-center items-center h-40 w-40  lg:h-60 lg:w-60 bg-gray-100 text-gray-900 hover:cursor-pointer"
              onClick={handleLastBoxClick}
            >
              {lastLetter}
            </div>
          </div>
        </section>
        <div className="flex justify-center">
          <button
            onClick={handleResetClick}
            className="text-xl py-2 px-6 rounded-full bg-blue-500 text-white"
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
}

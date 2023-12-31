"use client";

import { useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Practice() {
  const [vowelsData, setVowelsData] = useState([]);
  const [currentVowelIndex, setCurrentVowelIndex] = useState(null);
  const [firstBoxData, setFirstBoxData] = useState([]);
  const [currentFirstBoxIndex, setCurrentFirstBoxIndex] = useState(null);
  const [lastBoxData, setLastBoxData] = useState([]);
  const [currentLastBoxIndex, setCurrentLastBoxIndex] = useState(null);

  useEffect(() => {
    const fetchData = async (collectionName, setDataCallback) => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setDataCallback(data);
        console.log(data);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    fetchData("vowels", setVowelsData);
    fetchData("cvcFirstBoxOne", setFirstBoxData);
    fetchData("cvcLastBoxOne", setLastBoxData);
  }, []);

  const handleBoxClick = (data, setCurrentIndex) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentIndex(data[randomIndex]?.name);
  };

  const handleVowelClick = () => {
    handleBoxClick(vowelsData, setCurrentVowelIndex);
  };

  const handleFirstBoxClick = () => {
    handleBoxClick(firstBoxData, setCurrentFirstBoxIndex);
  };

  const handleLastBoxClick = () => {
    const randomIndex = Math.floor(Math.random() * lastBoxData.length);
    const randomLastBox = lastBoxData[randomIndex]?.name;

    // Check the conditions
    if (
      (currentFirstBoxIndex === "f" &&
        currentVowelIndex === "u" &&
        randomLastBox === "ck") ||
      (currentFirstBoxIndex === "c" &&
        currentVowelIndex === "o" &&
        randomLastBox === "ck") ||
      (currentFirstBoxIndex === "w" &&
        currentVowelIndex === "o" &&
        randomLastBox === "g") ||
      (currentFirstBoxIndex === "s" &&
        currentVowelIndex === "e" &&
        randomLastBox === "x") ||
      (currentFirstBoxIndex === "d" &&
        currentVowelIndex === "i" &&
        randomLastBox === "ck")
    ) {
      // If the conditions are met, rerun the function to get a new randomLastBox
      handleLastBoxClick();
    } else {
      setCurrentLastBoxIndex(randomLastBox);
    }
  };

  const handleResetClick = () => {
    setCurrentVowelIndex("?");
    setCurrentFirstBoxIndex("?");
    setCurrentLastBoxIndex("?");
  };

  return (
    <>
      <main className="px-10 lg:px-32 font-poppins">
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
              {currentFirstBoxIndex !== null ? currentFirstBoxIndex : "?"}
            </div>
            <div
              className=" flex justify-center items-center h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-black hover:cursor-pointer"
              onClick={handleVowelClick}
            >
              {currentVowelIndex !== null ? currentVowelIndex : "?"}
            </div>
            <div
              className=" flex justify-center items-center h-40 w-40  lg:h-60 lg:w-60 bg-gray-100 text-gray-900 hover:cursor-pointer"
              onClick={handleLastBoxClick}
            >
              {currentLastBoxIndex !== null ? currentLastBoxIndex : "?"}
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

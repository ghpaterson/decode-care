"use client";

import { useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Practice() {
  const [vowelsData, setVowelsData] = useState([]);
  const [currentVowelIndex, setCurrentVowelIndex] = useState(null);

  useEffect(() => {
    // Fetch data from the "vowels" collection in Firestore
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "vowels"));
        const vowelsData = querySnapshot.docs.map((doc) => doc.data());
        setVowelsData(vowelsData);
        console.log(vowelsData);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    fetchData();
  }, []);

  const handleVowelClick = () => {
    const randomIndex = Math.floor(Math.random() * vowelsData.length);
    console.log("Random Index:", randomIndex); // Log the random index
    console.log("Vowels Data:", vowelsData); // Log the vowelsData
    setCurrentVowelIndex(vowelsData[randomIndex]?.name);
    console.log("Current Vowel Index:", currentVowelIndex); // Log the currentVowelIndex
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
            {/* <div
              className=" flex justify-center items-center h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-gray-900 hover:cursor-pointer"
              onClick={handleFirstBoxClick}
            >
              {firstLetter}
            </div> */}
            <div
              className=" flex justify-center items-center h-40 w-40 lg:h-60 lg:w-60 bg-gray-100 text-black hover:cursor-pointer"
              onClick={handleVowelClick}
            >
              {currentVowelIndex !== null ? currentVowelIndex : "?"}
            </div>
            {/* <div
              className=" flex justify-center items-center h-40 w-40  lg:h-60 lg:w-60 bg-gray-100 text-gray-900 hover:cursor-pointer"
              onClick={handleLastBoxClick}
            >
              {lastLetter}
            </div> */}
          </div>
        </section>
        {/* <div className="flex justify-center">
          <button
            onClick={handleResetClick}
            className="text-xl py-2 px-6 rounded-full bg-blue-500 text-white"
          >
            Reset
          </button>
        </div> */}
      </main>
    </>
  );
}

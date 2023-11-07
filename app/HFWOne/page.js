"use client";

import NavBar from "@/components/NavBar";
import { useState, useEffect, useRef } from "react";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function HFWOne() {
  const [highFrequencyWord, setHighFrequencyWord] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const intervalID = useRef(null);

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

    fetchData("hfwOne", setHighFrequencyWord);
  }, []);

  const startDisplayingWords = (speed) => {
    if (!intervalID.current) {
      const intervalTime =
        speed === "slow" ? 3000 : speed === "medium" ? 2000 : 1000;
      intervalID.current = setInterval(() => {
        setCurrentWordIndex((prevIndex) =>
          prevIndex < highFrequencyWord.length - 1 ? prevIndex + 1 : 0
        );
      }, intervalTime);
    }
  };

  const stopDisplayingWords = () => {
    if (intervalID.current) {
      clearInterval(intervalID.current);
      intervalID.current = null;
    }
  };

  return (
    <main className="px-10 lg:px-32">
      <NavBar />
      <div>
        <div>
          <h1 className="text-3xl">
            {highFrequencyWord[currentWordIndex]?.name}
          </h1>
        </div>
        <div className="flex gap-3">
          <button onClick={() => startDisplayingWords("slow")}>Slow</button>
          <button onClick={() => startDisplayingWords("medium")}>Medium</button>
          <button onClick={() => startDisplayingWords("fast")}>Fast</button>
          <button onClick={stopDisplayingWords}>Stop</button>
        </div>
      </div>
    </main>
  );
}

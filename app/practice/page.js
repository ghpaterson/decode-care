"use client";

import { useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Practice() {
  const [vowelsBox, setVowelsBox] = useState([]);

  useEffect(() => {
    // Fetch data from the "vowels" collection in Firestore
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "vowels"));
        const vowelsData = querySnapshot.docs.map((doc) => doc.data());
        setVowelsBox(vowelsData);
        console.log(vowelsData);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Vowels</h1>
      <ul>
        {vowelsBox.map((vowel, index) => (
          <li key={index}>{vowel.name}</li>
        ))}
      </ul>
    </div>
  );
}

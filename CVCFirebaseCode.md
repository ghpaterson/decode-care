Certainly! To make this complete, you can expand the previous code with the `handleVowelClick`, `handleFirstBoxClick`, and `handleLastBoxClick` functions to handle the clicks on each box. Here's the expanded code:

```javascript
import { useState, useEffect } from "react";
import NavBar from "../../components/navbar.js";
import firebase from "firebase/app";
import "firebase/firestore";

export default function CVC() {
  const [vowel, setVowel] = useState("?");
  const [firstLetter, setFirstLetter] = useState("?");
  const [lastLetter, setLastLetter] = useState("?");
  const db = firebase.firestore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await db.collection("words").get();

        const words = [];
        querySnapshot.forEach((doc) => {
          words.push(doc.data().word);
        });

        setVowel(words[Math.floor(Math.random() * words.length)]);
        setFirstLetter(words[Math.floor(Math.random() * words.length)]);
        setLastLetter(words[Math.floor(Math.random() * words.length)]);
      } catch (error) {
        console.error("Error fetching data from Firebase: ", error);
      }
    };

    fetchData();
  }, [db]);

  const handleVowelClick = () => {
    // Set the vowel to a random word from your Firestore data
    setVowel(words[Math.floor(Math.random() * words.length)]);
  };

  const handleFirstBoxClick = () => {
    // Set the first letter to a random word from your Firestore data
    setFirstLetter(words[Math.floor(Math.random() * words.length)]);
  };

  const handleLastBoxClick = () => {
    // Set the last letter to a random word from your Firestore data
    setLastLetter(words[Math.floor(Math.random() * words.length)]);
  };

  const handleResetClick = () => {
    setVowel("?");
    setFirstLetter("?");
    setLastLetter("?");
  };

  return (
    <>
      <main>
        <NavBar />
        <div className="mt-20">
          <div className="flex justify-center">
            <h1 className="font-comic text-5xl lg:text-6xl text-bittersweet">
              Let's Read
            </h1>
          </div>
          <div className="flex justify-center gap-4 lg:gap-14 my-10 px-6 font-comic">
            <div
              className=" flex justify-center items-center rounded-xl h-40 w-40 lg:h-60 lg:w-60 bg-darkbuff text-gray-900 text-6xl hover:cursor-pointer"
              onClick={handleFirstBoxClick}
            >
              {firstLetter}
            </div>
            <div
              className=" flex justify-center items-center rounded-xl h-40 w-40 lg:h-60 lg:w-60 bg-darkbuff text-bittersweet text-6xl hover:cursor-pointer"
              onClick={handleVowelClick}
            >
              {vowel}
            </div>
            <div
              className=" flex justify-center items-center rounded-xl h-40 w-40  lg:h-60 lg:w-60 bg-darkbuff text-gray-900 text-6xl hover:cursor-pointer"
              onClick={handleLastBoxClick}
            >
              {lastLetter}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleResetClick}
            className="bg-bittersweet font-comic text-bone text-xl py-2 px-6 rounded-xl"
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
```

In this code, the `handleVowelClick`, `handleFirstBoxClick`, and `handleLastBoxClick` functions are updated to set the `vowel`, `firstLetter`, and `lastLetter` states to random words from the Firebase Firestore data when their respective boxes are clicked.

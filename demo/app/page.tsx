"use client";
import {useState, useEffect} from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("Counter changed: ", counter)
  }, [counter])

  function handleAddToCounter(){
    setCounter(counter + 1)
  }

  function handleSubtractFromCounter(){
    setCounter2(counter2 - 1)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-5xl">
      <h1>Counter: {counter2}</h1>
      <button className="mt-6 px-6 py-3 bg-gray-600
      text-white font-semibold rounded-xl shadow-md active:scale-95 transform"
      onClick={handleAddToCounter}
      >
        Add One
      </button>

      <button className="mt-6 px-6 py-3 bg-gray-600
      text-white font-semibold rounded-xl shadow-md active:scale-95 transform"
      onClick={handleSubtractFromCounter}
      >
        Subtract One
      </button>

    </div>
  );
}

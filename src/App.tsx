/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { decrement, increment, reset } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  const [boxes, setBoxes] = useState<number[]>([]);

  useEffect(() => {
    if (count % 5 === 0 && count !== 0) {
      setBoxes((prevBoxes) => [...prevBoxes, count]);
    }
  }, [count]);

  const handleReset = () => {
    dispatch(reset());
    setBoxes([]);
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex flex-col items-center border border-purple-300 rounded-md bg-slate-50 p-10">
          <div className="flex">
            <button
              onClick={() => dispatch(increment())}
              className="px-3 py-3 rounded-md bg-green-500 text-xl font-semibold text-white">
              Increment
            </button>
            <h1 className="text-3xl mx-10">{count}</h1>
            <button
              onClick={() => dispatch(decrement())}
              className="px-3 py-3 rounded-md bg-red-500 text-xl font-semibold text-white">
              Decrement
            </button>
          </div>
          <button
            onClick={handleReset}
            className="mt-4 px-3 py-3 rounded-md bg-yellow-500 text-xl font-semibold text-white">
            Reset
          </button>
          <div className="mt-5 w-full flex flex-wrap justify-center">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="m-2 px-3 py-2 rounded bg-blue-500 flex justify-center items-center text-white text-xl font-bold">
                Box
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App
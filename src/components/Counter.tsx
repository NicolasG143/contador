"use client";

import {Dispatch, MouseEventHandler, SetStateAction, useCallback, useState} from "react";

type Func = (curr: number) => void;

export default function Counter({name}: {name: string}) {
  const [value, setValue] = useState(0);

  const handle = useCallback((curr: number) => {
    setValue((state) => state + curr);
  }, []);

  return (
    <div className="grid max-w-full grid-rows-2 gap-4 px-4 py-2">
      <div className="flex flex-col text-center">
        <label>{name}</label>
        <input
          className="px-4 py-2 text-center"
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </div>
      <div className="flex justify-center flex-1 flex-grow gap-4">
        <Button handle={handle} num={-10} />
        <Button handle={handle} num={-5} />
        <Button handle={handle} num={-1} />
        <Button handle={handle} num={1} />
        <Button handle={handle} num={5} />
        <Button handle={handle} num={10} />
      </div>
    </div>
  );
}

function Button({handle, num}: {handle: Func; num: number}) {
  return (
    <button
      className={`mt-2 rounded-lg flex-grow flex-1 px-4 py-2 text-center ${num < 0 ? "bg-red-500" : "bg-green-400"}`}
      type="button"
      onClick={() => handle(num)}
    >
      {num}
    </button>
  );
}

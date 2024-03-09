"use client";

import {Dispatch, MouseEventHandler, SetStateAction, useCallback, useState} from "react";

type Func = (curr: number) => void;

export default function Counter({name}: {name: string}) {
  const [value, setValue] = useState(0);

  const handle = useCallback((curr: number) => {
    setValue((state) => state + curr);
  }, []);

  return (
    <div className="grid max-w-full grid-cols-[auto,auto,auto] gap-4">
      <div className="flex flex-wrap justify-center gap-4">
        <Button handle={handle} num={-10} />
        <Button handle={handle} num={-5} />
        <Button handle={handle} num={-1} />
      </div>
      <div className="flex flex-col">
        <label>{name}</label>
        <input
          className="max-w-24 px-4 py-2"
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
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
      className={`mt-2 rounded-lg px-4 py-2 text-center ${num < 0 ? "bg-red-500" : "bg-green-400"}`}
      type="button"
      onClick={() => handle(num)}
    >
      {num}
    </button>
  );
}

"use client";

import {Dispatch, MouseEventHandler, SetStateAction, useState} from "react";

type Func = (curr: number) => void;

export default function Counter() {
  const [value, setValue] = useState(0);

  const handle = (curr: number) => {
    setValue((state) => state + curr);
  };

  return (
    <div className="flex max-w-full gap-4">
      <Button handle={handle} num={-10} />
      <Button handle={handle} num={-5} />
      <Button handle={handle} num={-1} />
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <Button handle={handle} num={1} />
      <Button handle={handle} num={5} />
      <Button handle={handle} num={10} />
    </div>
  );
}

function Button({handle, num}: {handle: Func; num: number}) {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-center ${num < 0 ? "bg-red-500" : "bg-green-400"}`}
      type="button"
      onClick={() => handle(num)}
    >
      {num}
    </button>
  );
}

"use client";

import type {ChangeEvent} from "react";

import {useCallback, useState} from "react";

type Func = (curr: number) => void;

export default function Counter({player}: {player: {name: string; points: number}}) {
  const [value, setValue] = useState(player.points);

  const handle = useCallback((curr: number) => {
    setValue((state) => state + curr);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className="grid max-w-full grid-rows-2 gap-4 px-4 py-2">
      <div className="flex flex-col text-center">
        <label>{player.name}</label>
        <input className="px-4 py-2 text-center" type="number" value={value} onChange={onChange} />
      </div>
      <div className="flex flex-1 flex-grow justify-center gap-4">
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
      className={`mt-2 flex-1 flex-grow rounded-lg px-4 py-2 text-center ${num < 0 ? "bg-red-500" : "bg-green-400"}`}
      type="button"
      onClick={() => handle(num)}
    >
      {num}
    </button>
  );
}

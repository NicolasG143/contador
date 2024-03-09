"use client";

import {useRef, useState} from "react";

import Counter from "./Counter";

export default function Players() {
  const [players, setPlayers] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const handleClick = () => {
    setPlayers([...players, value]);
    setValue("");
  };

  return (
    <section className="flex  flex-col gap-4">
      <div className="flex gap-4">
        <input placeholder="Nombre..." value={value} className="pl-2" type="text" onChange={(e) => setValue(e.target.value)} />
        <button type="button" className="px-4 py-2 text-center bg-zinc-700" onClick={handleClick}>Agregar</button>
      </div>
      <div className="flex flex-col gap-4">

      {players.map((player, idx) => (
        <div className="playerdiv rounded-lg" key={player}>
          <Counter name={player} />
        </div>
      ))}
      </div>
    </section>
  );
}

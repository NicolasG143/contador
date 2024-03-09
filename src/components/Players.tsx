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
    <section>
      <div>
        <input placeholder="Nombre..." type="text" onChange={(e) => setValue(e.target.value)} />
        <button type="button" onClick={handleClick}>Agregar</button>
      </div>
      {players.map((player, idx) => (
        <div key={player}>
          <Counter name={player} />
        </div>
      ))}
    </section>
  );
}

"use client";

import {useEffect, useState} from "react";

import Counter from "./Counter";

export interface Player {
  name: string;
  points: number;
}

const updatePlayers = (players: Player[]) => {
  window.localStorage.setItem("players", JSON.stringify(players));
};

export default function Players() {
  const [players, setPlayers] = useState<Player[] | []>([]);
  const [value, setValue] = useState<string>("");

  const handleClick = () => {
    const object = {name: value, points: 0};

    const newPlayers = players ? [...players, object] : [object]; // eslint-disable-line @typescript-eslint/no-unnecessary-condition

    setPlayers(newPlayers);
    setValue("");
    updatePlayers(newPlayers);
  };

  const handleDelete = (name: string) => {
    const newPlayers = players.filter((player) => player.name !== name);

    updatePlayers(newPlayers);
    setPlayers(newPlayers);
  };

  useEffect(() => {
    setPlayers(JSON.parse(window.localStorage.getItem("players")!) as Player[]);
  }, []);

  return (
    <section className="flex  flex-col gap-4">
      <div className="flex gap-4">
        <input
          className="pl-2"
          placeholder="Nombre..."
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="bg-zinc-700 px-4 py-2 text-center" type="button" onClick={handleClick}>
          Agregar
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {players // eslint-disable-line @typescript-eslint/no-unnecessary-condition
          ? players.map((player) => (
              <div key={player.name} className="playerdiv rounded-lg">
                <Counter handleDelete={handleDelete} player={player} />
              </div>
            ))
          : null}
      </div>
    </section>
  );
}

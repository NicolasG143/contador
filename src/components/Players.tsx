"use client";

import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

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

    if (players.find((player) => player.name === value) || !value) return;

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
    <section className="flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          className="rounded-lg pl-2"
          maxLength={16}
          placeholder="Nombre..."
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="rounded-lg bg-zinc-700 px-4 py-2 text-center"
          type="button"
          onClick={handleClick}
        >
          Agregar
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <AnimatePresence>
          {players // eslint-disable-line @typescript-eslint/no-unnecessary-condition
            ? players.map((player) => (
                <motion.div
                  key={player.name}
                  animate={{opacity: 1, height: "auto"}} // Animate to its natural height
                  className="playerdiv overflow-hidden rounded-lg transition-colors"
                  exit={{opacity: 0, height: 0}} // Shrink to 0 height on exit
                  initial={{opacity: 0, height: "auto"}} // Start hidden with 0 height
                  transition={{duration: 0.25}}
                >
                  <Counter handleDelete={handleDelete} player={player} />
                </motion.div>
              ))
            : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

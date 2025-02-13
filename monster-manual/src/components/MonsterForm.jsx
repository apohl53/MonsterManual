"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MonsterForm() {
  const router = useRouter();
  const [monster, setMonster] = useState({
    name: "",
    creatureType: "",
    subtype: "",
    environment: "",
    alignment: "",
    challengeRating: "",
    source: "",
  });

  const handleChange = (e) => {
    setMonster({ ...monster, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/monsters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(monster),
    });

    if (response.ok) {
      setMonster({
        name: "",
        creatureType: "",
        subtype: "",
        environment: "",
        alignment: "",
        challengeRating: "",
        source: "",
      });
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={monster.name}
        onChange={handleChange}
        placeholder="Monster Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="creatureType"
        value={monster.creatureType}
        onChange={handleChange}
        placeholder="Creature Type"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="subtype"
        value={monster.subtype}
        onChange={handleChange}
        placeholder="Subtype"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="environment"
        value={monster.environment}
        onChange={handleChange}
        placeholder="Environment"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="alignment"
        value={monster.alignment}
        onChange={handleChange}
        placeholder="Alignment"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="challengeRating"
        value={monster.challengeRating}
        onChange={handleChange}
        placeholder="Challenge Rating"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="source"
        value={monster.source}
        onChange={handleChange}
        placeholder="Source"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Monster
      </button>
    </form>
  );
}

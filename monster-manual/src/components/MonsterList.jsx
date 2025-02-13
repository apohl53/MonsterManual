"use client";

import { useState, useEffect } from "react";

export default function MonsterList() {
  const [monsters, setMonsters] = useState([]);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    fetchMonsters();
  }, []);

  const fetchMonsters = async () => {
    const response = await fetch("/api/monsters");
    if (response.ok) {
      const data = await response.json();
      setMonsters(data);
    }
  };

  const handleSort = (key) => {
    setSortBy(key);
    setMonsters([...monsters].sort((a, b) => a[key].localeCompare(b[key])));
  };

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => handleSort("name")}
          className="p-2 bg-gray-200 rounded"
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSort("creatureType")}
          className="p-2 bg-gray-200 rounded"
        >
          Sort by Type
        </button>
        <button
          onClick={() => handleSort("environment")}
          className="p-2 bg-gray-200 rounded"
        >
          Sort by Environment
        </button>
        <button
          onClick={() => handleSort("challengeRating")}
          className="p-2 bg-gray-200 rounded"
        >
          Sort by CR
        </button>
      </div>
      <ul className="space-y-2">
        {monsters.map((monster, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded">
            <strong>{monster.name}</strong> - {monster.creatureType}
            {monster.subtype && ` (${monster.subtype})`}, {monster.environment},
            {monster.alignment}, CR: {monster.challengeRating}, Source:{" "}
            {monster.source}
          </li>
        ))}
      </ul>
    </div>
  );
}

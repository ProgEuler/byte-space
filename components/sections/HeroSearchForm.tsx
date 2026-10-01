"use client";

import { useState } from "react";
import { Search } from "lucide-react";

/**
 * Client-side search form used inside the otherwise-server Hero section.
 * Keeps the rest of the Hero tree on the server (smaller client bundle,
 * RSC-friendly), and only the interactive form runs on the client.
 */
export default function HeroSearchForm() {
  const [query, setQuery] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to real search route once /search exists
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-7 flex w-full max-w-[480px] items-center gap-3 px-4"
    >
      <div className="flex flex-1 items-center gap-2.5 rounded-full bg-white px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <Search size={17} className="text-gray-400 stroke-[2.2]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />
      </div>
      <button
        type="submit"
        className="h-10 rounded-full bg-brand-lime px-6 text-sm font-semibold text-brand-ink transition hover:brightness-105 active:scale-95"
      >
        Search
      </button>
    </form>
  );
}

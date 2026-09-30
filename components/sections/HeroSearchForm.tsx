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
      className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full bg-white p-2 shadow-card-lg"
    >
      <div className="flex flex-1 items-center gap-3 px-4">
        <Search size={18} className="text-brand-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Courses, topics, creators"
          className="w-full bg-transparent text-sm outline-none placeholder:text-brand-muted"
        />
      </div>
      <button
        type="submit"
        className="h-11 rounded-full bg-brand-lime px-6 text-sm font-semibold text-brand-ink transition hover:bg-[#C7E800]"
      >
        Discover
      </button>
    </form>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  "Dashboard",
  "Courses",
  "Analytics",
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="fixed bottom-0 left-0 right-0 z-50 flex md:relative md:flex flex-row md:flex-col w-full md:w-24 xl:w-64 border-r border-white/10 bg-zinc-950 p-6">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white">
          Sameer's Academy
        </h2>
      </div>

      <nav className="flex flex-col gap-3">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className="relative rounded-2xl px-4 py-3 text-left text-sm"
          >
            {active === item && (
              <motion.div
                layoutId="sidebar-highlight"
                className="absolute inset-0 rounded-2xl bg-white/10"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              />
            )}

            <span
              className={`relative z-10 ${
                active === item
                  ? "text-white"
                  : "text-zinc-400"
              }`}
            >
              {item}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
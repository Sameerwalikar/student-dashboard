"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

const items = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Analytics",
    href: "/analytics",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-0 right-0 z-50 flex w-full flex-row border-r border-white/10 bg-zinc-950 p-6 md:relative md:flex-col md:w-24 xl:w-64">
      <div className="mb-10 hidden md:block">
        <h2 className="text-2xl font-bold text-white">
          Sameer's Academy
        </h2>
      </div>

      <nav className="flex w-full flex-row justify-around gap-3 md:flex-col">
        {items.map((item) => {
          const active =
            pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative rounded-2xl px-4 py-3 text-left text-sm"
            >
              {active && (
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
                  active
                    ? "text-white"
                    : "text-zinc-400"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
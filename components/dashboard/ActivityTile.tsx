"use client";

import { motion } from "framer-motion";

const activityData = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 4.5 },
  { day: "Sun", hours: 2.5 },
];

export default function ActivityTile() {
  const totalHours = activityData.reduce(
    (acc, item) => acc + item.hours,
    0
  );

  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-900/90 p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Weekly Activity
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Learning statistics this week
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 px-3 py-2 text-right">
          <p className="text-lg font-bold text-white">
            {totalHours}h
          </p>

          <p className="text-xs text-zinc-500">
            Total Hours
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-end justify-between gap-3">
        {activityData.map((item, index) => (
          <div
            key={item.day}
            className="flex flex-1 flex-col items-center"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${item.hours * 18}px` }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="w-full rounded-2xl bg-white/20"
            />

            <p className="mt-3 text-xs text-zinc-500">
              {item.day}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-black/30 p-3">
          <p className="text-xl font-bold text-white">
            87%
          </p>

          <p className="text-xs text-zinc-500">
            Completion
          </p>
        </div>

        <div className="rounded-2xl bg-black/30 p-3">
          <p className="text-xl font-bold text-white">
            6/7
          </p>

          <p className="text-xs text-zinc-500">
            Active Days
          </p>
        </div>

        <div className="rounded-2xl bg-black/30 p-3">
          <p className="text-xl font-bold text-white">
            +12%
          </p>

          <p className="text-xs text-zinc-500">
            Growth
          </p>
        </div>
      </div>
    </section>
  );
}
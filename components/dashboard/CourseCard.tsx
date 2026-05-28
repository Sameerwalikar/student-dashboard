"use client";

import { motion } from "framer-motion";
import { Course } from "@/types/course";

import {
  Code2,
  Sparkles,
  Rocket,
  Database,
  ArrowUpRight,
} from "lucide-react";

interface CourseCardProps {
  course: Course;
}

const icons = {
  Code2,
  Sparkles,
  Rocket,
  Database,
};

export default function CourseCard({
  course,
}: CourseCardProps) {
  const Icon =
    icons[course.icon_name as keyof typeof icons];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="group rounded-3xl border border-white/10 bg-zinc-900/90 p-6 transition-all hover:border-white/20 hover:bg-zinc-900"
    >
      <div className="flex items-start justify-between">
        <div className="rounded-2xl bg-white/10 p-3">
          {Icon && (
            <Icon className="h-5 w-5 text-white" />
          )}
        </div>

        <div className="text-right">
          <p className="text-sm text-zinc-400">
            {course.progress}%
          </p>

          <p className="text-xs text-zinc-600">
            Completed
          </p>
        </div>
      </div>

      <div className="mt-5">
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
          {course.category}
        </span>

        <h2 className="mt-4 text-xl font-semibold text-white">
          {course.title}
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          {course.duration} total duration
        </p>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-white"
        />
      </div>

      <button className="mt-6 flex items-center gap-2 text-sm text-zinc-300 transition group-hover:text-white">
        Continue Learning
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </motion.article>
  );
}
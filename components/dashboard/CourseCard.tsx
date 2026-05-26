"use client";

import { motion } from "framer-motion";
import { Course } from "@/types/course";

import {
  Code2,
  Sparkles,
  Rocket,
  Database,
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
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="rounded-3xl border border-white/10 bg-zinc-900/90 p-6 transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="rounded-2xl bg-white/10 p-3">
          {Icon && (
            <Icon className="h-5 w-5 text-white" />
          )}
        </div>

        <span className="text-sm text-zinc-500">
          {course.progress}%
        </span>
      </div>

      <h2 className="text-lg font-semibold text-white">
        {course.title}
      </h2>

      <p className="mt-3 text-sm text-zinc-400">
        Progress
      </p>

      <div className="mt-3 h-3 overflow-hidden rounded-full bg-zinc-800">
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
    </motion.article>
  );
}
"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Course } from "@/types/course";

interface CourseDetailsCardProps {
  course: Course;
}

export default function CourseDetailsCard({
  course,
}: CourseDetailsCardProps) {
  const [showProgress, setShowProgress] =
    useState(false);

  return (
    <motion.article
      layout
      className="rounded-3xl border border-white/10 bg-zinc-900/90 p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            {course.title}
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            {course.category} • {course.duration}
          </p>
        </div>

        <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
          {course.progress}%
        </div>
      </div>

      <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
        {course.description}
      </p>

      <button
        onClick={() =>
          setShowProgress(!showProgress)
        }
        className="mt-6 text-sm font-medium text-white underline underline-offset-4"
      >
        {showProgress
          ? "Hide Progress"
          : "View Progress"}
      </button>

      <AnimatePresence>
        {showProgress && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="overflow-hidden"
          >
            <div className="mt-8 flex items-center gap-8">
              <div className="relative flex h-40 w-40 items-center justify-center">
                <svg
                  className="h-40 w-40 -rotate-90"
                  viewBox="0 0 160 160"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#27272a"
                    strokeWidth="12"
                    fill="transparent"
                  />

                  <motion.circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="white"
                    strokeWidth="12"
                    fill="transparent"
                    strokeLinecap="round"
                    initial={{
                      pathLength: 0,
                    }}
                    animate={{
                      pathLength:
                        course.progress / 100,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    style={{
                      pathLength:
                        course.progress / 100,
                    }}
                  />
                </svg>

                <div className="absolute text-3xl font-bold text-white">
                  {course.progress}%
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Course Progress
                </h3>

                <p className="mt-3 max-w-md leading-7 text-zinc-400">
                  You have completed{" "}
                  {course.progress}% of this course.
                  Continue learning to unlock the
                  remaining modules and advanced
                  lessons.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
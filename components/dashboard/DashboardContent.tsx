"use client";

import { motion } from "framer-motion";

export default function DashboardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="flex-1 p-6 md:p-10"
    >
      {children}
    </motion.section>
  );
}
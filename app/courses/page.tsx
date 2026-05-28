import { createSupabaseClient } from "@/lib/supabase/server";
import { Course } from "@/types/course";

import CourseDetailsCard from "@/components/dashboard/CourseDetailsCard";

export default async function CoursesPage() {
  const supabase = createSupabaseClient();

  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <main className="min-h-screen bg-black p-6 text-white md:p-10">
      <div className="mb-10">
        <p className="text-sm text-zinc-500">
          Course Overview
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Courses
        </h1>

        <p className="mt-3 text-zinc-400">
          {courses?.length} courses available
        </p>
      </div>

      <div className="grid gap-6">
        {courses?.map((course: Course) => (
          <CourseDetailsCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </main>
  );
}
import Sidebar from "@/components/dashboard/Sidebar";
import HeroTile from "@/components/dashboard/HeroTile";
import CourseCard from "@/components/dashboard/CourseCard";
import ActivityTile from "@/components/dashboard/ActivityTile";
import DashboardContent from "@/components/dashboard/DashboardContent";

import { createSupabaseClient } from "@/lib/supabase/server";
import { Course } from "@/types/course";

export default async function Home() {
  const supabase = createSupabaseClient();

  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <main className="min-h-screen bg-black pb-24 text-white md:pb-0">
      <div className="flex">
        <Sidebar />

        <DashboardContent>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <HeroTile />
            </div>

            <div className="lg:col-span-4">
              <ActivityTile />
            </div>

            {courses?.map((course: Course) => (
              <div
                key={course.id}
                className="lg:col-span-4"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </DashboardContent>
      </div>
    </main>
  );
}
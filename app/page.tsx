import { createSupabaseClient } from "@/lib/supabase/server";
import { Course } from "@/types/course";

export default async function Home() {
  const supabase = createSupabaseClient();

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  console.log(courses);
  console.log(error);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Student Dashboard
      </h1>

      <pre>
        {JSON.stringify(courses, null, 2)}
      </pre>
    </main>
  );
}
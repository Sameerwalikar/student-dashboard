"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-2xl bg-white px-5 py-3 text-black"
      >
        Try Again
      </button>
    </main>
  );
}
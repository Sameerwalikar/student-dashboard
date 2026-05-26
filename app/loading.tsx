export default function Loading() {
    return (
      <main className="min-h-screen bg-black p-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="h-48 rounded-3xl bg-zinc-900 animate-pulse lg:col-span-8" />
  
          <div className="h-48 rounded-3xl bg-zinc-900 animate-pulse lg:col-span-4" />
  
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-64 rounded-3xl bg-zinc-900 animate-pulse lg:col-span-4"
            />
          ))}
        </div>
      </main>
    );
  }
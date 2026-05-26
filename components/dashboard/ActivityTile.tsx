export default function ActivityTile() {
    return (
      <section className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="text-lg font-semibold text-white">
          Weekly Activity
        </h2>
  
        <div className="mt-6 flex items-end gap-2">
          {[40, 65, 30, 80, 55, 75, 50].map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}px` }}
              className="w-full rounded-xl bg-white/20"
            />
          ))}
        </div>
      </section>
    );
  }
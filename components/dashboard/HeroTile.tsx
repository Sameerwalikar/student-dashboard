export default function HeroTile() {
    return (
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8">
        <p className="text-sm text-zinc-400">
          Welcome back
        </p>
  
        <h1 className="mt-2 text-4xl font-bold text-white">
          Sameer 👋
        </h1>
  
        <div className="mt-6 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
          🔥 12 day learning streak
        </div>
      </section>
    );
  }
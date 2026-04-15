function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_30%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
          Portfolio 2026
        </p>
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold uppercase leading-none tracking-tight text-white sm:text-6xl md:text-8xl">
            MUJIB PATHAN
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            Creative Developer building scalable web apps
          </p>
        </div>
        <div>
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-white bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white"
          >
            Explore Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

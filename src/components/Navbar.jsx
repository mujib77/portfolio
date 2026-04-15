function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="text-lg font-bold tracking-[0.2em] text-white">
          build.
        </a>
        <div className="flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-zinc-300">
          <a
            href="#projects"
            className="transition hover:text-white"
          >
            Projects
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

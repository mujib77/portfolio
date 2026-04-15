function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Mujib Pathan. All rights reserved.</p>
        <a
          href="https://github.com/mujib77"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
        >
          GitHub Profile
        </a>
      </div>
    </footer>
  );
}

export default Footer;

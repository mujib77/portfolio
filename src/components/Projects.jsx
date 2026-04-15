function Projects() {
  return (
    <section className="px-6 py-20 md:px-10" id="projects">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Projects</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Selected work focused on useful, scalable experiences.
          </h2>
        </div>

        <article className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-soft md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-white md:text-3xl">HackMate</h3>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                HackMate is a collaborative platform designed to help developers connect,
                plan, and build hackathon projects faster. It focuses on team discovery,
                streamlined workflows, and a smooth experience from idea to launch.
              </p>
            </div>
            <a
              href="https://github.com/mujib77/HackMate"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full border border-white px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
            >
              View on GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;

function About() {
  return (
    <section className="px-6 py-20 md:px-10" id="about">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-soft md:grid-cols-[0.8fr_1.2fr] md:p-12">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">About</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Building thoughtful digital products with a clean engineering mindset.
          </h2>
        </div>
        <p className="text-base leading-8 text-zinc-300 md:text-lg">
          I'm a first-year Computer Science student focused on becoming a software engineer.
          I enjoy building real-world projects and learning how systems actually work behind the scenes.
          <br /><br />
          Currently, I'm working on full-stack development using React,Node.js and Postgresql,
          while also improving my understanding of databses, backend systems, and problem-solving.
          <br /><br />
          I'm still learning and exploring, but I believe in building consistently, shipping projects,
          and improving step by step.
        </p>
      </div>
    </section>
  );
}

export default About;

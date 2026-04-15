const skills = [
  "React",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Express",
  "JavaScript",
  "SQL",
  "GitHub",
  "Postman",
];

function Skills() {
  return (
    <section className="px-6 py-20 md:px-10" id="skills">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Skills</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Tools and technologies I use to ship modern products.
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

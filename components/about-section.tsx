const details = [
  { label: "Education", value: "Bachelor of Computer Applications (BCA)" },
  { label: "Location", value: "Nepal" },
  {
    label: "Interests",
    value: "Web Development, Machine Learning, Technology, and Problem Solving",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-y border-line bg-highlight/50 pt-12 pb-20 sm:pt-16 sm:pb-28"
    >
      <div className="section-wrap grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <p className="eyebrow">01 / About</p>
          <h2 id="about-title" className="section-title">
            A Little About Me
          </h2>
        </div>
        <div className="max-w-2xl space-y-5 text-base leading-8 text-muted sm:text-lg">
          <p>
            I&apos;m Rojina Chhetri, a Computer Applications student interested in software
            development and modern technologies. I enjoy learning new tools,
            solving problems, and building applications that make everyday tasks
            easier.
          </p>
          <p>
            Through my academic projects, I have explored full-stack web
            development, database management, machine learning, and data
            analysis. I believe in learning through practical experience and
            continuously improving my skills.
          </p>
        </div>
      </div>
      <dl className="section-wrap mt-12 grid gap-7 border-t border-line pt-7 sm:grid-cols-3">
        {details.map((detail) => (
          <div key={detail.label}>
            <dt className="text-sm font-medium text-ink">{detail.label}</dt>
            <dd className="mt-2 text-sm leading-6 text-muted">{detail.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

const skillGroups = [
  {
    label: "Programming Languages",
    skills: ["PHP", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Laravel", "Tailwind CSS", "Bootstrap", "FastAPI"],
  },
  { label: "Database", skills: ["MySQL", "SQLite", "MongoDB"] },
  { label: "Tools", skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"] },
  {
    label: "Data Science & Machine Learning",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "PCA",
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-wrap py-20 sm:py-28"
    >
      <div className="max-w-2xl">
        <p className="eyebrow">02 / Skills</p>
        <h2 id="skills-title" className="section-title">
          Tools I Work With
        </h2>
      </div>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid gap-3 py-5 sm:grid-cols-[minmax(12rem,0.65fr)_1.35fr] sm:gap-8"
          >
            <h3 className="text-sm font-medium text-ink">{group.label}</h3>
            <ul className="flex flex-wrap gap-x-2 gap-y-2 text-sm text-muted">
              {group.skills.map((skill, index) => (
                <li key={skill}>
                  {index > 0 && <span className="mr-2 text-line" aria-hidden="true">/</span>}
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

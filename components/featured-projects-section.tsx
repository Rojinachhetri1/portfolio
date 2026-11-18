import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "MoodWave – Music Emotion Analysis",
    description:
      "A machine learning-based web application that analyzes music emotions, predicts song popularity, classifies music moods, and recommends similar songs.",
    technologies: ["Python", "FastAPI", "MongoDB", "Machine Learning", "Pandas", "Scikit-learn"],
    features: [
      "Music mood prediction",
      "Popularity prediction",
      "Genre classification",
      "Emotion visualization",
      "Similar song recommendations",
      "User prediction history",
    ],
  },
  {
    number: "02",
    name: "Ban Ko Khabar – Forest News Website",
    description:
      "A web-based news platform focused on forest-related news, environmental information, and conservation awareness, with a dedicated administration dashboard.",
    technologies: ["Laravel", "PHP", "SQLite", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    features: [
      "Dynamic news articles",
      "Category management",
      "Image gallery",
      "User management",
      "Admin dashboard",
      "Reports and settings",
    ],
  },
  {
    number: "03",
    name: "GreenCane Collective – Sustainable Business Concept",
    description:
      "An eco-friendly business concept focused on producing biodegradable plates and spoons from sugarcane bagasse as an alternative to single-use plastic products.",
    technologies: ["Sustainable product development", "Plastic waste reduction"],
    features: [
      "Sustainable product development",
      "Plastic waste reduction",
      "Environmental awareness",
      "Responsible consumption",
    ],
  },
];

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-y border-line bg-white/40 py-20 sm:py-28"
    >
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">03 / Selected work</p>
            <h2 id="projects-title" className="section-title">
              Some Things I&apos;ve Built
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            A selection of academic projects and ideas. Project images are
            placeholders until original screenshots are added.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="flex flex-col">
              <div
                className="placeholder-surface min-h-[13rem] rounded-sm"
                role="img"
                aria-label={`Screenshot placeholder for ${project.name}; no screenshot has been provided`}
              >
                <Image
                  src="/portfolio-image-placeholder.svg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="relative z-10 px-5">
                  <p className="text-sm font-semibold">Project screenshot placeholder</p>
                  <p className="mt-2 text-xs text-muted">
                    Add an original screenshot of {project.name}.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col border-b border-line py-5">
                <p className="text-xs tracking-[0.15em] text-muted">{project.number}</p>
                <h3 className="mt-2 text-lg font-medium leading-snug">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies and focus">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="border border-line px-2 py-1 text-xs text-muted"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <details className="group/details mt-auto pt-5">
                  <summary className="inline-flex min-h-10 cursor-pointer list-none items-center gap-2 text-sm font-medium text-accent hover:text-ink focus-visible:outline">
                    View Project <span aria-hidden="true">+</span>
                  </summary>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </details>
                <p className="mt-3 text-xs text-muted">
                  Repository link not provided.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

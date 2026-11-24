import { ArrowDownRight, Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="section-wrap grid min-h-[calc(100svh-4.25rem)] items-start gap-10 pb-16 pt-8 sm:pt-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12 md:pb-20 md:pt-12"
    >
      <div className="pt-2 md:pt-0">
        <p className="eyebrow">Hello, I&apos;m Rojina Chhetri</p>
        <h1
          id="hero-title"
          className="mt-5 max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-5xl"
        >
          Building Digital Experiences Through Creativity and Technology.
        </h1>
        <p className="mt-5 text-sm font-medium tracking-wide text-accent">
          BCA Student <span className="px-2 text-line">/</span> Aspiring Software Developer
        </p>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          I&apos;m a BCA student and aspiring software developer passionate about
          web development, machine learning, and creating practical digital
          solutions. I enjoy turning ideas into functional and user-friendly
          applications.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Link
            href="#projects"
            className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View My Projects <ArrowDownRight aria-hidden="true" size={17} />
          </Link>
          <Link
            href="/rojina-chhetri-cv.txt"
            download
            className="inline-flex min-h-12 items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-hover"
          >
            Download CV <Download aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="mt-8 flex items-center gap-5 text-sm text-muted">
          <a
            className="inline-flex min-h-10 items-center gap-2 transition-colors hover:text-accent-hover"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub (replace with Rojina Chhetri's profile)"
          >
            <Github aria-hidden="true" size={17} /> GitHub
          </a>
          <a
            className="inline-flex min-h-10 items-center gap-2 transition-colors hover:text-accent-hover"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn (replace with Rojina Chhetri's profile)"
          >
            <Linkedin aria-hidden="true" size={17} /> LinkedIn
          </a>
          <span className="text-xs text-muted">Update profile links before publishing</span>
        </div>
      </div>
      <div className="relative min-h-[19rem] overflow-hidden rounded-sm border border-line md:min-h-[27rem]">
        <Image
          src="/rojina-chhetri-photo.jpg"
          alt="Portrait of Rojina Chhetri"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

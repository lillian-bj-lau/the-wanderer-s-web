import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  status: "Active" | "In flux" | "Wandering";
  tagline: string;
  description: string;
  stack: string[];
  links?: { repo?: string; live?: string };
}

const projects: Project[] = [
  {
    title: "Palantír",
    status: "Active",
    tagline: "Real-time observability for distributed pipelines",
    description:
      "A small dashboard that watches long-running ETL jobs and surfaces anomalies before they become incidents. Built around streaming events and cheap, fast queries.",
    stack: ["TypeScript", "Rust", "DuckDB", "WebSockets"],
    links: { repo: "https://github.com" },
  },
  {
    title: "Marginalia",
    status: "Active",
    tagline: "Annotation layer for academic PDFs",
    description:
      "A browser extension that lets you tag, link, and export highlights across papers — designed for literature reviews that span hundreds of sources.",
    stack: ["React", "IndexedDB", "PDF.js"],
    links: { repo: "https://github.com" },
  },
  {
    title: "Cartograph",
    status: "In flux",
    tagline: "A maps-first note-taking experiment",
    description:
      "Notes pinned to places. Built to test whether spatial memory really helps recall — early results say yes, with caveats.",
    stack: ["React", "MapLibre", "Supabase"],
  },
  {
    title: "Smallfolk",
    status: "Wandering",
    tagline: "Tiny utilities for big spreadsheets",
    description:
      "A grab-bag of CLI tools for cleaning, joining, and profiling messy CSVs without spinning up a full dataframe environment.",
    stack: ["Python", "Polars"],
    links: { repo: "https://github.com" },
  },
];

const statusColor: Record<Project["status"], string> = {
  Active: "bg-secondary text-secondary-foreground",
  "In flux": "bg-accent text-accent-foreground",
  Wandering: "bg-muted text-muted-foreground",
};

const Projects = () => {
  return (
    <section className="container py-16 md:py-20">
      <header className="max-w-2xl mb-14 animate-fade-up">
        <p className="tengwar-flourish text-xs mb-4">⟁ SIGIL · II ⟁</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          Projects in progress
        </h1>
        <p className="mt-4 text-foreground/70 text-lg">
          A working list of things I'm building. Some are quests, some are
          detours. All are open to conversation.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="sigil-card animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-display text-2xl font-semibold">{p.title}</h2>
              <span className={`text-[10px] tracking-widest uppercase px-2 py-1 rounded-sm ${statusColor[p.status]}`}>
                {p.status}
              </span>
            </div>
            <p className="text-sm text-accent-foreground/80 italic mb-3">{p.tagline}</p>
            <p className="text-sm text-foreground/75 leading-relaxed">{p.description}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="text-[11px] px-2 py-0.5 border border-border rounded-sm text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>

            {p.links && (
              <div className="mt-5 flex items-center gap-4 text-sm">
                {p.links.repo && (
                  <a href={p.links.repo} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5">
                    <Github className="h-3.5 w-3.5" /> Repo
                  </a>
                )}
                {p.links.live && (
                  <a href={p.links.live} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1.5">
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import { ExternalLink, FileText, Mic } from "lucide-react";

interface Entry {
  year: string;
  title: string;
  venue: string;
  authors?: string;
  type: "paper" | "talk" | "poster";
  link?: string;
}

const entries: Entry[] = [
  {
    year: "2025",
    title: "On the cartography of small data: spatial mnemonic systems in modern note-taking",
    venue: "Journal of Personal Knowledge Systems · Vol. 12",
    authors: "Lau, L. B. J.",
    type: "paper",
    link: "#",
  },
  {
    year: "2024",
    title: "Streaming-first observability for low-latency ETL",
    venue: "PyData Global 2024 · Invited Talk",
    type: "talk",
    link: "#",
  },
  {
    year: "2024",
    title: "Marginalia: a study of annotation density across literature reviews",
    venue: "ACM CHI Late-Breaking Work",
    authors: "Lau, L. B. J., et al.",
    type: "poster",
    link: "#",
  },
  {
    year: "2023",
    title: "Quiet interfaces: design patterns for non-attentional tools",
    venue: "Interaction Design Quarterly · Issue 41",
    authors: "Lau, L. B. J.",
    type: "paper",
    link: "#",
  },
  {
    year: "2023",
    title: "Building Palantír: lessons from a year of self-hosted observability",
    venue: "StaffPlus NYC",
    type: "talk",
  },
];

const typeMeta: Record<Entry["type"], { label: string; Icon: typeof FileText }> = {
  paper: { label: "Paper", Icon: FileText },
  talk: { label: "Talk", Icon: Mic },
  poster: { label: "Poster", Icon: FileText },
};

const Publications = () => {
  return (
    <section className="container py-16 md:py-20">
      <header className="max-w-2xl mb-14 animate-fade-up">
        <p className="tengwar-flourish text-xs mb-4">⟁ SIGIL · III ⟁</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          Publications &amp; conferences
        </h1>
        <p className="mt-4 text-foreground/70 text-lg">
          Writing, talks, and posters. Reverse-chronological — the ledger grows.
        </p>
      </header>

      <ol className="relative border-l border-border/70 pl-6 md:pl-8 space-y-10">
        {entries.map((e, i) => {
          const { label, Icon } = typeMeta[e.type];
          return (
            <li
              key={i}
              className="relative animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="absolute -left-[33px] md:-left-[41px] top-1.5 grid h-6 w-6 place-items-center rounded-full bg-background border border-foreground/40 text-[10px] font-display">
                ◇
              </span>

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                <span className="font-display text-sm tracking-widest text-accent-foreground bg-accent px-2 py-0.5 rounded-sm">
                  {e.year}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                  <Icon className="h-3 w-3" />
                  {label}
                </span>
              </div>

              <h2 className="font-display text-xl md:text-2xl font-medium leading-snug mt-1">
                {e.link ? (
                  <a href={e.link} className="link-underline inline-flex items-baseline gap-2">
                    {e.title}
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 self-center" />
                  </a>
                ) : (
                  e.title
                )}
              </h2>

              <p className="mt-1 text-sm text-foreground/75">{e.venue}</p>
              {e.authors && <p className="text-xs text-muted-foreground italic mt-0.5">{e.authors}</p>}
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Publications;

import { BookOpen, Tv } from "lucide-react";

interface Book {
  title: string;
  author: string;
  progress: number; // 0–100
  note?: string;
}
interface Show {
  title: string;
  season?: string;
  note?: string;
}

const reading: Book[] = [
  {
    title: "The Name of the Rose",
    author: "Umberto Eco",
    progress: 62,
    note: "Slow, dense, and very much my thing.",
  },
  {
    title: "A Memory Called Empire",
    author: "Arkady Martine",
    progress: 28,
    note: "Diplomacy + identity in space — early but promising.",
  },
  {
    title: "The Silmarillion",
    author: "J. R. R. Tolkien",
    progress: 15,
    note: "A reread. The Ainulindalë never gets old.",
  },
];

const watching: Show[] = [
  { title: "Severance", season: "Season 2", note: "A near-perfect cold open every week." },
  { title: "Shōgun", season: "Season 1", note: "Slow-burning, beautifully shot." },
  { title: "House of the Dragon", season: "Season 2", note: "Dragons. Predictably." },
];

const Currently = () => {
  return (
    <section className="container py-16 md:py-20">
      <header className="max-w-2xl mb-14 animate-fade-up">
        <p className="tengwar-flourish text-xs mb-4">⟁ SIGIL · IV ⟁</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          Currently
        </h1>
        <p className="mt-4 text-foreground/70 text-lg">
          What's open on the bedside table and what's queued on the screen.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Reading */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-4 w-4 text-primary" />
            <h2 className="font-display text-2xl font-semibold">Reading</h2>
            <span className="tengwar-flourish text-[10px]">⟁⟁⟁</span>
          </div>

          <ul className="space-y-5">
            {reading.map((b) => (
              <li key={b.title} className="sigil-card">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-medium">{b.title}</h3>
                  <span className="text-xs text-muted-foreground tabular-nums">{b.progress}%</span>
                </div>
                <p className="text-sm text-muted-foreground italic">{b.author}</p>
                <div className="mt-3 h-1 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${b.progress}%` }}
                  />
                </div>
                {b.note && <p className="mt-3 text-sm text-foreground/75">{b.note}</p>}
              </li>
            ))}
          </ul>
        </div>

        {/* Watching */}
        <div className="animate-fade-up [animation-delay:100ms]">
          <div className="flex items-center gap-3 mb-6">
            <Tv className="h-4 w-4 text-secondary" />
            <h2 className="font-display text-2xl font-semibold">Watching</h2>
            <span className="tengwar-flourish text-[10px]">◇◇◇</span>
          </div>

          <ul className="space-y-5">
            {watching.map((s) => (
              <li key={s.title} className="sigil-card">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-medium">{s.title}</h3>
                  {s.season && (
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.season}
                    </span>
                  )}
                </div>
                {s.note && <p className="mt-2 text-sm text-foreground/75">{s.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Currently;

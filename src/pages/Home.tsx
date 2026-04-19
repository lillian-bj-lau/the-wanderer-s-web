import portrait from "@/assets/portrait.jpg";
import { Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        {/* Text column */}
        <div className="animate-fade-up">
          <p className="tengwar-flourish text-xs mb-6">⟁ ANNON · EDHELLEN ⟁</p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            Lillian
            <br />
            <span className="text-primary">Bei Jia Lau</span>
          </h1>

          <div className="runic-divider my-8 max-w-md">
            <span className="text-xs tracking-[0.3em] uppercase">Sigil · I</span>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
            A wandering builder of small, considered things — code, words, and
            the occasional unwise side quest. Currently exploring the borderlands
            of research and software, with a fondness for maps both literal and
            imagined.
          </p>

          {/* Socials */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-foreground/20 text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-foreground/20 text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              CV (PDF)
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-foreground text-background text-sm hover:bg-foreground/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              Résumé (PDF)
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm">
            <Link to="/projects" className="link-underline inline-flex items-center gap-2 text-foreground/80">
              See current projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link to="/currently" className="link-underline inline-flex items-center gap-2 text-foreground/80">
              What I'm reading & watching <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Portrait column */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-4 bg-gradient-sigil rounded-full blur-2xl" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border shadow-rune">
            <img
              src={portrait}
              alt="Portrait of Lillian Bei Jia Lau"
              width={768}
              height={960}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" aria-hidden />
          </div>
          {/* Corner runes */}
          <span className="absolute -top-3 -left-3 grid h-8 w-8 place-items-center bg-background border border-foreground/30 text-xs font-display">⟁</span>
          <span className="absolute -bottom-3 -right-3 grid h-8 w-8 place-items-center bg-background border border-foreground/30 text-xs font-display">◇</span>
        </div>
      </div>
    </section>
  );
};

export default Home;

import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SigilBackdrop from "@/components/SigilBackdrop";

const navItems = [
  { to: "/", label: "Home", glyph: "I" },
  { to: "/projects", label: "Projects", glyph: "II" },
  { to: "/publications", label: "Publications", glyph: "III" },
  { to: "/currently", label: "Currently", glyph: "IV" },
];

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <SigilBackdrop />

      <header className="relative z-10 border-b border-border/60 backdrop-blur-sm bg-background/70">
        <div className="container flex items-center justify-between py-5">
          <Link to="/" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-foreground/30 font-display text-sm tracking-widest text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
              L
            </span>
            <span className="font-display text-base font-medium tracking-tight">
              Lillian Bei Jia Lau
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `link-underline text-sm tracking-wide transition-colors ${
                    isActive ? "text-accent" : "text-foreground/80 hover:text-foreground"
                  }`
                }
              >
                <span className="tengwar-flourish mr-2 text-[10px]">{item.glyph}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile nav */}
        <nav className="md:hidden border-t border-border/60 overflow-x-auto">
          <div className="container flex items-center gap-5 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-xs tracking-wide whitespace-nowrap ${
                    isActive ? "text-accent" : "text-foreground/70"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="relative z-10 flex-1">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-border/60 mt-24 bg-background/60 backdrop-blur-sm">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p className="tengwar-flourish">⟁ ◇ ⟁</p>
          <p>© {new Date().getFullYear()} Lillian Bei Jia Lau — "Not all those who wander are lost."</p>
          <p className="tengwar-flourish">⟁ ◇ ⟁</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

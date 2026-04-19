import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Главная" },
  { to: "/tours", label: "Туры" },
  { to: "/about", label: "О нас" },
  { to: "/contacts", label: "Контакты" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full gradient-sunset shadow-glow transition-smooth group-hover:scale-105">
            <span className="font-display text-lg font-bold text-primary-foreground">T</span>
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">Tripix</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                pathname === l.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">Войти</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full">
            <Link to="/tours">Подобрать тур</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background animate-fade-in-up">
          <nav className="container flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/80 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-3 rounded-full">
              <Link to="/tours" onClick={() => setOpen(false)}>Подобрать тур</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TourCard } from "@/components/TourCard";
import { TOURS, COUNTRIES } from "@/data/tours";
import { Button } from "@/components/ui/button";

const Tours = () => {
  const [params] = useSearchParams();
  const [country, setCountry] = useState(params.get("country") ?? "");
  const [budget, setBudget] = useState(params.get("budget") ?? "");
  const [type, setType] = useState<"all" | "hot" | "regular">("all");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    document.title = "Каталог туров — Tripix";
  }, []);

  const filtered = useMemo(() => {
    return TOURS.filter((t) => {
      if (country && t.country !== country) return false;
      if (budget && t.price > Number(budget)) return false;
      if (type !== "all" && t.type !== type) return false;
      if (duration === "short" && t.duration > 7) return false;
      if (duration === "long" && t.duration < 8) return false;
      return true;
    });
  }, [country, budget, type, duration]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <section className="border-b border-border/60 bg-gradient-to-b from-muted/60 to-background">
        <div className="container py-14">
          <span className="text-sm font-medium uppercase tracking-wider text-tangerine">Каталог</span>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-balance">
            Туры Tripix
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Подберите путешествие по стране, бюджету и длительности — или позвольте удивить вас горящим предложением.
          </p>
        </div>
      </section>

      <section className="container py-10">
        <div className="rounded-3xl bg-card p-5 md:p-6 shadow-soft grid gap-4 md:grid-cols-4">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">Страна</label>
            <select value={country} onChange={(e) => setCountry(e.target.value)}
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Любая</option>
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">Бюджет</label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Любой</option>
              <option value="400000">до 400 000 ₸</option>
              <option value="700000">до 700 000 ₸</option>
              <option value="1000000">до 1 000 000 ₸</option>
              <option value="2000000">до 2 000 000 ₸</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">Длительность</label>
            <select value={duration} onChange={(e) => setDuration(e.target.value)}
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Любая</option>
              <option value="short">До 7 ночей</option>
              <option value="long">8+ ночей</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">Тип</label>
            <div className="flex h-11 rounded-xl bg-muted p-1">
              {(["all","hot","regular"] as const).map((t) => (
                <button key={t} onClick={() => setType(t)}
                  className={`flex-1 rounded-lg text-xs font-semibold transition-smooth ${
                    type === t ? "bg-card shadow-soft text-foreground" : "text-muted-foreground"
                  }`}>
                  {t === "all" ? "Все" : t === "hot" ? "Горящие" : "Обычные"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Найдено: <span className="font-semibold text-foreground">{filtered.length}</span></p>
          {(country || budget || duration || type !== "all") && (
            <Button variant="ghost" size="sm" onClick={() => { setCountry(""); setBudget(""); setDuration(""); setType("all"); }}>
              Сбросить фильтры
            </Button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-3xl bg-muted/40 p-16 text-center">
            <p className="font-display text-2xl">Ничего не нашлось</p>
            <p className="mt-2 text-muted-foreground">Попробуйте изменить фильтры</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => <TourCard key={t.id} tour={t} />)}
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
};

export default Tours;

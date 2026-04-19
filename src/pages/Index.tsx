import { Link } from "react-router-dom";
import { ArrowRight, Plane, ShieldCheck, Sparkles, Headphones, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TourCard } from "@/components/TourCard";
import { TOURS, COUNTRIES } from "@/data/tours";
import { useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=85&auto=format&fit=crop";

const features = [
  { icon: ShieldCheck, title: "Гарантия лучшей цены", text: "Найдёте дешевле — вернём разницу и подарим страховку." },
  { icon: Headphones, title: "Поддержка 24/7", text: "Менеджер на связи в WhatsApp и Telegram всю поездку." },
  { icon: Sparkles, title: "Проверенные отели", text: "Каждый отель посещает наша команда до старта продаж." },
  { icon: Plane, title: "Прямые контракты", text: "Работаем напрямую с операторами — без переплат." },
];

const Index = () => {
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState("");
  const hot = TOURS.filter((t) => t.type === "hot").slice(0, 6);
  const popular = TOURS.slice(0, 9);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Тропический пляж с пальмами"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-olive/70 via-tangerine/40 to-primary/50" />
        </div>

        <div className="relative container py-20 md:py-32">
          <div className="max-w-3xl text-primary-foreground animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
              <Sparkles className="h-3.5 w-3.5" /> Сезон 2026 уже открыт
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] text-balance">
              Туры, в которые <em className="not-italic text-sun">влюбляются</em> с первого взгляда.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
              Tripix собирает путешествия, которые помнятся годами — от рисовых террас Бали до закатов Санторини.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full text-base h-12 px-7 shadow-glow">
                <Link to="/tours">Выбрать тур <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base h-12 px-7 bg-primary-foreground/10 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                <Link to="/about">О нас</Link>
              </Button>
            </div>
          </div>

          {/* Search card */}
          <div className="relative mt-12 rounded-3xl bg-card/95 backdrop-blur p-5 md:p-6 shadow-card animate-fade-in-up">
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">Страна</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Любая</option>
                  {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">Бюджет до</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Любой</option>
                  <option value="400000">до 400 000 ₸</option>
                  <option value="700000">до 700 000 ₸</option>
                  <option value="1000000">до 1 000 000 ₸</option>
                </select>
              </div>
              <Button asChild size="lg" className="h-11 rounded-xl md:self-end">
                <Link
                  to={`/tours?country=${encodeURIComponent(country)}&budget=${budget}`}
                  className="flex items-center gap-2"
                >
                  <Search className="h-4 w-4" /> Найти тур
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* HOT TOURS */}
      <section className="container py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-tangerine">Горящие туры</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-balance">
              Уезжайте в этом сезоне
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/tours">Все туры <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hot.map((t) => <TourCard key={t.id} tour={t} />)}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-muted/40 border-y border-border/60">
        <div className="container py-20">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-wider text-tangerine">Почему Tripix</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-balance">
              Спокойствие важнее любой акции.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl bg-card p-7 shadow-soft hover:shadow-card transition-smooth">
                <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-sea text-olive-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR */}
      <section className="container py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-tangerine">Популярные направления</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-balance">
              Куда едут наши клиенты
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popular.map((t) => <TourCard key={t.id} tour={t} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-sunset p-10 md:p-16 shadow-card">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-sun/30 blur-2xl" />
          <div className="relative max-w-2xl text-primary-foreground">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
              Не нашли свой идеальный тур?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Расскажите менеджеру о мечте — мы соберём индивидуальный маршрут за 24 часа.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 h-12 px-7">
              <Link to="/contacts">Написать менеджеру <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;

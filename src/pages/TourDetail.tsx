import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TOURS, formatPrice } from "@/data/tours";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Star, Plane, Utensils, CreditCard, Flame, ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";

const TourDetail = () => {
  const { id } = useParams();
  const tour = TOURS.find((t) => String(t.id) === id);

  useEffect(() => {
    if (tour) document.title = `${tour.name} — Tripix`;
  }, [tour]);

  if (!tour) return <NotFound />;

  const fmtDate = (d: string) =>
    new Date(d).toLocaleDateString("ru-RU", { day: "numeric", month: "long" });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <section className="container pt-8">
        <Link to="/tours" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
          <ArrowLeft className="h-4 w-4" /> Назад к каталогу
        </Link>
      </section>

      <section className="container pt-6">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[480px] shadow-card">
            <img src={tour.image} alt={tour.name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-olive/60 via-transparent to-transparent" />
            {tour.type === "hot" && (
              <span className="absolute top-5 left-5 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow">
                <Flame className="h-3.5 w-3.5" /> Горящий тур
              </span>
            )}
            <div className="absolute bottom-5 left-5 right-5 text-primary-foreground">
              <div className="inline-flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" /> {tour.country} · {tour.city}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase tracking-wider text-tangerine">{tour.operator}</span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold leading-tight text-balance">
              {tour.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-sun text-sun" /> {tour.stars} звёзд</span>
              <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {tour.duration} дней</span>
              <span className="inline-flex items-center gap-1"><Utensils className="h-4 w-4" /> {tour.board}</span>
              <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> Осталось {tour.slots} мест</span>
            </div>

            <p className="mt-5 text-base text-foreground/80 leading-relaxed">
              {tour.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-muted/60 p-4">
                <div className="text-xs text-muted-foreground">Вылет</div>
                <div className="mt-1 font-semibold">{fmtDate(tour.startDate)}</div>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <div className="text-xs text-muted-foreground">Возврат</div>
                <div className="mt-1 font-semibold">{fmtDate(tour.endDate)}</div>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4">
                <div className="text-xs text-muted-foreground">Отель</div>
                <div className="mt-1 font-semibold">{tour.hotel}</div>
              </div>
              <div className="rounded-2xl bg-muted/60 p-4 inline-flex items-start gap-2">
                <Plane className="h-4 w-4 mt-0.5 text-tangerine" />
                <div>
                  <div className="text-xs text-muted-foreground">Вылет из</div>
                  <div className="mt-1 font-semibold">Астана</div>
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-3xl gradient-sunset p-6 text-primary-foreground shadow-glow">
              <div className="flex items-end justify-between">
                <div>
                  {tour.oldPrice && (
                    <div className="text-sm line-through text-primary-foreground/70">{formatPrice(tour.oldPrice)}</div>
                  )}
                  <div className="font-display text-4xl font-bold">{formatPrice(tour.price)}</div>
                  <div className="text-sm text-primary-foreground/80">за человека</div>
                </div>
                {tour.installment && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    <CreditCard className="h-3.5 w-3.5" /> Рассрочка 0-0-12
                  </span>
                )}
              </div>
              <Button asChild size="lg" className="mt-5 w-full rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 h-12">
                <Link to={`/book/${tour.id}`}>Забронировать тур</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="font-display text-3xl font-bold mb-6">Что входит</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Перелёт эконом-класса в обе стороны",
            "Проживание в отеле уровня " + tour.stars + "★",
            "Питание: " + tour.board.toLowerCase(),
            "Трансфер аэропорт — отель — аэропорт",
            "Базовая медицинская страховка",
            "Сопровождение менеджера в чате 24/7",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-card p-5 shadow-soft">
              <div className="h-2 w-10 rounded-full gradient-sunset mb-3" />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default TourDetail;

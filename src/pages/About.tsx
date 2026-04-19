import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Award, Globe2, Heart, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "12 000+", label: "довольных путешественников" },
  { icon: Globe2, value: "47", label: "направлений в каталоге" },
  { icon: Award, value: "11 лет", label: "на рынке Казахстана" },
  { icon: Heart, value: "4.9 / 5", label: "средняя оценка" },
];

const About = () => {
  useEffect(() => { document.title = "О Tripix — туроператор из Астаны"; }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <section className="container py-16 md:py-24">
        <span className="text-sm font-medium uppercase tracking-wider text-tangerine">О Tripix</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold text-balance max-w-3xl leading-[1.05]">
          Мы делаем путешествия, которые остаются с вами навсегда.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Tripix — это команда из 18 человек, влюблённых в путешествия. С 2014 года мы помогаем казахстанцам
          открывать мир: от первых семейных туров до медовых месяцев и рабочих ретритов.
        </p>
      </section>

      <section className="bg-muted/40 border-y border-border/60">
        <div className="container py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl bg-card p-6 text-center shadow-soft">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl gradient-sea text-olive-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 font-display text-3xl font-bold text-tangerine">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=85&auto=format&fit=crop"
            alt="Команда Tripix в путешествии"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight text-balance">
            Лично проверяем каждый отель
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Перед тем как добавить тур в каталог, наш специалист проводит две ночи в отеле, тестирует пляж,
            ресторан и сервис. Мы рассказываем то, чего не пишут на сайтах — какие номера лучше, где не шумно
            и куда сходить вечером.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Поэтому 8 из 10 клиентов возвращаются к нам за следующим путешествием.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TOURS, formatPrice } from "@/data/tours";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import NotFound from "./NotFound";

const Booking = () => {
  const { id } = useParams();
  const tour = TOURS.find((t) => String(t.id) === id);
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    passport: "",
    people: "1",
    payment: "card",
    comment: "",
  });

  useEffect(() => {
    if (tour) document.title = `Бронирование · ${tour.name} — Tripix`;
  }, [tour]);

  if (!tour) return <NotFound />;

  const total = tour.price * Number(form.people || "1");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.passport) {
      toast.error("Заполните ФИО, телефон и номер паспорта");
      return;
    }
    setDone(true);
    toast.success("Заявка отправлена! Менеджер свяжется в течение 30 минут.");
  };

  if (done) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <SiteHeader />
        <section className="container py-24 flex-1">
          <div className="max-w-xl mx-auto rounded-3xl bg-card p-10 text-center shadow-card">
            <div className="grid h-16 w-16 mx-auto place-items-center rounded-full gradient-sea text-olive-foreground">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold">Заявка принята!</h1>
            <p className="mt-3 text-muted-foreground">
              Мы отправили детали на <span className="text-foreground font-medium">{form.email || form.phone}</span>.
              Менеджер свяжется в течение 30 минут.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Button onClick={() => navigate("/tours")} variant="outline" className="rounded-full">К каталогу</Button>
              <Button onClick={() => navigate("/")} className="rounded-full">На главную</Button>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <section className="container pt-8">
        <Link to={`/tour/${tour.id}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
          <ArrowLeft className="h-4 w-4" /> К туру
        </Link>
      </section>

      <section className="container py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          <form onSubmit={submit} className="rounded-3xl bg-card p-7 md:p-9 shadow-soft">
            <h1 className="font-display text-3xl md:text-4xl font-bold">Бронирование</h1>
            <p className="mt-2 text-muted-foreground">Заполните данные — оплата позже, после подтверждения мест.</p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <Field label="ФИО" required>
                <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className={inputCls} placeholder="Иванов Иван" />
              </Field>
              <Field label="Телефон" required>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="+7 700 000 00 00" />
              </Field>
              <Field label="Email">
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="you@mail.com" />
              </Field>
              <Field label="Номер паспорта" required>
                <input value={form.passport} onChange={(e) => setForm({ ...form, passport: e.target.value })} className={inputCls} placeholder="N12345678" />
              </Field>
              <Field label="Кол-во человек">
                <select value={form.people} onChange={(e) => setForm({ ...form, people: e.target.value })} className={inputCls}>
                  {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </Field>
              <Field label="Способ оплаты">
                <select value={form.payment} onChange={(e) => setForm({ ...form, payment: e.target.value })} className={inputCls}>
                  <option value="card">Карта</option>
                  <option value="cash">Наличные</option>
                  <option value="bank_transfer">Банковский перевод</option>
                </select>
              </Field>
            </div>

            <Field label="Комментарий">
              <textarea value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} rows={4} className={inputCls + " resize-none"} placeholder="Особые пожелания, диета, тип номера…" />
            </Field>

            <Button type="submit" size="lg" className="mt-6 w-full rounded-full h-12">Отправить заявку</Button>
          </form>

          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-3xl overflow-hidden shadow-soft bg-card">
              <img src={tour.image} alt={tour.name} className="aspect-[4/3] object-cover w-full" />
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-tangerine font-medium">{tour.country}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">{tour.name}</h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground border-t border-border/60 pt-4">
                  <Row label="Отель" value={`${tour.hotel} · ${tour.stars}★`} />
                  <Row label="Длительность" value={`${tour.duration} дней`} />
                  <Row label="Питание" value={tour.board} />
                  <Row label="Цена за чел." value={formatPrice(tour.price)} />
                </div>
                <div className="mt-4 pt-4 border-t border-border/60 flex items-end justify-between">
                  <span className="text-sm text-muted-foreground">Итого</span>
                  <span className="font-display text-2xl font-bold text-tangerine">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

const inputCls = "w-full h-11 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary";

const Field = ({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) => (
  <label className="block">
    <span className="block text-xs font-medium text-muted-foreground mb-2">
      {label} {required && <span className="text-primary">*</span>}
    </span>
    {children}
  </label>
);

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between gap-3">
    <span>{label}</span>
    <span className="text-foreground font-medium text-right">{value}</span>
  </div>
);

export default Booking;

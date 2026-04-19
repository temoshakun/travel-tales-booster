import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  useEffect(() => { document.title = "Контакты — Tripix"; }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Введите имя и телефон");
      return;
    }
    toast.success("Спасибо! Мы свяжемся в течение часа.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <section className="container py-16 md:py-24">
        <span className="text-sm font-medium uppercase tracking-wider text-tangerine">Контакты</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold text-balance max-w-3xl leading-[1.05]">
          Поговорим о вашем следующем путешествии.
        </h1>
      </section>

      <section className="container pb-20 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          {[
            { icon: MapPin, title: "Офис", value: "Астана, пр. Кабанбай батыра, 11, 4 этаж" },
            { icon: Phone, title: "Телефон", value: "+7 700 191 7478" },
            { icon: Mail, title: "Email", value: "hello@tripix.kz" },
            { icon: Clock, title: "Часы работы", value: "Пн–Сб, 10:00–20:00" },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl bg-card p-6 shadow-soft flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-2xl gradient-sunset text-primary-foreground shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{c.title}</div>
                <div className="mt-1 font-medium">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={submit} className="rounded-3xl bg-card p-7 md:p-9 shadow-soft">
          <h2 className="font-display text-2xl font-bold">Напишите менеджеру</h2>
          <p className="mt-2 text-sm text-muted-foreground">Расскажите о мечте — соберём индивидуальный маршрут.</p>

          <label className="block mt-6">
            <span className="block text-xs font-medium text-muted-foreground mb-2">Имя</span>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </label>
          <label className="block mt-4">
            <span className="block text-xs font-medium text-muted-foreground mb-2">Телефон</span>
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </label>
          <label className="block mt-4">
            <span className="block text-xs font-medium text-muted-foreground mb-2">Сообщение</span>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
          </label>
          <Button type="submit" size="lg" className="mt-6 w-full rounded-full h-12">Отправить</Button>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contacts;

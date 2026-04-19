import { Link } from "react-router-dom";
import { Instagram, Send, Phone, Mail, MapPin } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="mt-24 border-t border-border/60 bg-olive text-olive-foreground">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-sunset">
              <span className="font-display text-lg font-bold text-primary-foreground">T</span>
            </span>
            <span className="font-display text-2xl font-bold">Tripix</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-olive-foreground/80 leading-relaxed">
            Подбираем туры мечты с 2014 года. Прямые контракты с отелями, поддержка менеджера 24/7
            и гарантия лучшей цены — всё, чтобы ваше путешествие началось ещё до вылета.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Меню</h4>
          <ul className="space-y-2 text-sm text-olive-foreground/80">
            <li><Link to="/tours" className="hover:text-sun transition-smooth">Каталог туров</Link></li>
            <li><Link to="/about" className="hover:text-sun transition-smooth">О компании</Link></li>
            <li><Link to="/contacts" className="hover:text-sun transition-smooth">Контакты</Link></li>
            <li><Link to="/login" className="hover:text-sun transition-smooth">Личный кабинет</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Офис в Астане</h4>
          <ul className="space-y-3 text-sm text-olive-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-sun" /> пр. Кабанбай батыра, 11</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-sun" /> +7 700 191 7478</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-sun" /> hello@tripix.kz</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-olive-foreground/10 hover:bg-primary transition-smooth">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Telegram" className="grid h-9 w-9 place-items-center rounded-full bg-olive-foreground/10 hover:bg-primary transition-smooth">
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-olive-foreground/15">
        <div className="container py-5 text-xs text-olive-foreground/60 flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Tripix. Все права защищены.</span>
          <span>Сделано с любовью к путешествиям ✦</span>
        </div>
      </div>
    </footer>
  );
};

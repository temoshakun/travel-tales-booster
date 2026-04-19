import { Link } from "react-router-dom";
import { Tour, formatPrice } from "@/data/tours";
import { Calendar, MapPin, Star, Flame } from "lucide-react";

export const TourCard = ({ tour }: { tour: Tour }) => {
  const discount = tour.oldPrice
    ? Math.round((1 - tour.price / tour.oldPrice) * 100)
    : 0;

  return (
    <Link
      to={`/tour/${tour.id}`}
      className="group block overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-card transition-smooth"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={`${tour.name} — фото`}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olive/60 via-transparent to-transparent" />

        {tour.type === "hot" && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
            <Flame className="h-3.5 w-3.5" /> Горящий
          </span>
        )}

        {discount > 0 && (
          <span className="absolute top-4 right-4 rounded-full bg-sun px-3 py-1 text-xs font-bold text-sun-foreground">
            −{discount}%
          </span>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-primary-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">{tour.country} · {tour.city}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl font-semibold leading-tight text-balance group-hover:text-primary transition-smooth line-clamp-2">
          {tour.name}
        </h3>

        <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-sun text-sun" /> {tour.stars}
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {tour.duration} дней
          </span>
          <span>·</span>
          <span>{tour.board}</span>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            {tour.oldPrice && (
              <div className="text-xs text-muted-foreground line-through">
                {formatPrice(tour.oldPrice)}
              </div>
            )}
            <div className="font-display text-2xl font-bold text-tangerine">
              {formatPrice(tour.price)}
            </div>
            <div className="text-xs text-muted-foreground">за человека</div>
          </div>
          <span className="rounded-full bg-accent/30 px-4 py-2 text-sm font-medium text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
            Подробнее →
          </span>
        </div>
      </div>
    </Link>
  );
};

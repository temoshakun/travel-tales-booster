export type Tour = {
  id: number;
  name: string;
  country: string;
  city: string;
  hotel: string;
  stars: number;
  price: number;
  oldPrice?: number;
  duration: number;
  startDate: string;
  endDate: string;
  slots: number;
  type: "hot" | "regular";
  image: string;
  description: string;
  board: string;
  operator: string;
  installment: boolean;
};

// Real destination photos from Unsplash (free to use)
export const TOURS: Tour[] = [
  {
    id: 1,
    name: "Бали — рисовые террасы и закаты Убуда",
    country: "Индонезия",
    city: "Убуд",
    hotel: "Komaneka at Bisma",
    stars: 5,
    price: 689000,
    oldPrice: 820000,
    duration: 10,
    startDate: "2026-05-12",
    endDate: "2026-05-22",
    slots: 6,
    type: "hot",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&auto=format&fit=crop",
    description:
      "Десять дней среди джунглей Убуда: йога на рассвете, рисовые террасы Тегаллаланг, храмы у воды и закаты на пляжах Семиньяка.",
    board: "Завтраки",
    operator: "Tripix Asia",
    installment: true,
  },
  {
    id: 2,
    name: "Мальдивы — пляжное бунгало на белом песке",
    country: "Мальдивы",
    city: "Атолл Баа",
    hotel: "Soneva Fushi",
    stars: 5,
    price: 1290000,
    oldPrice: 1490000,
    duration: 7,
    startDate: "2026-04-28",
    endDate: "2026-05-05",
    slots: 4,
    type: "hot",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80&auto=format&fit=crop",
    description:
      "Бирюзовая лагуна, плавающие завтраки, снорклинг с мантами и виллы прямо над водой. Идеальный медовый месяц.",
    board: "Полупансион",
    operator: "Tripix Premium",
    installment: true,
  },
  {
    id: 3,
    name: "Санторини — белые улочки и кальдера",
    country: "Греция",
    city: "Ия",
    hotel: "Andronis Boutique",
    stars: 5,
    price: 745000,
    duration: 8,
    startDate: "2026-06-04",
    endDate: "2026-06-12",
    slots: 8,
    type: "hot",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80&auto=format&fit=crop",
    description:
      "Знаменитые закаты Ии, винодельни Ассиртико, прогулки на катере вдоль вулкана и ужины на террасах с видом на Эгейское море.",
    board: "Завтраки",
    operator: "Tripix Europe",
    installment: false,
  },
  {
    id: 4,
    name: "Дубай — небоскрёбы, дюны и сафари",
    country: "ОАЭ",
    city: "Дубай",
    hotel: "Atlantis The Palm",
    stars: 5,
    price: 520000,
    oldPrice: 610000,
    duration: 6,
    startDate: "2026-05-02",
    endDate: "2026-05-08",
    slots: 12,
    type: "hot",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop",
    description:
      "Пальм-Джумейра, Бурдж-Халифа, аквапарк Aquaventure, ужин в пустыне с танцем тануры и шопинг в Dubai Mall.",
    board: "Всё включено",
    operator: "Tripix Gulf",
    installment: true,
  },
  {
    id: 5,
    name: "Япония — сакура Киото и неоновый Токио",
    country: "Япония",
    city: "Токио / Киото",
    hotel: "Hoshinoya Kyoto",
    stars: 5,
    price: 980000,
    duration: 11,
    startDate: "2026-04-01",
    endDate: "2026-04-12",
    slots: 5,
    type: "regular",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80&auto=format&fit=crop",
    description:
      "Цветение сакуры в Маруяме, бамбуковая роща Арасияма, чайная церемония и Сибуя ночью. Перелёт скоростным поездом включён.",
    board: "Завтраки",
    operator: "Tripix Asia",
    installment: true,
  },
  {
    id: 6,
    name: "Турция — Каппадокия и шары на рассвете",
    country: "Турция",
    city: "Гёреме",
    hotel: "Museum Hotel Cappadocia",
    stars: 5,
    price: 410000,
    oldPrice: 495000,
    duration: 7,
    startDate: "2026-05-18",
    endDate: "2026-05-25",
    slots: 10,
    type: "hot",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1200&q=80&auto=format&fit=crop",
    description:
      "Полёт на воздушном шаре над лунными долинами, отель в скале, подземный город Деринкую и винодельни Юргюпа.",
    board: "Завтраки",
    operator: "Tripix Europe",
    installment: true,
  },
  {
    id: 7,
    name: "Италия — Амальфитанское побережье",
    country: "Италия",
    city: "Позитано",
    hotel: "Le Sirenuse",
    stars: 5,
    price: 870000,
    duration: 9,
    startDate: "2026-06-15",
    endDate: "2026-06-24",
    slots: 6,
    type: "regular",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1200&q=80&auto=format&fit=crop",
    description:
      "Лимонные рощи, обед в Равелло, прогулка на яхте до Капри и пасты под звёздами на террасах Позитано.",
    board: "Полупансион",
    operator: "Tripix Premium",
    installment: false,
  },
  {
    id: 8,
    name: "Таиланд — Пхукет и острова Пхи-Пхи",
    country: "Таиланд",
    city: "Пхукет",
    hotel: "The Surin Phuket",
    stars: 5,
    price: 590000,
    oldPrice: 695000,
    duration: 10,
    startDate: "2026-05-08",
    endDate: "2026-05-18",
    slots: 14,
    type: "hot",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80&auto=format&fit=crop",
    description:
      "Бирюзовые бухты Пхи-Пхи, тайский массаж, рынки Патонга и круиз на длиннохвостой лодке к острову Джеймса Бонда.",
    board: "Всё включено",
    operator: "Tripix Asia",
    installment: true,
  },
  {
    id: 9,
    name: "Грузия — Тбилиси, Казбеги и Кахетия",
    country: "Грузия",
    city: "Тбилиси",
    hotel: "Stamba Hotel",
    stars: 5,
    price: 285000,
    duration: 6,
    startDate: "2026-05-20",
    endDate: "2026-05-26",
    slots: 16,
    type: "regular",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80&auto=format&fit=crop",
    description:
      "Старый Тбилиси, серные бани, монастырь Гергети у подножия Казбека и винные погреба Кахетии с дегустациями.",
    board: "Завтраки",
    operator: "Tripix Caucasus",
    installment: true,
  },
];

export const COUNTRIES = Array.from(new Set(TOURS.map((t) => t.country)));

export function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₸";
}

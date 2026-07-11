export interface Duration {
  label: string;
  mins: number;
  price: number;
}

export interface Treatment {
  id: string;
  name: string;
  cat: string;
  desc: string;
  img: string;
  durations: Duration[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: "t1",
    name: "Deep tissue massage",
    cat: "Massage",
    desc: "Slow, firm work on whatever the desk did to you.",
    img: "/img/t1.webp",
    durations: [
      { label: "60 min", mins: 60, price: 85 },
      { label: "90 min", mins: 90, price: 115 },
    ],
  },
  {
    id: "t2",
    name: "Swedish massage",
    cat: "Massage",
    desc: "Lighter pressure, built for switching off.",
    img: "/img/t2.webp",
    durations: [
      { label: "60 min", mins: 60, price: 75 },
      { label: "90 min", mins: 90, price: 105 },
    ],
  },
  {
    id: "t3",
    name: "Signature facial",
    cat: "Face",
    desc: "Cleanse, steam, massage, and a mask matched to your skin.",
    img: "/img/t3.webp",
    durations: [{ label: "50 min", mins: 50, price: 75 }],
  },
  {
    id: "t4",
    name: "Brightening facial",
    cat: "Face",
    desc: "Vitamin-led treatment for tired, dull skin.",
    img: "/img/t4.webp",
    durations: [{ label: "50 min", mins: 50, price: 85 }],
  },
  {
    id: "t5",
    name: "Thermal suite pass",
    cat: "Suite",
    desc: "Sauna, steam, plunge, and the 34° pool. Three hours.",
    img: "/img/hero.webp",
    durations: [{ label: "3 hrs", mins: 180, price: 45 }],
  },
  {
    id: "t6",
    name: "The Reset — half day",
    cat: "Packages",
    desc: "Massage + facial + suite access. Our most booked.",
    img: "/img/sauna.webp",
    durations: [{ label: "Half day", mins: 240, price: 180 }],
  },
  {
    id: "t7",
    name: "Hot stone massage",
    cat: "Massage",
    desc: "Heat does half the work before hands do the rest.",
    img: "/img/t7.webp",
    durations: [{ label: "75 min", mins: 75, price: 98 }],
  },
  {
    id: "t8",
    name: "Scalp & shoulders",
    cat: "Massage",
    desc: "The tension triangle, dealt with in half an hour.",
    img: "/img/t8.webp",
    durations: [{ label: "30 min", mins: 30, price: 48 }],
  },
];

export const CATEGORIES = ["All", "Massage", "Face", "Suite", "Packages"];

export const DAY_DEFS = [
  { dow: "MON", num: "13" },
  { dow: "TUE", num: "14" },
  { dow: "WED", num: "15" },
  { dow: "THU", num: "16" },
  { dow: "FRI", num: "17" },
  { dow: "SAT", num: "18" },
  { dow: "SUN", num: "19" },
];

export interface Pass {
  tag: string;
  name: string;
  desc: string;
  priceStr: string;
  treatmentId: string;
  dark: boolean;
}

export const PASSES: Pass[] = [
  {
    tag: "MOST FLEXIBLE",
    name: "Thermal suite pass",
    desc: "Three hours of sauna, steam, plunge, and pool. Towels and robe included.",
    priceStr: "£45",
    treatmentId: "t5",
    dark: false,
  },
  {
    tag: "MOST BOOKED",
    name: "The Reset — half day",
    desc: "A 60-minute massage, signature facial, and full suite access with a quiet-room hour.",
    priceStr: "£180",
    treatmentId: "t6",
    dark: true,
  },
  {
    tag: "FOR TWO",
    name: "Side by side",
    desc: "Two massages in the double room, then the suite to yourselves for the first hour.",
    priceStr: "£210",
    treatmentId: "t1",
    dark: false,
  },
];

export const gbp = (n: number): string => "£" + n;
export const metaOf = (t: Treatment): string =>
  t.durations.map((d) => d.label).join(" / ") + " · from " + gbp(t.durations[0]!.price);

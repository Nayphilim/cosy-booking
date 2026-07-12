import { Component, computed, signal, ViewEncapsulation } from "@angular/core";
import { CATEGORIES, DAY_DEFS, gbp, metaOf, PASSES, TREATMENTS } from "./data";
import { dayFreeCount, slotFree, SLOT_TIMES } from "./availability";

type Page = "home" | "treatments" | "passes" | "booking";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.html",
  styleUrl: "./app.css",
  encapsulation: ViewEncapsulation.None,
})
export class App {
  readonly TREATMENTS = TREATMENTS;
  readonly CATEGORIES = CATEGORIES;
  readonly PASSES = PASSES;
  readonly DAY_DEFS = DAY_DEFS;
  readonly SLOT_TIMES = SLOT_TIMES;
  readonly gbp = gbp;
  readonly metaOf = metaOf;
  readonly slotFree = slotFree;

  readonly reviews = [
    {
      body: "Booked the half-day Reset for my birthday. The thermal suite alone was worth it — quietest afternoon I've had in months.",
      who: "Hannah M.",
      meta: "The Reset · June",
    },
    {
      body: "Deep tissue with Marco was exactly the right amount of firm. Easy to book, no upselling, out feeling like a new spine.",
      who: "David R.",
      meta: "Deep tissue · June",
    },
    {
      body: "The pool at 34° is a genuinely lovely touch. Came for a facial, stayed three hours. Will be back before summer's out.",
      who: "Priya S.",
      meta: "Signature facial · May",
    },
  ];

  readonly page = signal<Page>("home");
  readonly cat = signal("All");
  readonly step = signal(1);
  readonly treatmentId = signal("t1");
  readonly durationIdx = signal(0);
  readonly dayIdx = signal<number | null>(null);
  readonly slot = signal<string | null>(null);
  readonly bookingRef = signal<string | null>(null);

  readonly treatment = computed(
    () => TREATMENTS.find((t) => t.id === this.treatmentId()) ?? TREATMENTS[0]!,
  );
  readonly duration = computed(() => {
    const t = this.treatment();
    return t.durations[Math.min(this.durationIdx(), t.durations.length - 1)]!;
  });
  readonly filtered = computed(() =>
    this.cat() === "All" ? TREATMENTS : TREATMENTS.filter((t) => t.cat === this.cat()),
  );
  readonly canContinue = computed(() => this.dayIdx() !== null && this.slot() !== null);
  readonly dateLabel = computed(() => {
    const i = this.dayIdx();
    if (i === null) return "—";
    const d = DAY_DEFS[i]!;
    return d.dow[0] + d.dow.slice(1).toLowerCase() + " " + d.num + " Jul";
  });
  readonly suiteIncluded = computed(
    () => this.duration().mins >= 60 && this.treatment().id !== "t5",
  );

  readonly homeTreatments = computed(() => {
    const next = ["today 16:00", "today 17:30", "tomorrow 9:00"];
    return [TREATMENTS[0]!, TREATMENTS[2]!, TREATMENTS[4]!].map((t, i) => ({ t, next: next[i]! }));
  });

  readonly days = computed(() =>
    DAY_DEFS.map((d, i) => {
      const free = dayFreeCount(i);
      return { ...d, i, free, avail: free === 0 ? "Full" : free + " slots" };
    }),
  );

  private scrollTop() {
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }

  go(page: Page) {
    this.page.set(page);
    this.scrollTop();
  }

  startBooking(id?: string) {
    if (id) this.treatmentId.set(id);
    this.durationIdx.set(0);
    this.dayIdx.set(null);
    this.slot.set(null);
    this.step.set(1);
    this.go("booking");
  }

  selectTreatment(id: string) {
    this.treatmentId.set(id);
    this.durationIdx.set(0);
    this.slot.set(null);
  }

  selectDay(i: number) {
    if (dayFreeCount(i) === 0) return;
    this.dayIdx.set(i);
    this.slot.set(null);
  }

  selectSlot(time: string, i: number) {
    if (slotFree(this.dayIdx(), i)) this.slot.set(time);
  }

  toStep(n: number) {
    if (n === 3 && !this.canContinue()) return;
    this.step.set(n);
  }

  confirm() {
    this.bookingRef.set("SW-" + (1000 + Math.floor(Math.random() * 9000)));
    this.step.set(4);
  }
}

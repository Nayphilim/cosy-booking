import { describe, expect, it } from "vitest";
import { dayFreeCount, slotFree, SLOT_TIMES } from "./availability";

describe("slotFree", () => {
  it("returns false when no day is selected", () => {
    expect(slotFree(null, 0)).toBe(false);
  });
  it("blocks the first two Saturday slots (day index 5)", () => {
    expect(slotFree(5, 0)).toBe(false);
    expect(slotFree(5, 1)).toBe(false);
  });
  it("is deterministic for a given day/slot", () => {
    expect(slotFree(0, 0)).toBe(slotFree(0, 0));
  });
});

describe("dayFreeCount", () => {
  it("counts free slots within the day's eight times", () => {
    const n = dayFreeCount(2);
    expect(n).toBeGreaterThanOrEqual(0);
    expect(n).toBeLessThanOrEqual(SLOT_TIMES.length);
  });
});

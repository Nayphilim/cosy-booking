export const SLOT_TIMES = ["9:00", "10:30", "12:00", "13:30", "15:00", "16:00", "17:30", "19:00"];

export function slotFree(dayIdx: number | null, slotIdx: number): boolean {
  if (dayIdx === null) return false;
  return (dayIdx * 7 + slotIdx * 3) % 5 !== 0 && !(dayIdx === 5 && slotIdx < 2);
}

export function dayFreeCount(dayIdx: number): number {
  return SLOT_TIMES.reduce((n, _, i) => n + (slotFree(dayIdx, i) ? 1 : 0), 0);
}

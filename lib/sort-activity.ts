import { Activity } from "@/types/activity";

export function sortByDate(a1: Activity, a2: Activity) {
  const a1Date = Date.parse(a1.date);
  const a2Date = Date.parse(a2.date);
  if (a1Date < a2Date) {
    return -1;
  } else if (a1Date > a2Date) {
    return 1;
  } else {
    return 0;
  }
}

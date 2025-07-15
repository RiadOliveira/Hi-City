import { DayPeriod } from 'types/DayPeriod';

export function getDayPeriod(date: Date): DayPeriod {
  const hours = date.getHours();

  if (hours < 6) return 'Night';
  if (hours < 13) return 'Morning';
  if (hours < 18) return 'Afternoon';
  return 'Evening';
}

import { DayPeriod } from 'types/DayPeriod';

export function getPeriodMessage(period: DayPeriod): `Good ${DayPeriod}!` {
  return `Good ${period}!`;
}

import { DayPeriod } from 'types/DayPeriod';

export function getPeriodMessage(period: DayPeriod): string {
  if (period === 'afternoon') return 'Boa Tarde';
  if (period === 'evening') return 'Boa Noite';
  if (period === 'night') return 'Boa Madrugada';
  return 'Bom Dia';
}

import { DayPeriod } from './getDayPeriod';

const getMessage = (period: DayPeriod): string => {
  if (period === 'afternoon') return 'Boa Tarde';
  if (period === 'evening') return 'Boa Noite';
  if (period === 'night') return 'Boa Madrugada';
  return 'Bom Dia';
};

export default getMessage;

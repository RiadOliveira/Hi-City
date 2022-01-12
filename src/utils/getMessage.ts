import { DayPeriod } from './getDayPeriod';

const getMessage = (period: DayPeriod): string => {
  switch (period) {
    case 'afternoon':
      return 'Boa Tarde';
    case 'evening':
      return 'Boa Noite';
    case 'night':
      return 'Boa Madrugada';
    default:
      return 'Bom Dia';
  }
};

export default getMessage;

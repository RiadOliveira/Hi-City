type DayPeriod = 'day' | 'afternoon' | 'evening' | 'night';

const getDayPeriod = (date: Date): DayPeriod => {
  const hours = date.getHours();

  if (hours < 6) return 'night';
  if (hours < 13) return 'day';
  if (hours < 18) return 'afternoon';
  return 'evening';
};

export { getDayPeriod };
export type { DayPeriod };

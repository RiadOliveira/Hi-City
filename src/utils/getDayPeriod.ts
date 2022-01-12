type DayPeriod = 'day' | 'afternoon' | 'evening' | 'night';

const getDayPeriod = (date: Date): DayPeriod => {
  const hours = date.getHours();

  switch (true) {
    case hours < 6:
      return 'night';
    case hours < 13:
      return 'day';
    case hours < 18:
      return 'afternoon';
    default:
      return 'evening';
  }
};

export { getDayPeriod };
export type { DayPeriod };

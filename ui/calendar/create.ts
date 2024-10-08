import { DateInput } from '../../type/date';

export type CalendarDateType = {
  year: number;
  month: number;
  date: number;
  weekday: number;
  origin: Date;
};

export function createCalendar({
  year,
  month = 1,
  row = 6,
}: {
  year: number;
  month?: number;
  row?: number;
}): CalendarDateType[] {
  if (typeof year === 'number' && typeof month === 'number') {
    if (month < 1 || month > 12) {
      throw new Error('Month must be between 1 and 12');
    }
    const currentDate = new Date(year, month - 1);
    return generateCalendarForMonth(currentDate, row);
  }
  throw new Error('Invalid arguments');
}

export function generateCalendarForMonth(date: Date, row = 6): CalendarDateType[] {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const firstWeekDay = firstDay.getDay();
  const totalDays = row * 7;
  return Array.from({ length: totalDays }, (_, index) => {
    const currentDate = new Date(year, month, -firstWeekDay + 1 + index);
    return {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      date: currentDate.getDate(),
      weekday: currentDate.getDay(),
      origin: currentDate,
    };
  });
}

export const dateParser = (input: DateInput) => {
  if (input instanceof Date) return input;
  return new Date(input);
};

const paddingZeroTwo = (value: string | number) =>
  (typeof value === 'number' ? value.toString() : value).padStart(2, '0');

export const createDateValue = (date: Date | string | number, hasTime?: boolean) => {
  const parsedDate = dateParser(date);
  const dateString = `${parsedDate.getFullYear()}-${paddingZeroTwo(parsedDate.getMonth() + 1)}-${paddingZeroTwo(
    parsedDate.getDate(),
  )}`;
  if (!hasTime) return dateString;
  return `${dateString} ${paddingZeroTwo(parsedDate.getHours())}:${paddingZeroTwo(parsedDate.getMinutes())}`;
};

// 18:00 -> 1800

export function convertHoursStringToMinutes(hourstring: string) {
  const [hours, minutes] = hourstring.split(":").map(Number);

  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
}

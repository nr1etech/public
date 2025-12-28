export function isoDateToFormattedUtc(isoDate: string): string {
  const date = new Date(isoDate);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // convert 0 → 12 for 12-hour clock
  const minutesStr = minutes.toString().padStart(2, '0');

  return `${month} ${day}, ${year} ${hours}:${minutesStr} ${ampm} UTC`;
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: 'short', // “Jan”, “Feb”, etc.
    day: 'numeric', // “1”, “2”, etc.
    year: 'numeric', // “2020”
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

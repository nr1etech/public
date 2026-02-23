import {component$, useSignal, useVisibleTask$} from '@builder.io/qwik';
import {formatTimeZoneDateShort} from '@nr1e/commons/lang';

export interface FormatDateProps {
  timeZone?: string | null;
  locale?: string | null;
  date: Date | string | null;
}

export const FormatDate = component$((props: FormatDateProps) => {
  const date = useSignal<string | null>(null);

  if (!props.date) return null;

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (props.date) {
      let timeZone: string | null | undefined = props.timeZone;
      if (!props.timeZone) {
        timeZone = localStorage.getItem('timezone');
        if (!timeZone || timeZone === 'auto') {
          timeZone = null;
        }
      }
      date.value = formatTimeZoneDateShort(
        props.date,
        timeZone ?? undefined,
        props.locale ?? undefined,
      );
    }
  });

  return <>{date.value}</>;
});

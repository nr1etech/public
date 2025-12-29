import {component$, useSignal, useVisibleTask$} from '@builder.io/qwik';

/**
 * Properties for PaceBar.
 */
export interface PaceBarProps {
  /**
   * The value of the progress between 1 and 100.
   * Setting this to undefined will hide the progress bar.
   * Setting this to -1 to show an indeterminate indicator.
   */
  value?: number;

  /**
   * Any additional classes to apply to the progress bar.
   * Ex. progress-accent
   */
  class?: string;

  /**
   * Whether the progress bar should be rendered as an asymptotic progress bar.
   */
  asymptotic?: boolean;

  /**
   * The easing value to use. Smaller is slower, larger is faster. Default is 0.004.
   */
  easing?: number;

  /**
   * The interval in milliseconds to update the progress bar. Default is 10.
   */
  intervalMs?: number;
}

export const PaceBar = component$((props: PaceBarProps) => {
  const value = useSignal(props.value);

  useVisibleTask$(({cleanup}) => {
    if (props.value && props.value != -1 && props.asymptotic) {
      const easing = props.easing ?? 0.004;
      const intervalMs = props.intervalMs ?? 10; // update frequency
      const id = setInterval(() => {
        const delta = (100 - (value.value ?? 0)) * easing;
        // Stop when changes are tiny (still never hits 100)
        if (delta < 0.0001) {
          clearInterval(id);
          return;
        }
        value.value = (value.value ?? 0) + delta;
        // Safety clamp: ensure it never becomes 100 due to rounding, etc.
        if (value.value >= 100) value.value = 99.999999;
      }, intervalMs);
      cleanup(() => clearInterval(id));
    }
  });
  return (
    <progress
      class={`progress w-full ${value.value ? 'block' : 'hidden'} h-0.5 leading-none ${props.class}`}
      value={value.value && value.value < 0 ? undefined : value.value}
      max={100}
    ></progress>
  );
});

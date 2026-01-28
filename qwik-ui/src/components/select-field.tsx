import {
  component$,
  QRL,
  Signal,
  Slot,
  useSignal,
  useTask$,
} from '@builder.io/qwik';

export interface SelectFieldProps {
  id?: string;
  label: string;
  name?: string;
  error?: string | Signal<string | undefined>;
  onChange$?: QRL<
    (event: Event, value: string, error: Signal<string | undefined>) => void
  >;
  onBlur$?: QRL<
    (
      event: FocusEvent,
      value: string,
      error: Signal<string | undefined>,
    ) => void
  >;
  onEvent$?: QRL<
    (
      type: 'blur' | 'change',
      event: Event,
      value: string,
      error: Signal<string | undefined>,
    ) => void
  >;
}

export const SelectField = component$((props: SelectFieldProps) => {
  const error = useSignal<string | undefined>(
    typeof props.error === 'string' ? props.error : props.error?.value,
  );
  useTask$(({track}) => {
    if (props.error && typeof props.error !== 'string') {
      track(() => error.value);
      if (error.value !== props.error?.value) {
        props.error.value = error.value;
      }
    }
  });
  useTask$(({track}) => {
    if (props.error && typeof props.error !== 'string') {
      track(() => (props.error as Signal).value);
      if (props.error && error.value !== props.error.value) {
        error.value = props.error.value;
      }
    }
  });
  return (
    <div class="fieldset">
      <label class="label" {...(props.id && {for: props.id})}>
        <span class="label-text">{props.label}</span>
      </label>
      <select
        {...(props.name && {name: props.name})}
        {...(props.id && {id: props.id})}
        class={`select ${error.value ? 'select-error' : ''}`}
        onChange$={(e) => {
          if (props.onChange$)
            props.onChange$(e, (e.target as HTMLSelectElement).value, error);
          if (props.onEvent$)
            props.onEvent$(
              'change',
              e,
              (e.target as HTMLSelectElement).value,
              error,
            );
        }}
        onBlur$={(e) => {
          if (props.onBlur$)
            props.onBlur$(e, (e.target as HTMLSelectElement).value, error);
          if (props.onEvent$)
            props.onEvent$(
              'blur',
              e,
              (e.target as HTMLSelectElement).value,
              error,
            );
        }}
      >
        <Slot />
      </select>
      {error.value && <div class="text-error mt-1 text-xs">{error.value}</div>}
    </div>
  );
});

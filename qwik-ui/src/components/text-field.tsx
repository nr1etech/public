import {
  Slot,
  component$,
  QRL,
  Signal,
  useSignal,
  useTask$,
} from '@builder.io/qwik';

export interface TextFieldProps {
  id?: string;
  label: string;
  name?: string;
  value?: string | null;
  placeholder?: string;
  error?: string | Signal<string | undefined>;
  maxLength?: number;
  onBlur$?: QRL<
    (
      event: FocusEvent,
      value: string,
      error: Signal<string | undefined>,
    ) => void
  >;
  onInput$?: QRL<
    (
      event: InputEvent,
      value: string,
      error: Signal<string | undefined>,
    ) => void
  >;
  onEvent$?: QRL<
    (
      type: 'blur' | 'input',
      event: FocusEvent | InputEvent,
      value: string,
      error: Signal<string | undefined>,
    ) => void
  >;
}

export const TextField = component$((props: TextFieldProps) => {
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
      <label class={`input w-full ${error.value ? 'input-error' : ''}`}>
        <Slot name="left" />
        <input
          type="text"
          {...(props.id && {id: props.id})}
          {...(props.name && {name: props.name})}
          {...(props.value && {value: props.value})}
          class="placeholder:opacity-50"
          placeholder={props.placeholder}
          onBlur$={(e) => {
            if (props.onBlur$)
              props.onBlur$(e, (e.target as HTMLInputElement).value, error);
            if (props.onEvent$)
              props.onEvent$(
                'blur',
                e,
                (e.target as HTMLInputElement).value,
                error,
              );
          }}
          onInput$={(e) => {
            if (props.onInput$)
              props.onInput$(e, (e.target as HTMLInputElement).value, error);
            if (props.onEvent$)
              props.onEvent$(
                'input',
                e,
                (e.target as HTMLInputElement).value,
                error,
              );
          }}
        />
        <Slot name="right" />
      </label>
      {error.value && <div class="text-error mt-1 text-xs">{error.value}</div>}
    </div>
  );
});

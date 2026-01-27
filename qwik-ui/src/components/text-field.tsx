import {Slot, component$, QRL, useSignal, Signal} from '@builder.io/qwik';

export interface TextFieldProps {
  label: string;
  name?: string;
  placeholder?: string;
  error?: string;
  maxLength?: number;
  onBlur$?: QRL<
    (event: FocusEvent, error: Signal<string | undefined | null>) => void
  >;
  onInput$?: QRL<
    (event: InputEvent, error: Signal<string | undefined | null>) => void
  >;
}

export const TextField = component$((props: TextFieldProps) => {
  const error = useSignal<string | undefined | null>(props.error);
  return (
    <div class="fieldset">
      <label class="label">
        <span class="label-text">{props.label}</span>
      </label>
      <label class={`input w-full ${error.value ? 'input-error' : ''}`}>
        <Slot name="left" />
        <input
          type="text"
          {...(props.name && {name: props.name})}
          class="placeholder:opacity-50"
          placeholder={props.placeholder}
          onBlur$={(e) => props.onBlur$ && props.onBlur$(e, error)}
          onInput$={(e) => props.onInput$ && props.onInput$(e, error)}
        />
        <Slot name="right" />
      </label>
      {error.value && <div class="text-error mt-1 text-xs">{error.value}</div>}
    </div>
  );
});

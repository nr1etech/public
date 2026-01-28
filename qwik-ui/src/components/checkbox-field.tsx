import {component$, QRL, Signal, useSignal, useTask$} from '@builder.io/qwik';

export interface CheckboxFieldProps {
  id?: string;
  label: string;
  name?: string;
  checked?: boolean | Signal<boolean>;
  error?: string | Signal<string | undefined>;
  onClick$?: QRL<
    (event: Event, checked: boolean, error: Signal<string | undefined>) => void
  >;
}

export const CheckboxField = component$((props: CheckboxFieldProps) => {
  const error = useSignal<string | undefined>(
    typeof props.error === 'string' ? props.error : props.error?.value,
  );
  const checked = useSignal<boolean>(
    typeof props.checked === 'boolean'
      ? props.checked
      : (props.checked?.value ?? false),
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
  useTask$(({track}) => {
    if (props.checked && typeof props.checked !== 'boolean') {
      track(() => checked.value);
      if (checked.value !== props.checked?.value) {
        props.checked.value = checked.value;
      }
    }
  });
  useTask$(({track}) => {
    if (props.checked && typeof props.checked !== 'boolean') {
      track(() => (props.checked as Signal).value);
      if (props.checked && checked.value !== props.checked.value) {
        checked.value = props.checked.value;
      }
    }
  });
  return (
    <div class="fieldset">
      <label class="label" {...(props.id && {for: props.id})}>
        <input
          type="checkbox"
          {...(props.name && {name: props.name})}
          {...(props.id && {id: props.id})}
          checked={checked.value}
          class={`checkbox ${error.value ? 'checkbox-error' : ''}`}
          onClick$={(e) =>
            props.onClick$ &&
            props.onClick$(e, (e.target as HTMLInputElement).checked, error)
          }
        />
        {props.label}
      </label>
      {error.value && <div class="text-error mt-1 text-xs">{error.value}</div>}
    </div>
  );
});

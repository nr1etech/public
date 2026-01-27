import {component$, QRL, Signal, Slot, useSignal} from '@builder.io/qwik';

export interface SelectFieldProps {
  id?: string;
  label: string;
  name?: string;
  error?: string;
  onChange$?: QRL<
    (event: Event, value: string, error: Signal<string | undefined>) => void
  >;
}

export const SelectField = component$((props: SelectFieldProps) => {
  const error = useSignal<string | undefined>(props.error);
  return (
    <div class="fieldset">
      <label class="label" {...(props.id && {for: props.id})}>
        <span class="label-text">{props.label}</span>
      </label>
      <select
        {...(props.name && {name: props.name})}
        {...(props.id && {id: props.id})}
        class={`select ${error.value ? 'select-error' : ''}`}
        onChange$={(e) =>
          props.onChange$ &&
          props.onChange$(e, (e.target as HTMLSelectElement).value, error)
        }
      >
        <Slot />
      </select>
      {error.value && <div class="text-error mt-1 text-xs">{error.value}</div>}
    </div>
  );
});

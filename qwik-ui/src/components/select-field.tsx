import {component$, Slot} from '@builder.io/qwik';

export interface SelectFieldProps {
  id?: string;
  label: string;
  name?: string;
}

export const SelectField = component$((props: SelectFieldProps) => {
  return (
    <div class="fieldset">
      <label class="label" {...(props.id && {for: props.id})}>
        <span class="label-text">{props.label}</span>
      </label>
      <select
        {...(props.name && {name: props.name})}
        {...(props.id && {id: props.id})}
        class="select"
      >
        <Slot />
      </select>
    </div>
  );
});

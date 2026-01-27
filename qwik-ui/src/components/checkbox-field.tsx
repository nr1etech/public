import {component$} from '@builder.io/qwik';

export interface CheckboxFieldProps {
  id?: string;
  label: string;
  name?: string;
  checked?: boolean;
}

export const CheckboxField = component$((props: CheckboxFieldProps) => {
  return (
    <div class="fieldset">
      <label class="label" {...(props.id && {for: props.id})}>
        <input
          type="checkbox"
          {...(props.name && {name: props.name})}
          {...(props.id && {id: props.id})}
          {...(props.checked && {checked: props.checked})}
          class="checkbox"
        />
        {props.label}
      </label>
    </div>
  );
});

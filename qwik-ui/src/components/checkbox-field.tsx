import {component$} from '@builder.io/qwik';

export interface CheckboxFieldProps {
  label: string;
  name?: string;
  checked?: boolean;
}

export default component$((props: CheckboxFieldProps) => {
  return (
    <div class="fieldset">
      <label class="label">
        <input
          type="checkbox"
          {...(props.name && {name: props.name})}
          {...(props.checked && {checked: props.checked})}
          class="checkbox"
        />
        {props.label}
      </label>
    </div>
  );
});

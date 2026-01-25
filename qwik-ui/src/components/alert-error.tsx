import {component$} from '@builder.io/qwik';
import {MdiErrorOutline} from '@nr1e/qwik-icons';

export interface AlertErrorProps {
  message: string;
}
export const AlertError = component$((props: AlertErrorProps) => {
  return (
    <div role="alert" class="alert alert-error">
      <MdiErrorOutline size={24} />
      <span>{props.message}</span>
    </div>
  );
});

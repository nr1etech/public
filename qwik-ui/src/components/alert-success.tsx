import {component$} from '@builder.io/qwik';
import {MdiCheckCircleOutline} from '@nr1e/qwik-icons';

export interface AlertSuccessProps {
  message: string;
}
export const AlertSuccess = component$((props: AlertSuccessProps) => {
  return (
    <div role="alert" class="alert alert-success">
      <MdiCheckCircleOutline size={24} />
      <span>{props.message}</span>
    </div>
  );
});

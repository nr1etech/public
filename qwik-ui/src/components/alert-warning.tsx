import {component$} from '@builder.io/qwik';
import {MdiWarningOutline} from '@nr1e/qwik-icons';

export interface AlertWarningProps {
  message: string;
}
export const AlertWarning = component$((props: AlertWarningProps) => {
  return (
    <div role="alert" class="alert alert-warning">
      <MdiWarningOutline size={24} />
      <span>{props.message}</span>
    </div>
  );
});

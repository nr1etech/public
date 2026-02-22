import {component$} from '@builder.io/qwik';
import {MdiInformationOutline} from '@nr1e/qwik-icons';

export interface AlertInfoProps {
  message: string;
}
export const AlertInfo = component$((props: AlertInfoProps) => {
  return (
    <div role="alert" class="alert alert-info text-info-content">
      <MdiInformationOutline size={18} />
      <span>{props.message}</span>
    </div>
  );
});

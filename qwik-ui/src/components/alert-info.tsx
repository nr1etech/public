import {component$} from '@builder.io/qwik';
import {MdiInformationOutline} from '@nr1e/qwik-icons';

export interface AlertInfoProps {
  message: string;
}
export const AlertInfo = component$((props: AlertInfoProps) => {
  return (
    <div role="alert" class="alert alert-info">
      <MdiInformationOutline size={24} />
      <span>{props.message}</span>
    </div>
  );
});

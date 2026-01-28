import {component$, QRL, Slot} from '@builder.io/qwik';
import {MdiAddCircleOutline} from '@nr1e/qwik-icons';

export interface AddButtonProps {
  class?: string;
  onClick$?: QRL<(event: Event) => void>;
}

export const AddButton = component$((props: AddButtonProps) => {
  return (
    <button class={`btn ${props.class ?? ''}`} onClick$={props.onClick$}>
      <MdiAddCircleOutline size={24} />
      <Slot />
    </button>
  );
});

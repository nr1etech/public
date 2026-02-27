import {component$, QRL, Slot} from '@builder.io/qwik';
import {MdiAddCircleOutline} from '@nr1e/qwik-icons';

export interface AddButtonProps {
  class?: string;
  onClick$?: QRL<(event: Event) => void>;
  id?: string;
}

export const AddButton = component$((props: AddButtonProps) => {
  return (
    <button
      class={`btn ${props.class ?? ''}`}
      onClick$={props.onClick$}
      id={props.id}
    >
      <MdiAddCircleOutline size={18} />
      <Slot />
    </button>
  );
});

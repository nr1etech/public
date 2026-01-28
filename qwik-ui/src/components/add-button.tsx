import {component$, Slot} from '@builder.io/qwik';
import {MdiAddCircleOutline} from '@nr1e/qwik-icons';

export interface AddButtonProps {
  class?: string;
}

export const AddButton = component$((props: AddButtonProps) => {
  return (
    <button class={`btn ${props.class ?? ''}`}>
      <MdiAddCircleOutline size={24} />
      <Slot />
    </button>
  );
});

import {component$, Signal, Slot, useVisibleTask$} from '@builder.io/qwik';

export interface AutoDismissProps {
  class?: string;
  visible?: Signal<boolean>;
}

export const AutoDismiss = component$((props?: AutoDismissProps) => {
  if (props?.visible && !props.visible.value) return null;
  useVisibleTask$(({cleanup}) => {
    // Set a timeout to update the progress signal after 500 milliseconds
    const id = setTimeout(() => {
      if (props?.visible) props.visible.value = false;
    }, 6000);

    cleanup(() => clearTimeout(id));
  });
  return (
    <div
      class={[
        'animate-fade animate-reverse animate-ease-in animate-duration-1000 animate-delay-5000',
        props?.class ?? '',
      ].join(' ')}
    >
      <Slot />
    </div>
  );
});

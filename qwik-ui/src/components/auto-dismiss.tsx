import {component$, Slot} from '@builder.io/qwik';

export interface AutoDismissProps {
  class?: string;
  hidden?: boolean;
}

export const AutoDismiss = component$((props?: AutoDismissProps) => {
  if (props?.hidden) return null;
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

import {
  component$,
  QRL,
  Signal,
  Slot,
  useSignal,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik';

export interface AutoDismissProps {
  class?: string;
  visible?: Signal<boolean>;
  onDismiss$?: QRL<() => void>;
}

export const AutoDismiss = component$((props?: AutoDismissProps) => {
  const visible = useSignal<boolean>(props?.visible?.value ?? false);
  if (!visible.value) return null;

  useTask$(async ({track}) => {
    track(() => visible.value);
    if (props?.visible) {
      props.visible.value = visible.value;
    }
    if (!visible.value && props?.onDismiss$) {
      props.onDismiss$();
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({cleanup}) => {
    // Set a timeout to update the progress signal after 500 milliseconds
    const id = setTimeout(() => {
      visible.value = false;
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

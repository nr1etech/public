import {component$, QRL, Signal, Slot} from '@builder.io/qwik';
import {Link} from '@builder.io/qwik-city';

export interface DockLabelProps {
  class?: string;
}

export const DockLabel = component$((props?: DockLabelProps) => {
  return (
    <span class={`dock-label ${props?.class ?? ''}`}>
      <Slot />
    </span>
  );
});

export interface DockButtonProps {
  class?: string;
  selected?: boolean;
  loading?: Signal<boolean>;
  onClick$: QRL<(event: Event) => void>;
}

export const DockButton = component$((props: DockButtonProps) => {
  return (
    <button
      class={`${props.selected ? 'bg-base-200' : ''} ${props.class ?? ''}`}
      onClick$={async (event) => {
        if (props.loading) {
          props.loading.value = true;
        }
        await props.onClick$(event);
        if (props.loading) {
          props.loading.value = false;
        }
      }}
    >
      <Slot />
    </button>
  );
});

export interface DockLinkProps {
  href: string;
  prefetch?: boolean;
  class?: string;
  selected?: boolean;
  loading?: Signal<boolean>;
  onClick$?: QRL<(event: Event) => void>;
}

export const DockLink = component$((props: DockLinkProps) => {
  return (
    <Link
      class={`${props.selected ? 'bg-base-200' : ''} ${props.class ?? ''}`}
      href={props.href}
      prefetch={props.prefetch ?? true}
      onClick$={async (event) => {
        if (props.loading) {
          props.loading.value = true;
        }
        if (props.onClick$) {
          await props.onClick$(event);
        }
        if (props.loading) {
          props.loading.value = false;
        }
      }}
    >
      <Slot />
    </Link>
  );
});

export interface DockProps {
  class?: string;
}

export const Dock = component$((props?: DockProps) => {
  return (
    <div class={`dock ${props?.class ?? ''}`}>
      <Slot />
    </div>
  );
});

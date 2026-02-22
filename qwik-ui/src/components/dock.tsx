import {component$, QRL, Signal, Slot} from '@builder.io/qwik';
import {Link, useNavigate} from '@builder.io/qwik-city';

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

export interface DockItemProps {
  href?: string;
  prefetch?: boolean;
  class?: string;
  selected?: boolean;
  loading?: Signal<boolean>;
  onClick$?: QRL<(event: Event) => void>;
  linkClass?: string;
}

export const DockItem = component$((props: DockItemProps) => {
  const nav = useNavigate();
  return (
    <Link
      class={`${props.selected ? 'bg-base-200' : ''} ${props.linkClass ?? ''}`}
      href={props.href}
      prefetch={props.prefetch ?? true}
      onClick$={async (event) => {
        if (props.onClick$) {
          await props.onClick$(event);
        } else {
          if (props.loading) {
            props.loading.value = true;
          }
          await nav(props.href);
          if (props.loading) {
            props.loading.value = false;
          }
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

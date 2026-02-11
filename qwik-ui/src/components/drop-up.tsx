import {QRL, Signal, Slot, component$} from '@builder.io/qwik';
import {Link, useNavigate} from '@builder.io/qwik-city';

export interface DropUpItemProps {
  href?: string;
  prefetch?: boolean;
  selected?: boolean;
  loading?: Signal<boolean>;
  onClick$?: QRL<(event: Event) => void>;
  class?: string;
}

export const DropUpItem = component$((props: DropUpItemProps) => {
  const nav = useNavigate();
  return (
    <li>
      <Link
        href={props.href}
        prefetch={props.prefetch}
        class={`text-nowrap ${props?.class ?? null}`}
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
    </li>
  );
});

export interface DropUpSubmenuProps {
  class?: string;
}

export const DropUpSubmenu = component$((props?: DropUpSubmenuProps) => {
  return (
    <ul
      tabIndex={-1}
      class={`dropdown-content menu bg-base-100 rounded-box z-1 shadow-sm ${props?.class ?? ''}`}
    >
      <Slot />
    </ul>
  );
});

export interface DropUpButtonProps {
  class?: string;
}

export const DropUpButtonSelector = component$((props?: DropUpButtonProps) => {
  return (
    <button tabIndex={0} role="button" class={`btn ${props?.class ?? ''}`}>
      <Slot />
    </button>
  );
});

export interface DropUpProps {
  class?: string;
}

export const DropUp = component$((props?: DropUpProps) => {
  return (
    <div class={`dropdown dropdown-top ${props?.class ?? ''}`}>
      <Slot />
    </div>
  );
});

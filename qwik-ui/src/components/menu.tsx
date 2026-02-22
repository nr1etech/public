import {component$, QRL, Signal, Slot} from '@builder.io/qwik';
import {Link} from '@builder.io/qwik-city';

export interface MenuButtonProps {
  class?: string;
  loading?: Signal<boolean>;
  selected?: boolean;
  onClick$: QRL<(event: Event) => void>;
  buttonClass?: string;
}

export const MenuButton = component$((props: MenuButtonProps) => {
  return (
    <li class={props.class ?? ''}>
      <button
        class={`truncate ${props.selected ? 'bg-base-200' : ''} ${props.buttonClass ?? ''}`}
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
    </li>
  );
});

export interface MenuLinkProps {
  href: string;
  prefetch?: boolean;
  selected?: boolean;
  loading?: Signal<boolean>;
  onClick$?: QRL<(event: Event) => void>;
  class?: string;
  linkClass?: string;
  target?: string;
}

export const MenuLink = component$((props: MenuLinkProps) => {
  return (
    <li class={props.class ?? ''}>
      <Link
        class={`truncate ${props.selected ? 'bg-base-200' : ''} ${props.linkClass ?? ''}`}
        href={props.href}
        prefetch={props.prefetch ?? true}
        target={props.target}
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
    </li>
  );
});

export interface MenuGroupSummaryProps {
  class?: string;
}

export const MenuGroupSummary = component$((props?: MenuGroupSummaryProps) => {
  return (
    <summary class={`truncate ${props?.class ?? ''}`}>
      <Slot />
    </summary>
  );
});

export interface MenuGroupProps {
  open?: boolean;
  class?: string;
}

export const MenuGroup = component$((props: MenuGroupProps) => {
  return (
    <li class={props.class ?? ''}>
      <details open={props.open}>
        <Slot />
      </details>
    </li>
  );
});

export interface SubmenuProps {
  class?: string;
}

export const Submenu = component$((props?: SubmenuProps) => {
  return (
    <ul class={props?.class ?? ''}>
      <Slot />
    </ul>
  );
});

export interface MenuDividerProps {
  class?: string;
}

export const MenuDivider = component$((props?: MenuDividerProps) => {
  return <li class={`divider h-px ${props?.class ?? ''}`}></li>;
});

export interface MenuProps {
  class?: string;
}

export const Menu = component$((props?: MenuProps) => {
  return (
    <ul class={`menu w-56 ${props?.class ?? ''}`}>
      <Slot />
    </ul>
  );
});

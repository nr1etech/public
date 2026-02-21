import {component$, QRL, Signal, Slot} from '@builder.io/qwik';
import {Link, useNavigate} from '@builder.io/qwik-city';

export interface MenuItemProps {
  href?: string;
  prefetch?: boolean;
  selected?: boolean;
  loading?: Signal<boolean>;
  onClick$?: QRL<(event: Event) => void>;
  class?: string;
  linkClass?: string;
}

export const MenuItem = component$((props: MenuItemProps) => {
  const nav = useNavigate();
  return (
    <li class={props.class ?? ''}>
      <Link
        class={`truncate ${props.selected ? 'bg-base-200' : ''} ${props.linkClass ?? ''}`}
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
  return <li class={`divider ${props?.class ?? ''}`}></li>;
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

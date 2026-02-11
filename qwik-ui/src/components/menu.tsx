import {component$, QRL, Signal, Slot} from '@builder.io/qwik';
import {Link, useNavigate} from '@builder.io/qwik-city';

export interface MenuItemProps {
  href?: string;
  prefetch?: boolean;
  selected?: boolean;
  loading?: Signal<boolean>;
  onClick$?: QRL<(event: Event) => void>;
}

export const MenuItem = component$((props: MenuItemProps) => {
  const nav = useNavigate();
  return (
    <li>
      <Link
        class={`truncate ${props.selected && 'bg-base-200'}`}
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

export const MenuGroupSummary = component$(() => {
  return (
    <summary class="truncate">
      <Slot />
    </summary>
  );
});

export interface MenuGroupProps {
  open?: boolean;
}

export const MenuGroup = component$((props: MenuGroupProps) => {
  return (
    <li>
      <details open={props.open}>
        <Slot />
      </details>
    </li>
  );
});

export const Submenu = component$(() => {
  return (
    <ul>
      <Slot />
    </ul>
  );
});

export const MenuDivider = component$(() => {
  return <li class="divier"></li>;
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

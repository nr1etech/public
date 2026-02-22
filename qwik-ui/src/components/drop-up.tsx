import {
  $,
  QRL,
  Signal,
  Slot,
  component$,
  useOnDocument,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import {Link} from '@builder.io/qwik-city';

export interface DropUpButtonProps {
  loading?: Signal<boolean>;
  onClick$: QRL<(event: Event) => void>;
  class?: string;
  buttonClass?: string;
}

export const DropUpButton = component$((props: DropUpButtonProps) => {
  return (
    <li class={props.class ?? ''}>
      <button
        class={`text-nowrap ${props?.buttonClass ?? null}`}
        onClick$={async (event) => {
          if (props.loading) {
            props.loading.value = true;
          }
          await props.onClick$(event);
          if (props.loading) {
            props.loading.value = false;
          }
        }}
      ></button>
    </li>
  );
});

export interface DropUpLinkProps {
  href: string;
  prefetch?: boolean;
  loading?: Signal<boolean>;
  onClick$?: QRL<(event: Event) => void>;
  class?: string;
  linkClass?: string;
}

export const DropUpLink = component$((props: DropUpLinkProps) => {
  return (
    <li class={props.class ?? ''}>
      <Link
        href={props.href}
        prefetch={props.prefetch}
        class={`text-nowrap ${props?.linkClass ?? null}`}
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

export interface DropUpButtonSelectorProps {
  class?: string;
}

export const DropUpButtonSelector = component$(
  (props?: DropUpButtonSelectorProps) => {
    return (
      <button tabIndex={0} role="button" class={`btn ${props?.class ?? ''}`}>
        <Slot />
      </button>
    );
  },
);

export interface DropUpProps {
  class?: string;
  open?: Signal<boolean>;
}

export const DropUp = component$((props?: DropUpProps) => {
  const open = useSignal<boolean>(props?.open?.value ?? false);
  const dropdownRef = useSignal<HTMLDivElement>();

  useTask$(({track}) => {
    track(() => props?.open?.value);
    if (props?.open?.value && props.open.value !== open.value) {
      open.value = props.open.value;
    }
  });

  useTask$(({track}) => {
    track(() => open.value);
    if (props?.open?.value && props?.open?.value !== open.value) {
      props.open.value = open.value;
    }
  });

  useOnDocument(
    'click',
    $((event: MouseEvent) => {
      if (
        open.value &&
        dropdownRef.value &&
        !dropdownRef.value.contains(event.target as Node)
      ) {
        console.log('close');
        open.value = false;
      }
    }),
  );

  useOnDocument(
    'keydown',
    $((event: KeyboardEvent) => {
      if (open.value && event.key === 'Escape') {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        open.value = false;
      }
    }),
  );

  return (
    <div
      ref={dropdownRef}
      class={`dropdown dropdown-top ${open.value ? 'dropdown-open' : 'dropdown-close'} ${props?.class ?? ''}`}
      onClick$={() => {
        open.value = !open.value;
      }}
    >
      <Slot />
    </div>
  );
});

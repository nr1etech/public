import {$, component$, Signal, Slot, useOnDocument} from '@builder.io/qwik';
import {MdiClose} from '@nr1e/qwik-icons';

export interface DialogProps {
  id?: string;
  open: Signal<boolean>;
  showCloseIcon?: boolean;
  class?: string;
  title?: string;
}

export const Dialog = component$((props: DialogProps) => {
  // Close dialog on escape key press
  useOnDocument(
    'keydown',
    $((event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        props.open.value = false;
      }
    }),
  );
  return (
    <dialog
      class={`modal ${props.class}`}
      id={props.id}
      open={props.open.value}
    >
      <div class="modal-box">
        {props.showCloseIcon && (
          <button
            class="btn btn-sm btn-circle btn-ghost absolute top-1 right-1"
            onClick$={() => {
              props.open.value = false;
            }}
          >
            <MdiClose size={24} />
          </button>
        )}
        {props.title && <div class="text-lg font-bold">{props.title}</div>}
        <div class="py-4">
          <Slot />
        </div>
        <div class="modal-action">
          <Slot name="actions" />
        </div>
      </div>
    </dialog>
  );
});

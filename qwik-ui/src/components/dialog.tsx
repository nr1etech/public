import {$, component$, Signal, Slot, useOnDocument} from '@builder.io/qwik';
import {MdiClose} from '@nr1e/qwik-icons';

export interface DialogProps {
  id: string;
  open: Signal<boolean>;
  showCloseIcon?: boolean;
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
    <dialog class="modal" id={props.id} open={props.open.value}>
      <div class="modal-box">
        {props.showCloseIcon && (
          <div
            class="absolute top-0 right-0 cursor-pointer"
            onClick$={() => {
              props.open.value = false;
            }}
          >
            <MdiClose size={24} />
          </div>
        )}
        <Slot />
      </div>
    </dialog>
  );
});

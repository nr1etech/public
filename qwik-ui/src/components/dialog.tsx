import {
  $,
  component$,
  QRL,
  Signal,
  Slot,
  useOnDocument,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import {MdiClose} from '@nr1e/qwik-icons';
import {AlertError} from './alert-error';
import {AlertInfo} from './alert-info';
import {AlertWarning} from './alert-warning';
import {AlertSuccess} from './alert-success';

export interface DialogProps {
  id?: string;
  open: Signal<boolean>;
  showCloseIcon?: boolean;
  class?: string;
  title?: string;
  errorMessage?: string;
  infoMessage?: string;
  successMessage?: string;
  warningMessage?: string;
  onClose$?: QRL<(e: HTMLDialogElement) => void>;
  onOpen$?: QRL<(e: HTMLDialogElement) => void>;
}

export const Dialog = component$((props: DialogProps) => {
  const internalOpen = useSignal(props.open.value);
  const dialog = useSignal<HTMLDialogElement>();
  useTask$(({track}) => {
    track(() => props.open.value);
    if (!props.open.value && internalOpen.value) {
      if (props.onClose$ && dialog.value) {
        props.onClose$(dialog.value);
      }
      internalOpen.value = false;
    }
    if (props.open.value && !internalOpen.value) {
      if (props.onOpen$ && dialog.value) {
        props.onOpen$(dialog.value);
      }
      internalOpen.value = true;
    }
  });
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
      ref={dialog}
      class={`modal ${props.class}`}
      id={props.id}
      open={internalOpen.value}
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
          {props.errorMessage ||
          props.infoMessage ||
          props.successMessage ||
          props.warningMessage ? (
            <div class="mt-3 space-y-2">
              {props.infoMessage && <AlertInfo message={props.infoMessage} />}
              {props.warningMessage && (
                <AlertWarning message={props.warningMessage} />
              )}
              {props.errorMessage && (
                <AlertError message={props.errorMessage} />
              )}
              {props.successMessage && (
                <AlertSuccess message={props.successMessage} />
              )}
            </div>
          ) : (
            ''
          )}
        </div>
        <div class="modal-action mt-2">
          <Slot name="action" />
        </div>
      </div>
    </dialog>
  );
});

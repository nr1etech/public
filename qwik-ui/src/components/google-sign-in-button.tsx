import {component$, QRL} from '@builder.io/qwik';
import {LogosGoogleIcon} from '@nr1e/qwik-icons';

export interface GoogleSignInButtonProps {
  class?: string;
  onClick$?: QRL<(event: Event) => void>;
  id?: string;
}

export const GoogleSignInButton = component$(
  (props: GoogleSignInButtonProps) => {
    return (
      <button
        class={`btn ${props.class ?? ''}`}
        onClick$={props.onClick$}
        id={props.id}
      >
        <LogosGoogleIcon size={18} />
        Sign in with Google
      </button>
    );
  },
);

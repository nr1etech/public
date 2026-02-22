import {component$, QRL} from '@builder.io/qwik';
import {LogosMicrosoftIcon} from '@nr1e/qwik-icons';

export interface MicrosoftSignInButtonProps {
  class?: string;
  onClick$?: QRL<(event: Event) => void>;
}

export const MicrosoftSignInButton = component$(
  (props: MicrosoftSignInButtonProps) => {
    return (
      <button class={`btn ${props.class ?? ''}`} onClick$={props.onClick$}>
        <LogosMicrosoftIcon size={18} />
        Sign in with Google
      </button>
    );
  },
);

import {component$, Slot} from '@builder.io/qwik';

/**
 * Properties for FixedCenterBottom.
 */
export interface FixedCenterBottomProps {
  class?: string;
}

/**
 * Renders the contents centered at the bottom of the viewport.
 */
export const FixedCenterBottom = component$(
  (props?: FixedCenterBottomProps) => {
    return (
      <div
        class={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 ${props?.class ?? ''}`}
      >
        <Slot />
      </div>
    );
  },
);

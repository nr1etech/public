import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiTerminalLine = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M13 19v-3h8v3zm-4.5-6L2.47 7h4.24l4.96 4.95c.58.59.58 1.55 0 2.12L6.74 19H2.5z"
      />
    </Svg>
  );
});

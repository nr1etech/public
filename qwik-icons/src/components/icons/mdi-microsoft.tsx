import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiMicrosoft = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M2 3h9v9H2zm9 19H2v-9h9zM21 3v9h-9V3zm0 19h-9v-9h9z"
      />
    </Svg>
  );
});

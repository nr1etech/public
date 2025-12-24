import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiPercent = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m18.5 3.5l-15 15l2 2l15-15M7 4a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m10 10a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
      />
    </Svg>
  );
});

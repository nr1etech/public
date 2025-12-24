import {component$} from '@builder.io/qwik';

import {IconProps, Svg} from '../svg';

export const MdiKeyboardReturn = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.42L5.83 13H21V7z"
      />
    </Svg>
  );
});

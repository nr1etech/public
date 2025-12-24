import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiNavigateNext = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
      />
    </Svg>
  );
});

import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiCheck = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
      />
    </Svg>
  );
});

import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiCodeOr = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M14 21V3h2v18zm-6 0V3h2v18z" />
    </Svg>
  );
});

import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiChevronUp = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
    </Svg>
  );
});

import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiCheckBold = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83z"
      />
    </Svg>
  );
});

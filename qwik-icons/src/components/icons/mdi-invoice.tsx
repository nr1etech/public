import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiInvoice = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m21 22l-3-2l-3 2l-3-2l-3 2l-3-2l-3 2V3h18z"
      />
    </Svg>
  );
});

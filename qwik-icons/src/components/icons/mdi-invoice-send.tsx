import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiInvoiceSend = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M3 22V3h18v11.26l-9-4.5V20l-3 2l-3-2zm21-4l-10 5v-4l4-1l-4-1v-4z"
      />
    </Svg>
  );
});

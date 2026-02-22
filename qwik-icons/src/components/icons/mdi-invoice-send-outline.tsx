import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiInvoiceSendOutline = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m24 18l-10-5v4l4 1l-4 1v4zm-5-4.74l2 1V3H3v19l3-2l3 2l3-2v-2.4l-3 2l-3-2l-1 .66V5h14z"
      />
    </Svg>
  );
});

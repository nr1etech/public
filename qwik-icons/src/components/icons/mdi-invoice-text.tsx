import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiInvoiceText = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M3 3v19l3-2l3 2l3-2l3 2l3-2l3 2V3zm14 4v2H7V7zm-2 4v2H7v-2z"
      />
    </Svg>
  );
});

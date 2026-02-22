import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiInvoiceListOutline = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M17 7v2h-2V7zm-4 0v2H7V7zm0 4H7v2h6zm2 0v2h2v-2zm6 11l-3-2l-3 2l-3-2l-3 2l-3-2l-3 2V3h18zm-2-3.74V5H5v13.26l1-.66l3 2l3-2l3 2l3-2z"
      />
    </Svg>
  );
});

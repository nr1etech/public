import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiInvoiceOutline = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m21 22l-3-2l-3 2l-3-2l-3 2l-3-2l-3 2V3h18zm-2-3.74V5H5v13.26l1-.66l3 2l3-2l3 2l3-2z"
      />
    </Svg>
  );
});

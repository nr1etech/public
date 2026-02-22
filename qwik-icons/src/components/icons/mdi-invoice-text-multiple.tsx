import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiInvoiceTextMultiple = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M17 2H2v15h2V4h13zm4 20l-2.5-1.68L16 22l-2.5-1.68L11 22l-2.5-1.68L6 22V6h15zM10 10v2h7v-2zm5 4h-5v2h5z"
      />
    </Svg>
  );
});

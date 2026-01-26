import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiAddBold = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M20 14h-6v6h-4v-6H4v-4h6V4h4v6h6z" />
    </Svg>
  );
});

import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiAdd = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
    </Svg>
  );
});

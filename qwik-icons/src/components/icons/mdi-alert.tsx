import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from "../svg";

export const MdiAlert = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2z" />
    </Svg>
  );
});

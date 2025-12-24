import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from "../svg";

export const MdiNavigateBefore = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
      />
    </Svg>
  );
});

import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiBank = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z"
      />
    </Svg>
  );
});

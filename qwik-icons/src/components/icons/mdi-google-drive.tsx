import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiGoogleDrive = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M7.71 3.5L1.15 15l3.43 6l6.55-11.5M9.73 15L6.3 21h13.12l3.43-6m-.57-1L15.42 2H8.57l6.86 12z"
      />
    </Svg>
  );
});

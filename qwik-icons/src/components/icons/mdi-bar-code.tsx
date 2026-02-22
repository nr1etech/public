import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiBarCode = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M2 6h2v12H2zm3 0h1v12H5zm2 0h3v12H7zm4 0h1v12h-1zm3 0h2v12h-2zm3 0h3v12h-3zm4 0h1v12h-1z"
      />
    </Svg>
  );
});

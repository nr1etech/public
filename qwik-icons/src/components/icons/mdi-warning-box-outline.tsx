import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiWarningBoxOutline = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8 12h2v2h-2zm0-8h2v6h-2z"
      />
    </Svg>
  );
});

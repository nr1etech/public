import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiDownload = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z" />
    </Svg>
  );
});

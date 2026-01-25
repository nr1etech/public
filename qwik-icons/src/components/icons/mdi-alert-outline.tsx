import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiAlertOutline = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"
      />
    </Svg>
  );
});

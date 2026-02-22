import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiChartBar = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4z" />
    </Svg>
  );
});

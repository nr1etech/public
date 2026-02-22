import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const MdiBarChart = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M3 22V8h4v14zm7 0V2h4v20zm7 0v-8h4v8z" />
    </Svg>
  );
});

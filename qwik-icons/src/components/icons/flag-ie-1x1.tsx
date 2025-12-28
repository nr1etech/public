import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const FlagIe1x1 = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 512 512">
      <g fill-rule="evenodd" stroke-width="1">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <path fill="#009a49" d="M0 0h170.7v512H0z" />
        <path fill="#ff7900" d="M341.3 0H512v512H341.3z" />
      </g>
    </Svg>
  );
});

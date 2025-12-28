import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const FlagAe1x1 = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 512 512">
      <path fill="#00732f" d="M0 0h512v170.7H0z" />
      <path fill="#fff" d="M0 170.7h512v170.6H0z" />
      <path fill="#000001" d="M0 341.3h512V512H0z" />
      <path fill="#f00" d="M0 0h180v512H0z" />
    </Svg>
  );
});

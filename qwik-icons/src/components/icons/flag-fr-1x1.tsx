import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const FlagFr1x1 = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 512 512">
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#000091" d="M0 0h170.7v512H0z" />
      <path fill="#e1000f" d="M341.3 0H512v512H341.3z" />
    </Svg>
  );
});

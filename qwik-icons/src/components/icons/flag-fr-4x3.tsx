import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const FlagFr4x3 = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 640 480">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#000091" d="M0 0h213.3v480H0z" />
      <path fill="#e1000f" d="M426.7 0H640v480H426.7z" />
    </Svg>
  );
});

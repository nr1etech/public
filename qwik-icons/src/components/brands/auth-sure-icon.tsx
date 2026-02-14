import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const AuthSureIcon = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 172.62 172.62">
      <path
        fill="#56d2fe"
        d="M166.4,0H6.22v80.19c0,7.07.3,13.09,1.35,18.68L85.87,21.31l78.8,79.56c1.38-6.14,1.74-12.76,1.74-20.68V0Z"
      />
      <path
        fill="#0249af"
        d="M35.46,139.78c19.81,16.34,49.12,31.9,50.8,32.79v.05s.04-.02.05-.03c.01,0,.05.03.05.03v-.05c1.66-.88,30.01-15.93,49.79-31.95l-50.28-50.77-50.41,49.93Z"
      />
    </Svg>
  );
});

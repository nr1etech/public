import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const EnpagoIcon = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 247.24 247.24">
      <defs>
        <linearGradient
          id="enpago-gradient-1"
          x1="46.56"
          y1="204.75"
          x2="215.61"
          y2="35.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#6aa71b" />
          <stop offset="1" stop-color="#95ba12" />
        </linearGradient>
      </defs>
      <path
        d="M235.2,152.07h-58.66c1.56-4.45,2.82-9.04,3.67-13.78H56.22c-5.24,0-9.65-3.36-11.31-8.03h158.69c6.65,0,12.04-5.39,12.04-12.04s-5.39-12.04-12.04-12.04h-23.43c-.85-4.73-2.03-9.34-3.59-13.78H56.22c-5.24,0-9.65-3.36-11.31-8.03h190.29c6.65,0,12.04-5.39,12.04-12.04s-5.39-12.04-12.04-12.04h-78.21c-16.43-17.35-39.68-28.19-65.47-28.19C41.74,32.09,1.38,72.45,1.38,122.23s40.36,90.14,90.14,90.14c25.78,0,49.01-10.84,65.44-28.19H56.22c-5.24,0-9.65-3.36-11.31-8.03h190.29c6.65,0,12.04-5.39,12.04-12.04s-5.39-12.04-12.04-12.04Z"
        style="fill:url(#enpago-gradient-1)"
      />
    </Svg>
  );
});

import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const AdminiPayIcon = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024">
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0"
          y1="512"
          x2="1024"
          y2="512"
          gradientTransform="translate(1024 1024) rotate(180)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffc800" />
          <stop offset=".38" stop-color="#ff9200" />
          <stop offset="1" stop-color="#da5e9a" />
        </linearGradient>
        <clipPath id="clippath">
          <rect
            style="fill:none"
            y="0"
            width="1024"
            height="1024"
            rx="105.67"
            ry="105.67"
            transform="translate(1024 1024) rotate(-180)"
          />
        </clipPath>
        <filter
          id="drop-shadow-1"
          x="450.34"
          y="213.03"
          width="75"
          height="145"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="-2" dy="3" />
          <feGaussianBlur result="blur" stdDeviation="2" />
          <feFlood flood-color="#000" flood-opacity=".1" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Layer_1-2">
        <rect
          style="fill:url(#linear-gradient)"
          y="0"
          width="1024"
          height="1024"
          rx="105.67"
          ry="105.67"
          transform="translate(1024 1024) rotate(-180)"
        />
        <g style="opacity:0.17">
          <g style="clip-path:url(#clippath)">
            <path
              style="opacity:0.73;fill:#fff"
              d="M-116.26,831.96c248.35-23.76,1093.19-554.57,1169.75-755.07,125.14-327.73-6.35-154.93-6.35-154.93L-54.56-21.7l-61.71,853.66Z"
            />
          </g>
        </g>
        <path
          style="fill:#fff"
          d="M565.02,216.59l-272.92,580.71c-8.17,11.42-20.16,16.54-36.39,16.54h-84.48S442.06,235.89,442.06,235.89c8.01-17.15,21.77-25.72,41.26-25.72h28.38s28.38,0,28.38,0l24.94,6.43"
        />
        <path
          style="fill:#fff"
          d="M458.39,216.59l272.92,580.71c8.17,11.42,20.16,16.54,36.39,16.54h84.48L581.35,235.89c-8.01-17.15-21.77-25.72-41.26-25.72h-56.76c-16.38,0-24.94,6.43-24.94,6.43"
        />
        <circle style="fill:#fff" cx="511.7" cy="587.58" r="67.59" />
        <polygon
          style="fill:#fff;filter:url(#drop-shadow-1)"
          points="471.8 223.75 458.39 216.59 520.58 348.91 471.8 223.75"
        />
      </g>
    </Svg>
  );
});

import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const CenterGaugeIconDarkBg = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 120.5 120.5">
      <g id="Layer_1-2">
        <g>
          <path
            style="fill:#B0B0B0"
            d="M71.9,17.8v4.8c17.5,7.4,29.9,24.7,29.9,44.9c0,26.8-21.8,48.7-48.7,48.7S4.4,94.3,4.4,67.4
			c0-19.2,11.2-35.8,27.4-43.7v-4.9C13.1,27,0,45.7,0,67.4c0,29.3,23.8,53.1,53.1,53.1s53.1-23.8,53.1-53.1
			C106.2,44.7,92,25.4,71.9,17.8z"
          />
          <g>
            <g>
              <polygon
                style="fill:#E22100"
                points="52.9,0 8.2,85.7 37.7,55.5 				"
              />
              <polygon
                style="fill:#F47B00"
                points="8.2,85.7 52.7,64.3 37.7,55.5 				"
              />
              <polygon
                style="fill:#F05500"
                points="52.9,0 52.9,64.5 37.7,55.5 				"
              />
            </g>
            <g>
              <polygon
                style="fill:#E22100"
                points="52.7,0 97.4,85.7 67.9,55.5 				"
              />
              <polygon
                style="fill:#F05500"
                points="97.4,85.7 52.9,64.3 67.9,55.5 				"
              />
              <polygon
                style="fill:#F47B00"
                points="52.7,0 52.7,64.5 67.9,55.5 				"
              />
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
});

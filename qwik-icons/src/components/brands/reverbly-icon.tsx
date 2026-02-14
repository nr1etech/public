import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from '../svg';

export const ReverblyIcon = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 170.32 170.32">
      <g style="isolation: isolate;">
        <g id="Layer_1" data-name="Layer 1">
          <g>
            <path
              d="M170.32,0h-104.05c-15.59,0-28.23,12.64-28.23,28.23v32.9h47.85c12.87,0,23.3,10.44,23.3,23.3v47.85h32.9c15.59,0,28.24-12.64,28.24-28.23V0Z"
              style="fill: #f6921e;"
            />
            <path
              d="M38.04,104.05v-42.92h-14.74c-12.87,0-23.3,10.44-23.3,23.3v85.89h85.89c12.87,0,23.3-10.43,23.3-23.3v-14.74h-42.92c-15.59,0-28.23-12.64-28.23-28.23Z"
              style="fill: #90278e; mix-blend-mode: multiply;"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
});

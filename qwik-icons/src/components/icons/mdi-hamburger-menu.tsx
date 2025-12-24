import {component$} from '@builder.io/qwik';
import {IconProps, Svg} from "../svg";

export const MdiHamburgerMenu = component$((props: IconProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
    </Svg>
  );
});

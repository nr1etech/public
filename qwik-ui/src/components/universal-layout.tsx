import {Slot, component$} from '@builder.io/qwik';

interface UniversalLayoutProps {
  class?: string;
  outerLeftClass?: string;
  outerRightClass?: string;
  topClass?: string;
  leftClass?: string;
  rightClass?: string;
  bottomClass?: string;
  innerTopClass?: string;
  innerBottomClass?: string;
  childrenClass?: string;
}

export const UniversalLayout = component$<UniversalLayoutProps>((props) => {
  const aprops = {
    ...props,
    class: `${props.class ? ` ${props.class}` : ''}`,
    outerLeftClass: `${props.outerLeftClass ? `${props.outerLeftClass}` : ''}`,
    topClass: `${props.topClass ?? ''}`,
    leftClass: `${props.leftClass ?? ''}`,
    childrenClass: `${props.childrenClass ? ` ${props.childrenClass}` : ''}`,
    innerTopClass: `${props.innerTopClass ?? ''}`,
    innerBottomClass: `${props.innerBottomClass ?? ''}`,
    rightClass: `${props.rightClass ?? ''}`,
    bottomClass: `${props.bottomClass ?? ''}`,
    outerRightClass: `${props.outerRightClass ?? ''}`,
  };

  return (
    <div id="universal" class={`flex min-h-screen ${aprops.class}`}>
      <div id="universal-outer-left" class={aprops.outerLeftClass}>
        <Slot name="outerLeft" />
      </div>
      <div class="flex flex-grow flex-col">
        <div id="universal-top" class={aprops.topClass}>
          <Slot name="top" />
        </div>
        <div class="flex flex-grow">
          <div id="universal-left" class={aprops.leftClass}>
            <Slot name="left" />
          </div>
          <div class="flex w-full flex-grow flex-col">
            <div id="universal-right" class={aprops.innerTopClass}>
              <Slot name="innerTop" />
            </div>
            <div class={`flex-grow ${aprops.childrenClass}`}>
              <Slot />
            </div>
            <div id="universal-right" class={aprops.innerBottomClass}>
              <Slot name="innerBottom" />
            </div>
          </div>
          <div id="universal-right" class={aprops.rightClass}>
            <Slot name="right" />
          </div>
        </div>
        <div id="universal-bottom" class={aprops.bottomClass}>
          <Slot name="bottom" />
        </div>
      </div>
      <div id="universal-outer-right" class={aprops.outerRightClass}>
        <Slot name="outerRight" />
      </div>
    </div>
  );
});

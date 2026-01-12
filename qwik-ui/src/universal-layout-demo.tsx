import {component$} from '@builder.io/qwik';
import {UniversalLayout} from './components/universal-layout';

export const UniversalLayoutDemo = component$(() => {
  return (
    <UniversalLayout
      class="bg-gray-100"
      outerLeftClass="bg-purple-500 p-4 min-w-20 flex items-center justify-center"
      outerRightClass="bg-pink-500 p-4"
      topClass="bg-red-500 p-4"
      leftClass="bg-blue-500 p-4"
      rightClass="bg-green-500 p-4"
      bottomClass="bg-yellow-500 p-4"
      innerTopClass="bg-orange-500 p-4"
      innerBottomClass="bg-purple-500 p-4"
      childrenClass="bg-gray-200"
    >
      {/* outerLeft slot */}
      <div q:slot="outerLeft" class="bg-pink-500 p-4 text-white min-w-20">
        <div class="font-bold">Outer Left</div>
        <div class="text-sm">outerLeft slot</div>
      </div>

      {/* outerRight slot */}
      <div q:slot="outerRight" class="bg-purple-500 p-4 text-white">
        <div class="font-bold">Outer Right</div>
        <p class="text-sm">outerRight slot</p>
      </div>

      {/* top slot */}
      <div q:slot="top" class="bg-blue-500 p-4 text-white">
        <h2 class="text-xl font-bold">Top Slot</h2>
        <p>This is the top section of the layout</p>
      </div>

      {/* left slot */}
      <div q:slot="left" class="bg-green-500 p-4 text-white">
        <h3 class="font-bold">Left Slot</h3>
        <p>Sidebar area</p>
      </div>

      {/* innerTop slot */}
      <div q:slot="innerTop" class="bg-purple-500 p-4 text-white">
        <h3 class="font-bold">Inner Top Slot</h3>
        <p>This appears above the main content</p>
      </div>

      {/* Default children slot */}
      <div class="bg-gray-200 p-8 text-center">
        <h2 class="text-2xl font-bold mb-2">Main Content Area (Default Slot)</h2>
        <p>This is the children/default slot content</p>
      </div>

      <div q:slot="innerBottom" class="bg-yellow-500 p-4 text-center">
        <h3 class="font-bold text-lg">Inner Bottom Slot</h3>
        <p>Content for innerBottom slot</p>
      </div>

      <div q:slot="right" class="bg-purple-500 text-white p-4 w-48">
        <h3 class="font-bold mb-2">Right Sidebar</h3>
        <p>This is the right slot</p>
      </div>

      <div q:slot="bottom" class="bg-pink-500 text-white p-4">
        <h3 class="text-xl font-bold">Bottom Slot</h3>
        <p>Footer area - spans the full width</p>
      </div>

      <div q:slot="outerRight" class="bg-purple-500 text-white p-4 min-w-32">
        <h3 class="font-bold mb-2">Outer Right</h3>
        <p>Outer right sidebar</p>
      </div>
    </UniversalLayout>
  );
});

import './global.css';
import {component$, useSignal} from '@builder.io/qwik';
import {PaceBar} from './components/pace-bar';
import {UniversalLayoutDemo} from './universal-layout-demo';
import {AlertSuccess} from './components/alert-success';
import {AlertWarning} from './components/alert-warning';
import {AlertError} from './components/alert-error';
import {AlertInfo} from './components/alert-info';

export default component$(() => {
  const currentPage = useSignal<'home' | 'universal-layout'>('home');

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>NR1E Qwik UI</title>
      </head>
      <body>
        {currentPage.value === 'home' ? (
          <div class="flex flex-col items-center p-4">
            <img
              src="https://nr1e.com/images/logo-tagline.svg"
              alt="NR1E"
              class="mb-3 h-auto max-w-75"
            />
            <h1 class="text-4xl">Qwik UI</h1>

            {/* Navigation Links */}
            <div class="my-6 flex gap-4">
              <button
                onClick$={() => {
                  currentPage.value = 'universal-layout';
                }}
                class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                View UniversalLayout Demo
              </button>
            </div>
            <div class="flex w-full max-w-4xl flex-col space-y-6">
              <div class="w-full space-y-2">
                <div class="text-2xl">PaceBar</div>
                <PaceBar value={1} class="progress-accent" />
                <PaceBar value={20} class="progress-accent" />
                <PaceBar value={40} class="progress-accent" />
                <PaceBar value={60} class="progress-accent" />
                <PaceBar value={80} class="progress-accent" />
                <PaceBar value={100} class="progress-accent" />
                <PaceBar value={-1} class="progress-accent" />
                <PaceBar value={1} asymptotic={true} class="progress-accent" />
              </div>

              <div class="w-full space-y-2">
                <div class="text-2xl">Alert</div>
                <AlertInfo message="This is an informational message" />
                <AlertSuccess message="This is a successful message" />
                <AlertWarning message="This is a warning message" />
                <AlertError message="This is an error message" />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div class="mb-4 flex flex-col items-center p-4">
              <button
                onClick$={() => {
                  currentPage.value = 'home';
                }}
                class="mb-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                ← Back to Home
              </button>
              <h1 class="text-2xl font-bold">UniversalLayout Demo</h1>
              <p class="text-sm text-gray-600">
                Each slot is a different color
              </p>
            </div>
            <UniversalLayoutDemo />
          </div>
        )}
      </body>
    </>
  );
});

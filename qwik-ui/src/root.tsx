import './global.css';
import {component$, useSignal} from '@builder.io/qwik';
import {PaceBar} from './components/pace-bar';
import {UniversalLayoutDemo} from './universal-layout-demo';
import {AlertSuccess} from './components/alert-success';
import {AlertWarning} from './components/alert-warning';
import {AlertError} from './components/alert-error';
import {AlertInfo} from './components/alert-info';
import {Dialog} from './components/dialog';
import {TextField} from './components/text-field';
import {MdiAirHorn} from '@nr1e/qwik-icons';
import {CheckboxField} from './components/checkbox-field';
import {SelectField} from './components/select-field';

export default component$(() => {
  const currentPage = useSignal<'home' | 'universal-layout'>('home');
  const openDialog1 = useSignal(false);
  const openDialog2 = useSignal(false);
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
            <div class="flex w-full max-w-4xl flex-col space-y-6 pb-[200px]">
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

              <div class="pad-4 w-full space-y-2">
                <div class="text-2xl">Dialog</div>
                <div class="flex gap-4">
                  <button
                    class="btn"
                    onClick$={() => (openDialog1.value = true)}
                  >
                    Open
                  </button>
                  <button
                    class="btn"
                    onClick$={() => (openDialog2.value = true)}
                  >
                    Open with title
                  </button>
                </div>
                <Dialog id="dialog1" open={openDialog1} showCloseIcon={true}>
                  <div>Nothing to see here.</div>
                  <div q:slot="actions">
                    <button
                      class="btn"
                      onClick$={() => (openDialog1.value = false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog>
                <Dialog
                  id="dialog2"
                  open={openDialog2}
                  showCloseIcon={true}
                  title="Doing something"
                >
                  <div>Nothing to see here.</div>
                  <div q:slot="actions">
                    <button
                      class="btn"
                      onClick$={() => (openDialog2.value = false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog>
              </div>

              <div class="w-full space-y-2">
                <div class="text-2xl">TextField</div>
                <div class="flex flex-wrap gap-4">
                  <div class="w-sm">
                    <TextField label="Enter something" />
                  </div>
                  <div class="w-sm">
                    <TextField
                      label="Enter something"
                      error="Something bad happened"
                    />
                  </div>
                  <div class="w-sm">
                    <TextField label="Enter something" placeholder="1234565" />
                  </div>
                  <div class="w-sm">
                    <TextField
                      label="Enter something"
                      placeholder="1234565"
                      error="Something bad happened"
                    />
                  </div>
                  <div class="w-sm">
                    <TextField label="Enter something">
                      <div q:slot="right" class="opacity-50">
                        <MdiAirHorn size={24} />
                      </div>
                    </TextField>
                  </div>
                  <div class="w-sm">
                    <TextField
                      label="Enter something"
                      error="Something bad happened"
                    >
                      <div q:slot="left" class="opacity-50">
                        <MdiAirHorn size={24} />
                      </div>
                    </TextField>
                  </div>
                  <div class="w-sm">
                    <TextField
                      label="Enter something on blur"
                      onBlur$={(_, error) => {
                        error.value = 'You blurred the input';
                      }}
                    ></TextField>
                  </div>
                  <div class="w-sm">
                    <TextField
                      label="Enter something in input"
                      onInput$={(_, error) => {
                        error.value = 'You typed something';
                      }}
                    ></TextField>
                  </div>
                </div>
              </div>

              <div class="w-full space-y-2">
                <div class="text-2xl">SelectField</div>
                <div class="flex flex-wrap gap-4">
                  <div class="w-sm">
                    <SelectField label="Select one">
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </SelectField>
                  </div>
                  <div class="w-sm">
                    <SelectField label="Select one">
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </SelectField>
                  </div>
                </div>
              </div>

              <div class="w-full space-y-2">
                <div class="text-2xl">CheckboxField</div>
                <div class="flex flex-wrap gap-4">
                  <div class="w-sm">
                    <CheckboxField label="Remember me" />
                  </div>
                  <div class="w-sm">
                    <CheckboxField label="Remember me" checked={true} />
                  </div>
                </div>
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

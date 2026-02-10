import {component$, useSignal} from '@builder.io/qwik';
import {PaceBar} from '../components/pace-bar';
import {AlertSuccess} from '../components/alert-success';
import {AlertWarning} from '../components/alert-warning';
import {AlertError} from '../components/alert-error';
import {AlertInfo} from '../components/alert-info';
import {Dialog} from '../components/dialog';
import {TextField} from '../components/text-field';
import {MdiAirHorn} from '@nr1e/qwik-icons';
import {CheckboxField} from '../components/checkbox-field';
import {SelectField} from '../components/select-field';
import {AddButton} from '../components/add-button';

export default component$(() => {
  const openDialog1 = useSignal(false);
  const openDialog2 = useSignal(false);
  const openDialog3 = useSignal(false);
  const openDialog4 = useSignal(false);
  const openDialog4Loading = useSignal(true);
  const dialog3Error = useSignal<string | undefined>(undefined);
  const dialog3Warning = useSignal<string | undefined>(undefined);
  const textFieldValue = useSignal<string | undefined | null>();
  const selectedFieldValue = useSignal<string | undefined | null>();
  const checkedFieldValue = useSignal<boolean>(false);
  return (
    <div class="flex flex-col items-center p-4">
      {/* eslint-disable-next-line qwik/jsx-img */}
      <img
        src="https://nr1e.com/images/logo-tagline.svg"
        alt="NR1E"
        class="mb-3 h-auto max-w-75"
      />
      <h1 class="text-4xl">Qwik UI</h1>

      {/* Navigation Links */}
      <div class="my-6 flex gap-4">
        <a href="/universal-layout-demo" target="_blank">
          <button class="btn btn-primary">View UniversalLayout Demo</button>
        </a>

        <a href="/menu-demo" target="_blank">
          <button class="btn btn-primary">View Menu Demo</button>
        </a>
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
            <button class="btn" onClick$={() => (openDialog1.value = true)}>
              Open
            </button>
            <button class="btn" onClick$={() => (openDialog2.value = true)}>
              Open title
            </button>
            <button class="btn" onClick$={() => (openDialog3.value = true)}>
              Open error
            </button>
            <button class="btn" onClick$={() => (openDialog4.value = true)}>
              Open loading
            </button>
          </div>
          <Dialog id="dialog1" open={openDialog1} showCloseIcon={true}>
            <div>Nothing to see here.</div>
            <button
              q:slot="action"
              class="btn"
              onClick$={() => (openDialog1.value = false)}
            >
              Close
            </button>
          </Dialog>
          <Dialog
            id="dialog2"
            open={openDialog2}
            showCloseIcon={true}
            title="Doing something"
          >
            <div>Nothing to see here.</div>
            <button
              class="btn"
              q:slot="action"
              onClick$={() => (openDialog2.value = false)}
            >
              Close
            </button>
          </Dialog>
          <Dialog
            id="dialog3"
            open={openDialog3}
            showCloseIcon={true}
            title="Doing something"
            warningMessage={dialog3Warning.value}
            errorMessage={dialog3Error.value}
            onOpen$={(e) => {
              console.log('Opened', e.id);
            }}
            onClose$={(e) => {
              console.log('Closed', e.id);
            }}
          >
            <div>Nothing to see here.</div>
            <button
              q:slot="action"
              class="btn btn-ghost"
              onClick$={() => {
                dialog3Warning.value = undefined;
                dialog3Error.value = undefined;
              }}
            >
              Clear
            </button>
            <button
              q:slot="action"
              class="btn"
              onClick$={() => (dialog3Warning.value = 'Warning message')}
            >
              Show Warning
            </button>
            <button
              q:slot="action"
              class="btn"
              onClick$={() => (dialog3Error.value = 'Error message')}
            >
              Show Error
            </button>
          </Dialog>
          <Dialog
            id="dialog2"
            open={openDialog4}
            loading={openDialog4Loading}
            showCloseIcon={true}
            title="Doing something"
          >
            <div>Nothing to see here.</div>
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
              <TextField label="Enter something" error="Something bad happened">
                <div q:slot="left" class="opacity-50">
                  <MdiAirHorn size={24} />
                </div>
              </TextField>
            </div>
            <div class="w-sm">
              <TextField
                label="Enter something on blur"
                onBlur$={(_, value, error) => {
                  error.value = `Input value is ${value}`;
                }}
              ></TextField>
            </div>
            <div class="w-sm">
              <TextField
                label="Enter something in input"
                onInput$={(_, value, error) => {
                  error.value = `Input value is ${value}`;
                }}
              ></TextField>
            </div>
            <div class="w-sm">
              <TextField
                label="Enter something in input"
                value={textFieldValue}
                onInput$={(_, value, error) => {
                  error.value = `Input value is ${value}`;
                }}
              ></TextField>
              {textFieldValue.value}
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
            <div class="w-sm">
              <SelectField label="Select one" error="Something bad happened">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </SelectField>
            </div>
            <div class="w-sm">
              <SelectField
                label="Make a selection"
                onChange$={(_, value, error) => {
                  error.value = `Selected value is ${value}`;
                }}
              >
                <option value="empty">Select something</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </SelectField>
            </div>
            <div class="w-sm">
              <SelectField
                value={selectedFieldValue}
                label="Make a selection"
                onChange$={(_, value, error) => {
                  error.value = `Selected value is ${value}`;
                }}
              >
                <option value="empty">Select something</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </SelectField>
              {selectedFieldValue.value}
            </div>
          </div>
        </div>

        <div class="w-full space-y-2">
          <div class="text-2xl">CheckboxField</div>
          <div class="flex flex-wrap gap-4">
            <div class="w-sm">
              <CheckboxField
                label="Remember me"
                onClick$={(_, checked) => {
                  console.log('Checked', checked);
                }}
              />
            </div>
            <div class="w-sm">
              <CheckboxField label="Remember me" checked={true} />
            </div>
            <div class="w-sm">
              <CheckboxField
                label="Remember me"
                checked={true}
                error="You have an error"
              />
            </div>
            <div class="w-sm">
              <CheckboxField
                label="Remember me"
                onClick$={(_, checked, error) => {
                  error.value = checked ? 'Checked' : 'Unchecked';
                }}
              />
            </div>
            <div class="w-sm">
              <CheckboxField
                checked={checkedFieldValue}
                label="Remember me"
                onClick$={(_, checked, error) => {
                  error.value = checked ? 'Checked' : 'Unchecked';
                }}
              />
              {checkedFieldValue.value ? 'Checked' : 'Unchecked'}
            </div>
          </div>
        </div>

        <div class="w-full space-y-2">
          <div class="text-2xl">Buttons</div>
          <div class="flex flex-wrap gap-4 space-y-2 space-x-2">
            <AddButton>Add something</AddButton>
            <AddButton class="btn-primary">Add something</AddButton>
          </div>
        </div>
      </div>
    </div>
  );
});

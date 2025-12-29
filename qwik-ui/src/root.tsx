import './global.css';
import {PaceBar} from './components/pace-bar';

export default () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>NR1E Qwik UI</title>
      </head>
      <body>
        <div class="flex flex-col items-center">
          <img
            src="https://nr1e.com/images/logo-tagline.svg"
            alt="NR1E"
            class="mb-3 h-auto max-w-75"
          />
          <h1 class="text-4xl">Qwik UI</h1>
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
          <div class="text-error">Moo</div>
        </div>
      </body>
    </>
  );
};

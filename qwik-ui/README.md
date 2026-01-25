<div style="background: gray; padding: 20px">
    <img width="200" src="https://nr1e.com/images/logo-tagline.svg" />
</div>

# Qwik UI Library ⚡️

This library contains approved UI components for use in NR1E projects.

## Installation

```bash
pnpm i @nr1e/qwik-ui
```

## Usage with Tailwind CSS 4.x

This library uses Tailwind CSS classes (with DaisyUI components). To ensure the classes are properly scanned and generated in your project, you need to import the library's styles configuration.

In your main CSS file (e.g., `src/global.css`):

```css
@import 'tailwindcss';
@import '@nr1e/qwik-ui/styles.css' source;

/* Your other styles */
```

This tells Tailwind v4 to scan the `@nr1e/qwik-ui` library files for class names and include DaisyUI plugin.

### Alternative: Manual Configuration

If you prefer more control, you can manually add the source path in your CSS:

```css
@import 'tailwindcss';

@source '../src';
@source '../../node_modules/@nr1e/qwik-ui/lib';
@plugin 'daisyui';
```

## @caripizza/ui
A design system and component library made with React, Typescript, and Tailwind CSS.

[Storybook-main](https://main--63376424914401d9d4d73e3b.chromatic.com/)\
[📦 npm](https://www.npmjs.com/package/@caripizza/ui) / [yarn](https://yarnpkg.com/package/@caripizza/ui)

## Get started

Install the UI library:
```bash
yarn add @caripizza/ui
# and peerDependencies in package.json
```

Add the stylesheet import to your entry-point file:
```tsx
import '@caripizza/ui/dist/output.css';

// or via html/CDN:
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@caripizza/ui@latest/dist/output.css"/>
```
---
## Features

### Typography
`@caripizza/ui` uses the Google [Arimo](https://fonts.google.com/share?selection.family=Arimo:wght@400;500;600) font family, and exposes the following [CSS Vars for fonts](./src/stories/atoms/Typography.stories.mdx):

| CSS Var | Value |
|---|---|
| `--font-sans` | `'Arimo', ui-sans-serif, system-ui, 'Helvetica Neue', sans-serif` |
| `--font-mono` | `'Menlo', ui-monospace, SFMono-Regular, 'Courier New', monospace` |
| `--font-weight-regular` | 400 |
| `--font-weight-medium` | 500 |
| `--font-weight-semibold` | 600 |
| `--font-size-xs` | `0.75rem (12px)` |
| `--font-size-sm` | `0.875rem (14px)` |
| `--font-size-base` | `1rem (16px)` |
| `--font-size-lg` | `1.125rem (18px)` |
| `--font-size-xl` | `1.25rem (20px)` |
| `--font-size-2xl` | `1.5rem (24px)` |
| `--font-size-3xl` | `1.875rem (30px)` |
| `--font-size-4xl` | `2.25rem (36px)` |
| `--font-size-5xl` | `3rem (48px)` |
| `--font-size-6xl` | `3.75rem (60px)` |

### Colors
The stylesheet also includes CSS Vars for colors:
| CSS Var | Description |
|---|---|
| `--color-turquoise` | primary button background colors |
| `--color-gold` | focus state outline color, secondary button |
| `--black-100` | light mode font color and dark mode background color |
| `--white-100` | light mode background color and dark mode font color |
| `--text-primary` | black if light mode, white if dark mode |
| `--backg-primary` | white if light mode, black if dark mode |

<br/>

Theme colors are also offered as hex codes:
```jsx
import { colors } from '@caripizza/ui';
// ...
<div
  style={{
    background: `linear-gradient(45deg, ${colors.dark.turquoise[100]}, ${colors.dark.gold[50]})`
  }}
>
```

### Dark mode
All components in the library include dark and light theme styles. To toggle dark mode, append the `dark` class name to an ancestor in the DOM and components will update their UI's accordingly:
```html
<body class="bg-backg-primary text-primary">
  <h1>I render with dark background if system theme is dark</h1>
  <script type="text/javascript">
    window.onload = () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.className += " dark";
      }
    }
  </script>
</body>
```

The library also includes utils for detecting a user's system theme:
```tsx
import { hasDarkSystemTheme } from '@caripizza/ui';

if (hasDarkSystemTheme()) {
  toggleDarkMode(true); // etc...
}
```
See the [Dark mode stories](./src/stories/theme) for detailed examples.

----
## Notes

### NextJS
Next configs need [`next-transpile-modules`](https://www.npmjs.com/package/next-transpile-modules) to transpile the module:
```js
/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@caripizza/ui']);
const nextConfig = { reactStrictMode: true };
module.exports = withTM(nextConfig);
```

----
## Contributing
TBD

----

## Resources
- [WIKI](https://github.com/caripizza/ui/wiki/Resources)
- [LICENSE](./LICENSE.txt)
- [CHANGELOG](./CHANGELOG.md)



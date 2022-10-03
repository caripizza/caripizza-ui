## @caripizza/ui
A design system and component library made with React, Typescript, and Tailwind CSS.

[Storybook](https://main--63376424914401d9d4d73e3b.chromatic.com/)\
[📦 npm](https://www.npmjs.com/package/@caripizza/ui)

## Get started

Install the UI library:
```bash
yarn add @caripizza/ui
# and peerDependencies in package.json
```

Add the stylesheet import to your entry-point file:
```tsx
import '@caripizza/ui/dist/output.css';
```

## Features

The stylesheet includes overrideable colors as [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), which library components inherit:
```js
  /* UI colors */
  --color-aqua // primary button background colors
  --color-fuschia // (unused)
  --black-100 // light mode font color and dark mode background color
  --white-100 // light mode background color and dark mode font color

  /* theme colors */
  --text-primary // black if light mode, white if dark mode
  --backg-primary // white if light mode, black if dark mode
```

Global colors are also offered as hex codes:
```jsx
import { colors } from '@caripizza/ui';
// ...
<div
  style={{
    background: `linear-gradient(45deg, ${colors.aqua[100]}, ${colors.fuschia[50]})`
  }}
>
```



To toggle dark mode, append the `dark` class name to an ancestor element so library components further down the DOM tree will inherit and update their UI's accordingly:
```tsx
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@caripizza/ui';

export default function MyComponent() {
  const parentRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      parentRef.current?.classList.add('dark')
    } else {
      parentRef.current?.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div ref={parentRef}>
      <input type="checkbox" onChange={() => setIsDarkMode(!isDarkMode)} checked={isDarkMode} />
      <Button text="Themed button" id="button-ex" />
    </div>
  );
}


```

Alternatively, library components can inherit based on system preference with the following style tag:
```html
<section>
  <style type="text/css">
    {`@media (prefers-color-scheme: dark) {
      :root #use-sys-theme {
        --text-primary: var(--white-100);
        --backg-primary: var(--black-100);
      }
    }`}
  </style>
  <div id='use-sys-theme' className='bg-backg-primary text-primary'>
    I'm auto-themed
  </div>
</section>
```

Or, `hasDarkSystemTheme` in utils/ can be used to programmatically detect `prefers-color-scheme: dark`:
```tsx
if (hasDarkSystemTheme()) {
  toggleDarkMode(true); // etc...
}
```

----

## NextJS
Next configs need `next-transpile-modules` to transpile the module:
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



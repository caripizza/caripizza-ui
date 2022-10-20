import React, { FC, useEffect, useState, useCallback, useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, getSystemTheme, ThemeMode } from '../..';

const Component: FC = () => <></>;

export default {
  title: 'Theme/Dark mode',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: `The story below demonstrates how to detect and inherit a dark system theme,
        and toggle it on or off via checkbox input. (Click **Show code** to inspect.)`,
      },
    },
  },
  args: {
    getSystemTheme: {},
    hasDarkSystemTheme: {},
  },
  argTypes: {
    getSystemTheme: {
      description:
        'returns the user\'s system theme, `"light" | "dark" | undefined`',
      control: { hidden: true },
    },
    hasDarkSystemTheme: {
      description: "returns `true` if user's system is dark, `false` if not",
    },
  },
} as ComponentMeta<typeof Component>;

export const Inherit: ComponentStory<typeof Component> = () => {
  /**
   * This React component demontrates how UI components can inherit dark mode
   * from the system theme on first render, and on subsequent renders based on state change.
   * (Separate from the dark mode toggle in top Storybook control menu.)
   * */
  const parentRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<{
    isDarkMode: boolean;
    prefersDarkMode: boolean;
    systemTheme: ThemeMode;
  }>({
    isDarkMode: false,
    prefersDarkMode: false,
    systemTheme: undefined,
  });

  /* Adds the `dark` class name to the parent div */
  const toggleDarkMode = useCallback((newValue: boolean) => {
    if (newValue) {
      parentRef.current?.classList.add('dark');
    } else {
      parentRef.current?.classList.remove('dark');
    }
  }, []);

  /* On first render, toggles dark mode if system theme is dark */
  useEffect(() => {
    /** @see `getSystemTheme` in utils/ */
    const sysTheme = getSystemTheme();

    if (sysTheme) {
      setState({ ...state, systemTheme: sysTheme });

      if (sysTheme === 'dark' && !state.isDarkMode) {
        setState({
          ...state,
          prefersDarkMode: true,
          isDarkMode: true,
          systemTheme: sysTheme,
        });
        toggleDarkMode(true);
      }
    }
  }, []);

  /* Allow overriding dark mode with the checkbox input */
  const handleThemeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      const { checked } = event.target;
      setState({ ...state, isDarkMode: checked });
      toggleDarkMode(checked);
    }
  };

  return (
    <div
      ref={parentRef}
      className='bg-backg-primary text-primary grid grid-cols-1 p-8 h-[450px] md:max-h-96 sm:w-5/6 overflow-auto'
    >
      System theme: {JSON.stringify(state.systemTheme)}
      <label
        htmlFor='dark-mode'
        className='flex justify-evenly w-48 text-primary'
      >
        Dark mode: <strong>{state.isDarkMode ? 'on' : 'off'}</strong>
        <input
          type='checkbox'
          onChange={handleThemeToggle}
          id='dark-mode'
          checked={state.isDarkMode}
          className='w-6 h-6'
        />
      </label>
      <div
        className={`opacity-${
          state.systemTheme ? '100' : '0'
        } transition-opacity duration-1000`}
      >
        <Button
          text={`${state.isDarkMode ? 'Dark' : 'Light'} mode button`}
          id='dark-ex'
        />
      </div>
      <p>
        This UI library uses a combination of&nbsp;
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 dark:text-blue-500'
        >
          CSS media queries
        </a>
        ,&nbsp;
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 dark:text-blue-500'
        >
          CSS Custom Properties
        </a>
        ,&nbsp;and&nbsp;
        <a
          href='https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 dark:text-blue-500'
        >
          Tailwind's <strong>dark</strong> mode class
        </a>
        &nbsp;strategy.
      </p>
      <p>
        When the <strong>dark</strong> class is appended to an ancestor in the
        DOM, components inherit colors from the &nbsp;
        <code className='whitespace-nowrap'>--text-primary</code> and&nbsp;
        <code className='whitespace-nowrap'>--backg-primary</code> CSS Vars,
        which toggle from
        <a
          href='https://github.com/caripizza/ui/blob/main/src/input.css#L12-L17'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 dark:text-blue-500'
        >
          &nbsp;white to black based on dark mode
        </a>
        .
      </p>
    </div>
  );
};

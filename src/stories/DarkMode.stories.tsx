import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, hasDarkSystemTheme } from '../';

export default {
  title: 'Theme/Dark Mode',
  component: Button,
} as ComponentMeta<typeof Button>;

export const DarkMode: ComponentStory<typeof Button> = () => {
  /**
   * This React component demontrates how UI components can inherit dark mode
   * from the system theme on first render, and on subsequent renders based on state change.
   * (Separate from the dark mode toggle in top Storybook control menu.)
   * */
  const parentRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<{
    isDarkMode: boolean;
    prefersDarkMode: boolean;
  }>({
    isDarkMode: false,
    prefersDarkMode: false,
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
    /** @see `hasDarkSystemTheme` in utils/ */
    if (hasDarkSystemTheme() && !state.isDarkMode) {
      setState({ isDarkMode: true, prefersDarkMode: true });
      toggleDarkMode(true);
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
    <div ref={parentRef}>
      <label htmlFor='dark-mode' className='flex justify-evenly w-48'>
        Dark mode: {JSON.stringify(state.isDarkMode)}
        <input
          type='checkbox'
          onChange={handleThemeToggle}
          id='dark-mode'
          checked={state.isDarkMode}
        />
      </label>
      {state.isDarkMode && <Button text='Dark mode button' id='dark-ex' />}
      {!state.isDarkMode && <Button text='Light mode button' id='light-ex' />}
    </div>
  );
};

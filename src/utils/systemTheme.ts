import type { ThemeMode } from '../theme';

export const getSystemTheme = (): ThemeMode => {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
  }
};

export const hasDarkSystemTheme = (): boolean => {
  return getSystemTheme() === 'dark';
};

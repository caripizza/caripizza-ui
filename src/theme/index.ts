import { Colors, colors, Typography, typography } from '../atoms';

type ThemeType = 'light' | 'dark';
type ThemeMode = ThemeType | undefined;
type ThemeColors = Colors['light'] | Colors['dark'];

type Theme = {
  mode: ThemeMode;
  colors: ThemeColors;
};

interface Themes {
  light: Theme;
  dark: Theme;
  typography: Typography;
}

const lightTheme: Theme = {
  mode: 'light',
  colors: colors.light,
};

const darkTheme: Theme = {
  mode: 'dark',
  colors: colors.dark,
};

const themes: Themes = {
  light: lightTheme,
  dark: darkTheme,
  typography,
};

export { ThemeType, ThemeMode, Theme, themes, lightTheme, darkTheme };

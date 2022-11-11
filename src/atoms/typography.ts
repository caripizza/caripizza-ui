import type { DefaultTheme } from 'tailwindcss/types/generated/default-theme';

type FontFamily = Omit<DefaultTheme['fontFamily'], 'serif'>;

type LineHeight =
  | '1rem'
  | '1.25rem'
  | '1.5rem'
  | '1.75rem'
  | '1.75rem'
  | '2rem'
  | '2.25rem'
  | '2.5rem'
  | '1';

type FontSizeKey =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

type FontSizeRem =
  | '0.75rem'
  | '0.875rem'
  | '1rem'
  | '1.125rem'
  | '1.25rem'
  | '1.5rem'
  | '1.875rem'
  | '2.25rem'
  | '3rem'
  | '3.75rem';

type FontSize = {
  [key in FontSizeKey]: [FontSizeRem | string, { lineHeight: LineHeight }];
};

type FontWeight =
  | Omit<
      DefaultTheme['fontWeight'],
      | 'thin'
      | 'extralight'
      | 'light'
      | 'normal'
      | 'bold'
      | 'extrabold'
      | 'black'
    >
  | Record<'regular', string>;

type Typography = {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
};

type FontSizes = Record<FontSizeKey | string, number>;

const fontSizesRem: FontSizes = {
  xs: 0.75, // (12px)
  sm: 0.875, // (14px)
  base: 1, // (16px)
  lg: 1.125, // (18px)
  xl: 1.25, // (20px)
  '2xl': 1.5, // (24px)
  '3xl': 1.875, // (30px)
  '4xl': 2.25, // (36px)
  '5xl': 3, // (48px)
  '6xl': 3.75, // (60px)
};

const getFontSizesPx = (): FontSizes => {
  const all: FontSizes = {};
  Object.entries(fontSizesRem).forEach((el) => {
    all[el[0]] = el[1] * 16;
  });
  return all;
};

const fontSizesPx = getFontSizesPx();

const typography: Typography = {
  fontFamily: {
    sans: [
      '"Arimo"',
      'ui-sans-serif',
      'system-ui',
      '"Helvetica Neue"',
      'sans-serif',
    ],
    mono: [
      'Menlo',
      'ui-monospace',
      'SFMono-Regular',
      '"Courier New"',
      'monospace',
    ],
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
  },
  fontSize: {
    xs: [`${fontSizesRem['xs']}rem`, { lineHeight: '1rem' }],
    sm: [`${fontSizesRem['sm']}rem`, { lineHeight: '1.25rem' }],
    base: [`${fontSizesRem['base']}rem`, { lineHeight: '1.5rem' }],
    lg: [`${fontSizesRem['lg']}rem`, { lineHeight: '1.75rem' }],
    xl: [`${fontSizesRem['xl']}rem`, { lineHeight: '1.75rem' }],
    '2xl': [`${fontSizesRem['2xl']}rem`, { lineHeight: '2rem' }],
    '3xl': [`${fontSizesRem['3xl']}rem`, { lineHeight: '2.25rem' }],
    '4xl': [`${fontSizesRem['4xl']}rem`, { lineHeight: '2.5rem' }],
    '5xl': [`${fontSizesRem['5xl']}rem`, { lineHeight: '1' }],
    '6xl': [`${fontSizesRem['6xl']}rem`, { lineHeight: '1' }],
  },
};

export type { Typography, FontSizeKey };
export { fontSizesRem, fontSizesPx, typography };

type ColorShade = 25 | 50 | 75 | 100;
type ColorKey = 'turquoise' | 'gold' | 'hot-pink';

type LightThemeHexColor =
  /** --turquoise-- */
  | '#00b0c940' // 25
  | '#00b0c980' // 50
  | '#00b0c9bf' // 75
  | '#00b0c9' // 100
  /** --gold-- */
  | '#ffa30040' // 25
  | '#ffa30080' // 50
  | '#ffa300bf' // 75
  | '#ffa300' // 100
  /** --hot-pink-- */
  | '#ff165440' // 25
  | '#ff165480' // 50
  | '#ff1654bf' // 75
  | '#ff1654'; // 100

type DarkThemeHexColor =
  /** --turquoise-- */
  | '#00829940' // 25
  | '#00829980' // 50
  | '#008299bf' // 75
  | '#008299' // 100
  /** --gold-- */
  | '#a35f0040' // 25
  | '#a35f0080' // 50
  | '#a35f00bf' // 75
  | '#a35f00' // 100
  /** --hot-pink-- */
  | '#c4002c40' // 25
  | '#c4002c80' // 50
  | '#c4002cbf' // 75
  | '#c4002c'; // 100

type LightThemeColors = {
  [key in ColorKey]: {
    [key in ColorShade]: LightThemeHexColor;
  };
} & {
  turquoise: {
    25: '#00b0c940';
    50: '#00b0c980';
    75: '#00b0c9bf';
    100: '#00b0c9';
  };
  gold: {
    25: '#ffa30040';
    50: '#ffa30080';
    75: '#ffa300bf';
    100: '#ffa300';
  };
  'hot-pink': {
    25: '#ff165440';
    50: '#ff165480';
    75: '#ff1654bf';
    100: '#ff1654';
  };
};

type DarkThemeColors = {
  [key in ColorKey]: {
    [key in ColorShade]: DarkThemeHexColor;
  };
} & {
  turquoise: {
    25: '#00829940';
    50: '#00829980';
    75: '#008299bf';
    100: '#008299';
  };
  gold: {
    25: '#a35f0040';
    50: '#a35f0080';
    75: '#a35f00bf';
    100: '#a35f00';
  };
  'hot-pink': {
    25: '#c4002c40';
    50: '#c4002c80';
    75: '#c4002cbf';
    100: '#c4002c';
  };
};

export interface Colors {
  light: LightThemeColors;
  dark: DarkThemeColors;
}

export const colors: Colors = {
  light: {
    turquoise: {
      25: '#00b0c940',
      50: '#00b0c980',
      75: '#00b0c9bf',
      100: '#00b0c9',
    },
    gold: {
      25: '#ffa30040',
      50: '#ffa30080',
      75: '#ffa300bf',
      100: '#ffa300',
    },
    'hot-pink': {
      25: '#ff165440',
      50: '#ff165480',
      75: '#ff1654bf',
      100: '#ff1654',
    },
  },
  dark: {
    turquoise: {
      25: '#00829940',
      50: '#00829980',
      75: '#008299bf',
      100: '#008299',
    },
    gold: {
      25: '#a35f0040',
      50: '#a35f0080',
      75: '#a35f00bf',
      100: '#a35f00',
    },
    'hot-pink': {
      25: '#c4002c40',
      50: '#c4002c80',
      75: '#c4002cbf',
      100: '#c4002c',
    },
  },
};

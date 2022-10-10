type ColorShade = 25 | 50 | 75 | 100;
type ColorKey = 'turquoise' | 'gold';

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
  | '#ffa300'; // 100

type DarkThemeHexColor =
  /** --turquoise-- */
  | '#00809840' // 25
  | '#00809880' // 50
  | '#008098bf' // 75
  | '#008098' // 100
  /** --gold-- */
  | '#a5680040' // 25
  | '#a5680080' // 50
  | '#a56800bf' // 75
  | '#a56800'; // 100

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
};

type DarkThemeColors = {
  [key in ColorKey]: {
    [key in ColorShade]: DarkThemeHexColor;
  };
} & {
  turquoise: {
    25: '#00809840';
    50: '#00809880';
    75: '#008098bf';
    100: '#008098';
  };
  gold: {
    25: '#a5680040';
    50: '#a5680080';
    75: '#a56800bf';
    100: '#a56800';
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
  },
  dark: {
    turquoise: {
      25: '#00809840',
      50: '#00809880',
      75: '#008098bf',
      100: '#008098',
    },
    gold: {
      25: '#a5680040',
      50: '#a5680080',
      75: '#a56800bf',
      100: '#a56800',
    },
  },
};

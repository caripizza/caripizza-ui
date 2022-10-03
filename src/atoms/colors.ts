type ColorKey = 'aqua' | 'fuschia';

type ColorHexCode = '#00d7ff80' | '#00d7ff' | '#d6219880' | '#d62198';

export type Colors = {
  [key in ColorKey]: { [key: number]: ColorHexCode };
};

export const colors: Colors = {
  aqua: {
    50: '#00d7ff80',
    100: '#00d7ff',
  },
  fuschia: {
    50: '#d6219880',
    100: '#d62198',
  },
};

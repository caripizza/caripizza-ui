import { colors } from '..';

describe('colors', () => {
  describe('should include custom `turquoise` colors', () => {
    it('should have light theme values', () => {
      expect(colors.light.turquoise).toEqual({
        '100': '#00b0c9',
        '25': '#00b0c940',
        '50': '#00b0c980',
        '75': '#00b0c9bf',
      });
    });

    it('should have dark theme values', () => {
      expect(colors.dark.turquoise).toEqual({
        '100': '#008299',
        '25': '#00829940',
        '50': '#00829980',
        '75': '#008299bf',
      });
    });
  });

  describe('should include custom `gold` colors', () => {
    it('should have light theme values', () => {
      expect(colors.light.gold).toEqual({
        '100': '#ffa300',
        '25': '#ffa30040',
        '50': '#ffa30080',
        '75': '#ffa300bf',
      });
    });

    it('should have dark theme values', () => {
      expect(colors.dark.gold).toEqual({
        '100': '#a35f00',
        '25': '#a35f0040',
        '50': '#a35f0080',
        '75': '#a35f00bf',
      });
    });
  });

  describe('should include custom `hot-pink` colors', () => {
    it('should have light theme values', () => {
      expect(colors.light['hot-pink']).toEqual({
        '100': '#ff1654',
        '25': '#ff165440',
        '50': '#ff165480',
        '75': '#ff1654bf',
      });
    });

    it('should have dark theme values', () => {
      expect(colors.dark['hot-pink']).toEqual({
        '100': '#c4002c',
        '25': '#c4002c40',
        '50': '#c4002c80',
        '75': '#c4002cbf',
      });
    });
  });
});

import { colors } from '../';

describe('colors', () => {
  it('should include custom `turquoise` colors', () => {
    expect(colors.light.turquoise).toEqual({
      '100': '#00b0c9',
      '25': '#00b0c940',
      '50': '#00b0c980',
      '75': '#00b0c9bf',
    });
    expect(colors.dark.turquoise).toEqual({
      '100': '#008098',
      '25': '#00809840',
      '50': '#00809880',
      '75': '#008098bf',
    });
  });

  it('should include custom `gold` colors', () => {
    expect(colors.light.gold).toEqual({
      '100': '#ffa300',
      '25': '#ffa30040',
      '50': '#ffa30080',
      '75': '#ffa300bf',
    });
    expect(colors.dark.gold).toEqual({
      '100': '#a56800',
      '25': '#a5680040',
      '50': '#a5680080',
      '75': '#a56800bf',
    });
  });
});

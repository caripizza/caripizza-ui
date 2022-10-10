import { darkTheme, lightTheme, themes } from '../';

describe('theme', () => {
  it('should have a light theme', () => {
    expect(themes.light).toMatchObject(lightTheme);
  });

  it('should have a dark theme', () => {
    expect(themes.dark).toMatchObject(darkTheme);
  });
});

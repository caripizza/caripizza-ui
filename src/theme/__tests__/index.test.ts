import theme from '../';

describe('theme', () => {
  it('should have a default theme mode', () => {
    expect(theme.mode).toEqual('light');
  });
});

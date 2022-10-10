import { hasDarkSystemTheme, getSystemTheme } from '../';
import { ThemeMode } from '../../theme';

describe('utils', () => {
  let sysTheme: ThemeMode;

  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === `(prefers-color-scheme: ${sysTheme})`,
        media: query,
      })),
    });
  });

  describe('when system theme is set to `dark` mode', () => {
    beforeEach(() => {
      sysTheme = 'dark';
    });

    describe('hasDarkSystemTheme', () => {
      it('should return true', () => {
        expect(hasDarkSystemTheme()).toEqual(true);
      });
    });

    describe('getSystemTheme', () => {
      it('should return `dark` for system theme', () => {
        expect(getSystemTheme()).toEqual('dark');
      });
    });
  });

  describe('when system theme is set to `light` mode', () => {
    beforeEach(() => {
      sysTheme = 'light';
    });

    describe('hasDarkSystemTheme', () => {
      it('should return false', () => {
        expect(hasDarkSystemTheme()).toEqual(false);
      });
    });

    describe('getSystemTheme', () => {
      it('should return `light` for system theme', () => {
        expect(getSystemTheme()).toEqual('light');
      });
    });
  });

  describe('when no theme is found from query', () => {
    beforeEach(() => {
      sysTheme = undefined;
    });

    describe('hasDarkSystemTheme', () => {
      it('should return false', () => {
        expect(hasDarkSystemTheme()).toEqual(false);
      });
    });

    describe('getSystemTheme', () => {
      it('should return undefined for system theme', () => {
        expect(getSystemTheme()).toEqual(undefined);
      });
    });
  });
});

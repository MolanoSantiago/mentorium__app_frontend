/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#011C5B';
const tintColorDark = '#f3f3f3';

export const Colors = {
  light: {
    text: '#011C5B',
    background: '#f3f3f3',
    tint: tintColorLight,
    icon: '#1D1D1B',
    tabIconDefault: '#1D1D1B',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#f3f3f3',
    background: '#011C5B',
    tint: tintColorDark,
    icon: '#1D1D1B',
    tabIconDefault: '#1D1D1B',
    tabIconSelected: tintColorDark,
  },
};

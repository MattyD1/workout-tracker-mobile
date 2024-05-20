import type { Theme } from '@react-navigation/native'
import { DarkTheme as _DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'

import colors from './colors'

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    primary: colors.primary.dark.foreground,
    background: colors.primary.dark.DEFAULT,
    text: colors.secondary.dark.foreground,
    card: colors.secondary.dark.DEFAULT,
  },
}

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary.foreground,
    background: colors.primary.DEFAULT,
    text: colors.secondary.foreground,
    card: colors.secondary.DEFAULT,
  },
}

export function useThemeConfig() {
  const { colorScheme } = useColorScheme()

  if (colorScheme === 'dark') return DarkTheme

  return LightTheme
}

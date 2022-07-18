import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'Dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export { theme }
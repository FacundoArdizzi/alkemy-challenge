import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const colors = {
  gray: '#DCDCDC',
  darkGray: '#C4C4C4', 
  primary: '#00CDB8',
  primaryWithTransparence: 'rgba(0, 205, 184, .5 )',
  red: '#E50000',
  green: '#00E515',
}

const theme = extendTheme({
  colors,
})

export default theme
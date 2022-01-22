import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        overflowX: 'hidden',
      }
    },
  },
  colors: {
    gray: '#DCDCDC',
    darkGray: '#C4C4C4', 
    primary: '#00CDB8',
    primaryWithTransparence: 'rgba(0, 205, 184, .5 )',
    red: '#E50000',
    green: '#00E515',
  }
})

export default theme
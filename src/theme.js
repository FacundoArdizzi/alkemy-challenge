import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        overflowY: 'hidden',
      }
    },
  },
  colors: {
    gray: '#ECECEC',
    darkGray: '#C4C4C4'
  }
})

export default theme
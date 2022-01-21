import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
)

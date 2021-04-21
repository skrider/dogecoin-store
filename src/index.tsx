import React from 'react';
import ReactDOM from 'react-dom';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import App from './App';

const theme = extendTheme({
  colors: {
    blue: '#161f36',
    yellow: '#e3ae14'
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

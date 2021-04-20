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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

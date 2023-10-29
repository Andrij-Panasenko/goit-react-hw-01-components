import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: "#ffffff",
    red: "red",
    green: "green",
    aqua: "#51e8c5",
    lightGrey: "#04040414",
    darkGrey: "#848a89",
    grey: "#c9d1d0",
    profileLightTextColor: "#00000085",
    profileBcgColor: "#f6f8fa",
  },

  spacing: value => `${value * 4}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

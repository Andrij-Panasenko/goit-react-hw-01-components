import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    red: "red",
    green: "green",
    teal: "teal",
    lightGrey: "#0404044a",
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

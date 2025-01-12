import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/homepage';
import { createTheme, ThemeProvider } from '@mui/material';
import { green, orange, purple } from '@mui/material/colors';

import '@fontsource/roboto';
import '@fontsource/delius';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: '"Delius", "Roboto", "Inter", "Arial", sans-serif',
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>
);

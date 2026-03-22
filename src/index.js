import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// *** 1. IMPORT THE UNIFIED THEME (theme.js) ***
import theme from './theme'; // Import the unified dark engineering theme we designed

// *** 2. IMPORT THE MATERIAl-UI THEME PROVIDER & BASELINE ***
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Standardizes browser styles for dark mode

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* *** 3. WRAP APP with the ThemeProvider and CssBaseline *** */}
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Important for applying dark background color globally */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
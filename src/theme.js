import { createTheme } from '@mui/material/styles';

// *** 1. ADD REFINED COLORS FOR SENIOR DARK AESTHETIC ***
const primaryTeal = '#00CEC9'; // Vibrant teal for accents, links, CTAs
const secondaryYellow = '#FFEB3B'; // High-contrast yellow for critical details (a11y)
const darkBackground = '#121212'; // Deep grey matching your other container backgrounds
const surfaceBackground = '#1E1E1E'; // Slightly lighter dark surface matching page elements

const theme = createTheme({
  palette: {
    // *** 2. CHANGE MODE TO DARK ***
    mode: 'dark', 
    primary: {
      // *** 3. REFINED PRIMARY COLOR ***
      main: primaryTeal, 
      light: '#62FFF2',
      dark: '#01A3A3',
      contrastText: '#121212', // Dark text on light teal surface
    },
    secondary: {
      // *** 4. HIGH-CONTRAST SECONDARY COLOR (for highlights/calls-to-action) ***
      main: secondaryYellow, 
      light: '#FFFF72',
      dark: '#C8B900',
      contrastText: '#121212', // Dark text on light yellow surface
    },
    background: {
      // *** 5. UNIFIED DARK BACKGROUND PALETTE ***
      default: darkBackground, 
      paper: surfaceBackground, 
    },
    text: {
      // *** 6. HIGH-READABILITY TEXT COLORS ***
      primary: '#FFFFFF', // Clean white for main text
      secondary: 'rgba(255, 255, 255, 0.7)', // Muted text for subtle focus
      disabled: 'rgba(255, 255, 255, 0.5)', 
    },
    action: {
        // High-contrast teal for action highlights
        active: primaryTeal,
        hover: 'rgba(0, 206, 201, 0.08)',
        selected: 'rgba(0, 206, 201, 0.16)',
    },
    divider: 'rgba(255, 255, 255, 0.05)', // Ultra-subtle divider line highlight
  },
  typography: {
    // *** 7. REFINED SANS-SERIF FONT FAMILY ***
    fontFamily: "'Inter', sans-serif", 
    // Stronger header bold weight
    fontWeightBold: 800, 
    // Clear, assertive heading style
    h1: { fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' },
    h2: { fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' },
    h3: { fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' },
    h4: { fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' },
    h5: { fontWeight: 700, textTransform: 'uppercase' },
    h6: { fontWeight: 600, textTransform: 'uppercase' },
    subtitle1: { fontWeight: 600, letterSpacing: '0.5px' },
    subtitle2: { fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' },
    body1: { lineHeight: 1.8 },
    body2: { lineHeight: 1.7 },
    button: { fontWeight: 700, textTransform: 'none' }, // Clean buttons, standard case
  },
  components: {
      // Subtle modern border to Paper/Card surfaces for refinement
      MuiPaper: {
          styleOverrides: {
              root: {
                  backgroundImage: 'none', // Remove modern linear surface gradient
                  border: `1px solid rgba(255, 255, 255, 0.03)`, // Ultra subtle border highlight
                  borderRadius: '24px', // Modern corner radius consistent throughout
              }
          }
      },
      // Restyled buttons consistent with your page designs
      MuiButton: {
          styleOverrides: {
              root: {
                  borderRadius: '30px', // Standard modern rounded button
                  padding: '12px 24px',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                      transform: 'translateY(-2px)', // Subtle hover interaction
                  },
              },
              containedPrimary: {
                  // High-contrast clean style
                  backgroundColor: primaryTeal,
                  color: '#121212',
                  '&:hover': {
                      backgroundColor: '#01A3A3', // Darker teal hover
                  },
              },
              outlinedPrimary: {
                  borderColor: primaryTeal,
                  color: primaryTeal,
                  '&:hover': {
                      borderColor: primaryTeal,
                      background: 'rgba(0, 206, 201, 0.1)',
                  },
              }
          }
      },
      // Polished dark chips
      MuiChip: {
          styleOverrides: {
              root: {
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: primaryTeal,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  borderRadius: '16px',
              }
          }
      }
  }
});

export default theme;
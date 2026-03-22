import React from 'react';
import { Box, Typography } from '@mui/material';

// *** 1. ADD REFINED FONTS & COLORS FOR SENIOR AESTHETIC ***
const primaryFont = "'Inter', sans-serif"; // Recommended: load this font in index.html
const primaryTeal = '#00CEC9'; // Vibrant teal for accents (like your name)
const surfaceBackground = '#1E1E1E'; // Deep grey matching other page surface backgrounds

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6, // Comfortable, premium vertical padding
        mt: 12, // More spacing above the footer for breathing room
        textAlign: 'center',
        // *** 2. CHANGE BACKGROUND TO MINIMAL DARK SURFACE ***
        background: surfaceBackground, 
        color: 'rgba(255, 255, 255, 0.6)', // Muted text for subtle detail
        borderTop: `1px solid rgba(255, 255, 255, 0.03)`, // Subtle border highlight
        boxShadow: '0 -10px 40px rgba(0,0,0,0.3)', // Clean shadow direction
      }}
    >
      <Typography 
        variant="subtitle2" // Slightly stronger professional variant
        sx={{
            fontWeight: 500, // Medium weight for readability
            fontFamily: primaryFont, // Clean sans-serif font
            letterSpacing: '0.5px', // Modern kerning
            textTransform: 'uppercase', // Assertive footer detail
        }}
      >
        &copy; {new Date().getFullYear()} 
        {/* Stylized name highlight in Teal */}
        <span style={{ color: primaryTeal, fontWeight: 700 }}> Ansithamol</span>. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
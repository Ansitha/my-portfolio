import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// *** 1. ADD REFINED FONTS & COLORS FOR SENIOR AESTHETIC ***
const primaryFont = "'Inter', sans-serif"; // Recommended: load this font in index.html
const primaryTeal = '#00CEC9'; // Vibrant teal for accents
const darkSurface = '#1E1E1E'; // Deep grey matching your other container backgrounds

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Technical Showcase', path: '/projects' }, // *** 2. SENIOR LEVEL COPY (Outcome focus) ***
  { label: 'Expertise & Impact', path: '/resume' }, // *** 3. SENIOR LEVEL COPY (Focus on contribution) ***
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      sx={{
        // *** 4. CHANGE BACKGROUND TO MINIMAL DARK SURFACE ***
        background: darkSurface, 
        px: { xs: 2, md: 6 },
        py: 1.5,
        borderBottom: `1px solid rgba(255, 255, 255, 0.03)`, // Subtle border highlight
        boxShadow: '0 8px 30px rgba(0,0,0,0.3)', // Clean shadow
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800, // Very bold
            letterSpacing: 2, // Modern kerning
            color: 'white',
            // *** 5. REFINED SANS-SERIF FONT ***
            fontFamily: primaryFont, 
            textTransform: 'uppercase', // Bold, assertive style
          }}
        >
          {/* Stylized Logo 'A' + Name */}
          <span style={{ color: primaryTeal, fontWeight: 900 }}>A</span>
          nsithamol
        </Typography>

        <Box sx={{ display: 'flex', gap: 3 }}>
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              // Enhanced subtle hover interaction
              whileHover={{ y: -3 }}
              style={{ display: 'inline-block' }}
            >
              <Button
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  fontFamily: primaryFont,
                  fontWeight: 600, // Slightly bolder for structure
                  textTransform: 'uppercase', // Bold navigation
                  fontSize: '0.9rem',
                  px: 2,
                  py: 1,
                  // *** 6. REFINED ACTIVE INDICATOR (Teal instead of Yellow) ***
                  borderBottom:
                    location.pathname === item.path
                      ? `3px solid ${primaryTeal}` // Teal active bar
                      : '3px solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderBottom: `3px solid ${primaryTeal}`,
                    color: primaryTeal, // Hover text color change
                  },
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
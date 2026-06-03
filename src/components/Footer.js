import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const primaryFont = "'Inter', sans-serif";

const Footer = () => {
  const theme = useTheme();

  const bg = theme.palette.background.paper;
  const textSecondary = theme.palette.text.secondary;
  const accent = theme.palette.primary.main;
  const borderColor = `${theme.palette.text.primary}15`;

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 12,
        textAlign: 'center',
        background: bg,
        color: textSecondary,
        borderTop: `1px solid ${borderColor}`,
        boxShadow: '0 -10px 40px rgba(0,0,0,0.15)',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 500,
          fontFamily: primaryFont,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}
      >
        &copy; {new Date().getFullYear()}
        <span style={{ color: accent, fontWeight: 700 }}> Ansithamol</span>. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

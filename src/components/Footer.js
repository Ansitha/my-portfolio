import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 10,
        textAlign: 'center',
        background: 'linear-gradient(135deg, #42a5f5 0%, #7e57c2 100%)',
        color: 'white',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Ansithamol. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

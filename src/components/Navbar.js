import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(90deg, #42a5f5, #7e57c2)',
        px: { xs: 2, md: 6 },
        py: 1.5,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            letterSpacing: 1,
            color: 'white',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Ansithamol
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ y: -2 }}
              style={{ display: 'inline-block' }}
            >
              <Button
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  borderBottom:
                    location.pathname === item.path
                      ? '3px solid #ffeb3b'
                      : '3px solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderBottom: '3px solid #ffeb3b',
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

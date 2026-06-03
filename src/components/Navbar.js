import React, { useContext, useState } from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

import { ThemeContext } from "../context/ThemeContextProvider";

const primaryFont = "'Inter', sans-serif";

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Technical Showcase', path: '/projects' },
  { label: 'Expertise & Impact', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const { themeName, changeTheme } = useContext(ThemeContext);

  const bg = theme.palette.background.paper;
  const textPrimary = theme.palette.text.primary;
  const accent = theme.palette.primary.main;
  const borderColor = `${textPrimary}15`;
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar
      position="sticky"
      sx={{
        background: bg,
        px: { xs: 2, md: 6 },
        py: 1.5,
        borderBottom: `1px solid ${borderColor}`,
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            letterSpacing: 2,
            color: textPrimary,
            fontFamily: primaryFont,
            textTransform: 'uppercase',
            fontSize: { xs: '1.1rem', md: '1.5rem' },
          }}
        >
          <span style={{ color: accent }}>A</span>nsithamol
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ color: textPrimary }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={open}
              onClose={() => setOpen(false)}
            >
              <Box sx={{ width: 280 }}>
                <List>
                  {navItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={item.path}
                        onClick={() => setOpen(false)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}

                  <Box sx={{ p: 2 }}>
                    <FormControl fullWidth size="small">
                      <Select
                        value={themeName}
                        onChange={(e) =>
                          changeTheme(e.target.value)
                        }
                      >
                        <MenuItem value="dark">Dark</MenuItem>
                        <MenuItem value="light">Light</MenuItem>
                        <MenuItem value="blue">Ocean Blue</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                alignItems: 'center',
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: textPrimary,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    borderBottom:
                      location.pathname === item.path
                        ? `3px solid ${accent}`
                        : '3px solid transparent',
                  }}
                >
                  {item.label}
                </Button>
              ))}



              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  p: 0.5,
                  borderRadius: '999px',
                  border: `1px solid ${borderColor}`,
                  backgroundColor: theme.palette.background.default,
                }}
              >
                {[
                  {
                    key: 'light',
                    icon: <LightModeIcon fontSize="small" />,
                  },
                  {
                    key: 'dark',
                    icon: <DarkModeIcon fontSize="small" />,
                  },
                  {
                    key: 'blue',
                    icon: <WaterDropIcon fontSize="small" />,
                  },
                ].map((item) => {
                  const active = themeName === item.key;

                  return (
                    <IconButton
                      key={item.key}
                      onClick={() => changeTheme(item.key)}
                      size="small"
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        color: active ? '#fff' : textPrimary,
                        backgroundColor: active ? accent : 'transparent',
                        transition: 'all 0.25s ease',

                        '&:hover': {
                          backgroundColor: active
                            ? accent
                            : `${accent}15`,
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  );
                })}
              </Box>
            </Box>

          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

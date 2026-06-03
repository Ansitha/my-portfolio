import React, { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Divider,
} from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import MenuIcon from '@mui/icons-material/Menu';

import { Link, useLocation } from 'react-router-dom';
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
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          }}
        >
          <span style={{ color: accent }}>A</span>nsithamol
        </Typography>

        {/* MOBILE NAVIGATION */}
        {isMobile ? (
          <>
            <IconButton onClick={() => setOpen(true)} sx={{ color: textPrimary }}>
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={open}
              onClose={() => setOpen(false)}
              PaperProps={{
                sx: {
                  width: 280,
                  background: theme.palette.background.default,
                  color: textPrimary,
                  p: 2,
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: primaryFont,
                  fontWeight: 700,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >
                Menu
              </Typography>

              <Divider sx={{ mb: 2, borderColor: borderColor }} />

              <List>
                {navItems.map((item) => {
                  const active = location.pathname === item.path;

                  return (
                    <ListItem key={item.path} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        sx={{
                          borderRadius: 2,
                          mb: 1,
                          background: active ? `${accent}22` : 'transparent',
                          '&:hover': {
                            background: `${accent}15`,
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontFamily: primaryFont,
                            fontWeight: active ? 700 : 500,
                            color: active ? accent : textPrimary,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>

              <Divider sx={{ my: 2, borderColor: borderColor }} />

              {/* Mobile Theme Switcher */}
              <Typography
                sx={{
                  fontFamily: primaryFont,
                  fontWeight: 600,
                  mb: 1,
                  opacity: 0.7,
                }}
              >
                Theme
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 1.5,
                  alignItems: 'center',
                  p: 1,
                  borderRadius: '12px',
                  border: `1px solid ${borderColor}`,
                  backgroundColor: theme.palette.background.default,
                }}
              >
                {[
                  { key: 'light', icon: <LightModeIcon /> },
                  { key: 'dark', icon: <DarkModeIcon /> },
                  { key: 'blue', icon: <WaterDropIcon /> },
                ].map((item) => {
                  const active = themeName === item.key;

                  return (
                    <IconButton
                      key={item.key}
                      onClick={() => changeTheme(item.key)}
                      sx={{
                        flex: 1,
                        borderRadius: '10px',
                        color: active ? '#fff' : textPrimary,
                        backgroundColor: active ? accent : 'transparent',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          backgroundColor: active ? accent : `${accent}22`,
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  );
                })}
              </Box>

            </Drawer>
          </>
        ) : (
          /* DESKTOP NAVIGATION */
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
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
                  '&:hover': {
                    color: accent,
                    borderBottom: `3px solid ${accent}`,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Desktop Theme Switcher */}
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
                { key: 'light', icon: <LightModeIcon fontSize="small" /> },
                { key: 'dark', icon: <DarkModeIcon fontSize="small" /> },
                { key: 'blue', icon: <WaterDropIcon fontSize="small" /> },
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
                        backgroundColor: active ? accent : `${accent}15`,
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

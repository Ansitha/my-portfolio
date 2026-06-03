import React from 'react';
import { Container, Typography, Link, Box, Paper, Stack } from '@mui/material';
import { Email, Phone, LocationOn, ArrowOutward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const primaryFont = "'Inter', sans-serif";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ContactItem = ({ icon, label, value, href }) => {
  const theme = useTheme();

  const surface = theme.palette.background.paper;
  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;
  const accent = theme.palette.primary.main;

  return (
    <Paper
      component={motion.div}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      sx={{
        p: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        borderRadius: 5,
        background: surface,
        boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
        borderBottom: `1px solid ${textPrimary}10`,
        width: '100%',
        maxWidth: 500,
        transition: '0.25s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          borderColor: `${textPrimary}20`,
          boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
        },
      }}
    >
      {React.cloneElement(icon, { sx: { color: accent, fontSize: '2.2rem' } })}

      <Box>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 500,
            fontFamily: primaryFont,
            color: textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            mb: 0.5,
          }}
        >
          {label}
        </Typography>

        {href ? (
          <Link
            href={href}
            underline="always"
            sx={{
              fontWeight: 700,
              fontFamily: primaryFont,
              color: textPrimary,
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                color: accent,
              },
            }}
          >
            {value} <ArrowOutward fontSize="small" />
          </Link>
        ) : (
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: primaryFont,
              color: textPrimary,
              fontSize: '1.1rem',
            }}
          >
            {value}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

const Contact = () => {
  const theme = useTheme();

  const bg = theme.palette.background.default;
  const textPrimary = theme.palette.text.primary;

  return (
    <Box sx={{ minHeight: '100vh', background: bg, position: 'relative', pt: 10, pb: 10 }}>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontFamily: primaryFont,
            color: textPrimary,
            mb: 8,
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Contact
        </Typography>

        <Stack spacing={4} alignItems="center" width="100%">
          <ContactItem
            icon={<Email />}
            label="Professional Email"
            value="ansithamol@gmail.com"
            href="mailto:ansithamol@gmail.com"
          />

          <ContactItem
            icon={<Phone />}
            label="Mobile"
            value="+971-52 286 0807"
          />

          <ContactItem
            icon={<LocationOn />}
            label="Location"
            value="Fujairah, UAE"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;

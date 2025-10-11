import React from 'react';
import { Container, Typography, Link, Box, Paper, Stack } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ContactItem = ({ icon, label, value, href }) => (
  <Paper
    component={motion.div}
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    sx={{
      p: 3,
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      borderRadius: 3,
      background: 'linear-gradient(135deg, #e1f5fe, #f3e5f5)',
      boxShadow: 3,
      width: '100%',
      maxWidth: 500,
    }}
  >
    {icon}
    <Box>
      <Typography variant="subtitle2" color="text.secondary">{label}</Typography>
      {href ? (
        <Link href={href} underline="hover" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          {value}
        </Link>
      ) : (
        <Typography sx={{ fontWeight: 'bold' }}>{value}</Typography>
      )}
    </Box>
  </Paper>
);

const Contact = () => (
  <Container sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
      Contact Me
    </Typography>

    <Stack spacing={3} alignItems="center">
      <ContactItem icon={<Email color="primary" />} label="Email" value="ansithamol@gmail.com" href="mailto:ansithamol@gmail.com" />
      <ContactItem icon={<Phone color="secondary" />} label="Phone" value="+971-52 286 0807" />
      <ContactItem icon={<LocationOn color="action" />} label="Location" value="Fujairah, UAE" />
    </Stack>
  </Container>
);

export default Contact;

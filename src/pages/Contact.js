import React from 'react';
import { Container, Typography, Link, Box, Paper, Stack } from '@mui/material';
import { Email, Phone, LocationOn, ArrowOutward } from '@mui/icons-material'; // *** ADDED IMPORTS ***
import { motion } from 'framer-motion';

// *** 1. ADD REFINED FONTS & COLORS FOR SENIOR AESTHETIC ***
const primaryFont = "'Inter', sans-serif"; // Recommended: load this font in index.html
const primaryTeal = '#00CEC9'; // Vibrant teal for accents (like links/highlights)
const surfaceBackground = '#1E1E1E'; // Deep grey matching your other container backgrounds

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Reusable component updated for dark aesthetic
const ContactItem = ({ icon, label, value, href }) => (
  <Paper
    component={motion.div}
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    sx={{
      p: 4, // More premium, consistent spacing
      display: 'flex',
      alignItems: 'center',
      gap: 3, // More breathing room
      borderRadius: 5, // Modern corner radius
      // *** 2. CHANGE BACKGROUND TO MINIMAL DARK SURFACE ***
      background: surfaceBackground, 
      boxShadow: '0 10px 40px rgba(0,0,0,0.4)', // Clean shadow direction
      borderBottom: `1px solid rgba(255, 255, 255, 0.03)`, // Subtle bottom highlight
      width: '100%',
      maxWidth: 500,
      '&:hover': {
          transform: 'translateY(-2px)', // Subtle hover interaction
          borderColor: `rgba(255, 255, 255, 0.05)`,
          boxShadow: '0 15px 50px rgba(0,0,0,0.5)', // Premium hover shadow
      },
    }}
  >
    {/* Style updated for consistent teal highlights */}
    {React.cloneElement(icon, { sx: { color: primaryTeal, fontSize: '2.2rem' } })}
    <Box>
      <Typography 
        variant="subtitle2" 
        sx={{
            fontWeight: 500, 
            fontFamily: primaryFont, 
            color: 'rgba(255, 255, 255, 0.5)', // Muted text for subtle focus
            textTransform: 'uppercase', // Assertive label detail
            letterSpacing: '0.5px', // Modern kerning
            mb: 0.5,
        }}
      >
        {label}
      </Typography>
      {href ? (
        <Link 
            href={href} 
            underline="always" // Active teal underline
            sx={{ 
                fontWeight: 700, 
                fontFamily: primaryFont, 
                color: 'white', // Bright highlight for dynamic link
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                    color: primaryTeal, // Hover text color change
                },
            }}
        >
          {value} <ArrowOutward fontSize="small" /> {/* Added indicator icon */}
        </Link>
      ) : (
        <Typography 
            sx={{ 
                fontWeight: 700, 
                fontFamily: primaryFont, 
                color: 'white', // High-contrast clean text
                fontSize: '1.1rem',
                }}
        >
            {value}
        </Typography>
      )}
    </Box>
  </Paper>
);

const Contact = () => (
    // Minimalist full dark background container
    <Box sx={{ minHeight: '100vh', background: '#121212', position: 'relative', pt: 10, pb: 10 }}> 
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <Typography 
            variant="h2" // Larger, bold title
            sx={{ 
                fontWeight: 800, // Very bold
                fontFamily: primaryFont, // Clean sans-serif
                color: 'white',
                mb: 8, // More spacing below the title
                textTransform: 'uppercase', // Assertive style
                letterSpacing: '2px', // Modern kerning
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
            // Considered making this a tel link, but for portfolios, it's often best as display only
          />
          <ContactItem 
            icon={<LocationOn />} 
            label="Location" 
            value="Fujairah, UAE" 
            // Optional: add href="https://www.google.com/maps/search/?api=1&query=Fujairah,+UAE"
          />
        </Stack>
    </Container>
    </Box>
);

export default Contact;
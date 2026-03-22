import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// *** NEW REFINED FONTS & COLORS FOR SENIOR AESTHETIC ***
const primaryFont = "'Inter', sans-serif"; // Recommended: load this font via link in index.html
const primaryTeal = '#00CEC9'; // Vibrant teal for highlights and CTAs
const darkBackground = '#121212'; // Modern, deep grey background

// 3D Book Opening Animation (Retained your excellent animation logic)
const bookOpen = {
  hidden: { rotateY: 90, scale: 0.8, opacity: 0 },
  visible: {
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        // *** 1. MINIMAL DARK BACKGROUND ***
        background: darkBackground,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        perspective: 1500,
        pt: 10, // Top padding for space
      }}
    >
      {/* Sparkles retained (optional) */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
        style={{ position: 'absolute', top: '30%', left: '20%', width: '6px', height: '6px', background: 'white', borderRadius: '50%', filter: 'blur(2px)' }}
      />
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
        style={{ position: 'absolute', bottom: '25%', right: '30%', width: '8px', height: '8px', background: 'white', borderRadius: '50%', filter: 'blur(3px)' }}
      />

      {/* Book Opening Animation Container */}
      <motion.div
        variants={bookOpen}
        initial="hidden"
        animate="visible"
        style={{
          transformStyle: 'preserve-3d',
          // *** 2. REFINED CONTAINER STYLE (Dark Surface) ***
          background: 'rgba(30, 30, 30, 0.95)', // Slightly lighter grey surface
          borderRadius: '24px', // Modern corner radius
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
          padding: '80px 60px', // More breathing room
          maxWidth: '850px', 
          textAlign: 'left', // *** 3. ALIGN TEXT LEFT for pro feel ***
          border: `1px solid rgba(255, 255, 255, 0.05)`, // Subtle border highlight
        }}
      >
        {/* Animated Content */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0}>
          <Typography
            variant="h2" // Larger, bold title
            sx={{
              // *** 4. REFINED FONT ***
              fontFamily: primaryFont,
              fontWeight: 800, // Very bold
              // *** 5. CLEAN TEXT COLOR ***
              color: 'white',
              mb: 1.5,
              textTransform: 'uppercase', // Assertive styling
              letterSpacing: '2px', // Modern kerning
            }}
          >
            I'M <span style={{ color: primaryTeal }}>ANSITHAMOL</span>
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={1}>
          <Typography
            variant="h4" // Larger subtitle
            sx={{
              fontFamily: primaryFont,
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.8)', // Off-white
              mb: 4,
              textTransform: 'uppercase', // Consistent styling
              letterSpacing: '1px',
            }}
          >
            {/* *** 6. NEW SENIOR LEVEL TAGLINE *** */}
            Senior Frontend Architect // React Specialist
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={2}>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 650, // Wider for left alignment
              fontFamily: primaryFont, // Clean sans-serif
              color: 'rgba(255, 255, 255, 0.6)', // Muted text for focus
              fontSize: '1.15rem',
              mb: 5,
              lineHeight: 1.8,
            }}
          >
            {/* *** 7. UPDATED PROFESSIONAL SUMMARY Focusing on Engineering Depth *** */}
            Architecting performant, accessible, and scalable React applications for Enterprise-level challenges. I specialize in leveraging Material-UI (MUI) and TypeScript to engineer precise design systems and optimized user interfaces. With 4+ years of focused experience, I excel in bridging design and functionality with technical precision and strategic thinking.
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={3}>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            size="large"
            sx={{
              // *** 8. HIGH-END BUTTON STYLING ***
              borderRadius: '30px',
              px: 6,
              py: 2,
              fontWeight: 700,
              fontSize: '1rem',
              // Use primary teal CTA color
              background: primaryTeal,
              boxShadow: `0 8px 30px rgba(0, 206, 201, 0.3)`,
              '&:hover': {
                background: '#01A3A3', // Darker teal hover
              },
            }}
            onClick={() => navigate('/projects')} // Changed target to 'projects' for immediate focus
          >
            View Technical Showcase
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Home;
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // <-- import useNavigate

// 3D Book Opening Animation
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
  const navigate = useNavigate(); // <-- initialize navigate

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fce4ec 0%, #e3f2fd 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        perspective: 1500,
      }}
    >
      {/* Floating sparkles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '6px',
          height: '6px',
          background: 'white',
          borderRadius: '50%',
          filter: 'blur(2px)',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '30%',
          width: '8px',
          height: '8px',
          background: 'white',
          borderRadius: '50%',
          filter: 'blur(3px)',
        }}
      />

      {/* Book Opening Animation Container */}
      <motion.div
        variants={bookOpen}
        initial="hidden"
        animate="visible"
        style={{
          transformStyle: 'preserve-3d',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          padding: '60px 40px',
          maxWidth: '700px',
          textAlign: 'center',
        }}
      >
        {/* Animated Content */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 'bold',
              color: '#37474f',
              mb: 2,
            }}
          >
            Hi, I'm <span style={{ color: '#1976d2' }}>Ansithamol</span>
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={1}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Kaushan Script', cursive",
              color: '#7b1fa2',
              mb: 3,
            }}
          >
            React Frontend Developer based in Fujairah, UAE 🌸
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={2}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 550,
              mx: 'auto',
              fontSize: '1.05rem',
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            I specialize in creating clean, responsive, and engaging web interfaces using
            <strong> React</strong> and <strong>Material UI</strong>. With 4 years of
            experience in building interactive user experiences, I aim to bridge design
            and functionality with creativity and precision.
          </Typography>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={3}>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            size="large"
            sx={{
              borderRadius: '25px',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              background:
                'linear-gradient(90deg, #42a5f5 0%, #7e57c2 100%)',
              boxShadow: '0 6px 20px rgba(66,165,245,0.3)',
              '&:hover': {
                background:
                  'linear-gradient(90deg, #5c6bc0 0%, #ab47bc 100%)',
              },
            }}
            onClick={() => navigate('/resume')} // <-- navigate on click
          >
            Explore My Portfolio
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Home;

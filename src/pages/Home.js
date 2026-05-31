
import React from 'react';
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ArrowForward,
  Download,
  LocationOn,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const primaryFont = "'Inter', sans-serif";
const primaryTeal = '#00E5D1';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const techStack = [
  'React.js',
  'Next.js',
  'JavaScript',
  'Redux',
  'Material UI',
  'Tailwind CSS',
  'REST APIs',
  'Node.js',
];

const stats = [
  {
    value: '5+',
    label: 'Years Experience',
  },
  {
    value: '20+',
    label: 'Projects Delivered',
  },
  {
    value: '100%',
    label: 'Remote Collaboration',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #0A0A0A 0%, #111827 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 3, sm: 4 },
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow Effects */}

      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          background: primaryTeal,
          filter: 'blur(200px)',
          opacity: 0.15,
          top: '-10%',
          left: '-10%',
          borderRadius: '50%',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          background: '#2563EB',
          filter: 'blur(200px)',
          opacity: 0.15,
          bottom: '-10%',
          right: '-10%',
          borderRadius: '50%',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%' }}
      >
        <Box
          sx={{
            maxWidth: 1000,
            mx: 'auto',
            backdropFilter: 'blur(18px)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '28px',
            p: {
              xs: 4,
              sm: 6,
              md: 8,
            },
            boxShadow:
              '0 20px 60px rgba(0,0,0,0.4)',
          }}
        >
          {/* Availability Badge */}

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Box
              sx={{
                display: 'inline-flex',
                px: 2,
                py: 1,
                borderRadius: '999px',
                background:
                  'rgba(0,229,209,0.08)',
                border:
                  '1px solid rgba(0,229,209,0.2)',
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  color: primaryTeal,
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}
              >
                Available for New Opportunities
              </Typography>
            </Box>
          </motion.div>

          {/* Name */}

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <Typography
              sx={{
                fontFamily: primaryFont,
                fontWeight: 800,
                color: '#fff',
                fontSize: {
                  xs: '2.3rem',
                  md: '4rem',
                },
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Hi, I'm{' '}
              <span style={{ color: primaryTeal }}>
                Ansithamol A
              </span>
            </Typography>
          </motion.div>

          {/* Role */}

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <Typography
              sx={{
                color:
                  'rgba(255,255,255,0.8)',
                fontSize: {
                  xs: '1.1rem',
                  md: '1.6rem',
                },
                fontWeight: 600,
                mb: 3,
              }}
            >
              React Front-End Developer • Next.js • Material UI
            </Typography>
          </motion.div>

          {/* Summary */}

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Typography
              sx={{
                color:
                  'rgba(255,255,255,0.65)',
                fontSize: {
                  xs: '1rem',
                  md: '1.15rem',
                },
                lineHeight: 1.8,
                maxWidth: 720,
                mb: 4,
              }}
            >
              Front-End Developer with 5+ years of experience
              building responsive, scalable, and user-friendly
              web applications.

              Specialized in React.js, Next.js, Redux,
              Material UI, authentication flows,
              dashboards, admin panels, REST API integration,
              and performance optimization.

              Passionate about delivering clean,
              maintainable code and intuitive user experiences.
            </Typography>
          </motion.div>

          {/* Location */}

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 4,
              }}
            >
              <LocationOn
                sx={{
                  color: primaryTeal,
                  fontSize: 20,
                }}
              />

              <Typography
                sx={{
                  color:
                    'rgba(255,255,255,0.7)',
                }}
              >
                United Arab Emirates • Resident Visa • Immediate Joiner
              </Typography>
            </Box>
          </motion.div>

          {/* Tech Stack */}

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                mb: 5,
              }}
            >
              {techStack.map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: '20px',
                    background:
                      'rgba(255,255,255,0.05)',
                    border:
                      '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Typography
                    sx={{
                      color: primaryTeal,
                      fontSize: '0.85rem',
                    }}
                  >
                    {tech}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>

          {/* CTA Buttons */}

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            <Stack
              direction={{
                xs: 'column',
                sm: 'row',
              }}
              spacing={2}
              mb={6}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => navigate('/projects')}
                sx={{
                  borderRadius: '30px',
                  px: 5,
                  py: 1.6,
                  fontWeight: 700,
                  background: primaryTeal,
                  color: '#000',
                  '&:hover': {
                    background: '#00c8b7',
                  },
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                startIcon={<Download />}
                onClick={() => navigate('/resume')}
                sx={{
                  borderRadius: '30px',
                  px: 5,
                  py: 1.6,
                  color: primaryTeal,
                  borderColor: primaryTeal,
                  '&:hover': {
                    borderColor: primaryTeal,
                    background:
                      'rgba(0,229,209,0.08)',
                  },
                }}
              >
                Resume
              </Button>
            </Stack>
          </motion.div>

          {/* Statistics */}

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={7}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(3,1fr)',
                },
                gap: 3,
              }}
            >
              {stats.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: '18px',
                    background:
                      'rgba(255,255,255,0.03)',
                    border:
                      '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <Typography
                    sx={{
                      color: primaryTeal,
                      fontSize: '2rem',
                      fontWeight: 800,
                    }}
                  >
                    {item.value}
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        'rgba(255,255,255,0.65)',
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home;



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
  Description,
  Download,
  LocationOn,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";

const primaryFont = "'Inter', sans-serif";


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
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const primaryTeal = theme.palette.primary.main;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: isDark
          ? "linear-gradient(135deg, #0A0A0A 0%, #111827 100%)"
          : "linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, sm: 4 },
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        width: '100%'
      }}
    >
      {/* Glow Effects */}

      <Box
        sx={{
          position: 'absolute',
          width: { xs: 180, md: 350 },
          height: { xs: 180, md: 350 },
          background: theme.palette.secondary.main,
          filter: { xs: 'blur(100px)', md: 'blur(200px)' },
          opacity: 0.15,
          bottom: '-10%',
          right: '-10%',
          borderRadius: '50%',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          background: theme.palette.secondary.main,
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
            background: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 20px 60px rgba(0,0,0,0.4)"
                : "0 20px 60px rgba(0,0,0,0.08)",
            borderRadius: '28px',
            p: {
              xs: 2.5,
              sm: 4,
              md: 8,
            }

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
                background: `${primaryTeal}14`,
                border: `1px solid ${primaryTeal}40`,
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
                color: theme.palette.text.primary,
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.5rem',
                  md: '4rem',
                },
                wordBreak: "break-word",
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
                color: theme.palette.text.secondary,
                fontSize: {
                  xs: '0.95rem',
                  sm: '1.1rem',
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
                color: theme.palette.text.secondary,
                fontSize: {
                  xs: '0.95rem',
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
                flexWrap: 'wrap',
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
                  color: theme.palette.text.secondary,
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
                    px: { xs: 1.2, md: 2 },
                    py: 0.8,
                    borderRadius: '20px',
                    background:
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(0,0,0,0.04)",

                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Typography
                    sx={{
                      color: primaryTeal,
                      fontSize: {
                        xs: '0.75rem',
                        md: '0.85rem',
                      }
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
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,

                  '&:hover': {
                    bgcolor: theme.palette.primary.dark,
                  },
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                startIcon={<Description />}
                onClick={() => navigate('/resume')}
                sx={{
                  borderRadius: '30px',
                  px: 5,
                  py: 1.6,
                  color: primaryTeal,
                  borderColor: primaryTeal,
                  '&:hover': {
                    borderColor: primaryTeal,
                    backgroundColor: `${primaryTeal}14`,
                  }
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
                  sm: 'repeat(2,1fr)',
                  md: 'repeat(3,1fr)',
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
                    background: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Typography
                    sx={{
                      color: primaryTeal,
                      fontSize: {
                        xs: '1.6rem',
                        md: '2rem',
                      },
                      fontWeight: 800,
                    }}
                  >
                    {item.value}
                  </Typography>

                  <Typography
                    sx={{
                      color: theme.palette.text.secondary,
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


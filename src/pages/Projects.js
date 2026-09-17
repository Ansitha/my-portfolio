
import React from 'react';
import { Typography, Card, CardContent, CardActions, Button, Box, Stack, Chip } from '@mui/material';
import { GitHub, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';


const projects = [
  {
    title: 'Kerala Meal Planner',
    contribution: 'Full Stack Developer',
    problemSolved:
      'Developed an AI-powered meal planning application that generates authentic Kerala recipes with ingredients and cooking steps. Includes Firebase meal storage, dynamic modals, AI generation using Gemini API, and a clean daily planner UI.',
    stack: [
      'Next.js',
      'Firebase',
      'Tailwind CSS',
      'Gemini AI API',
      'React Hooks',
    ],
    github: 'https://github.com/Ansitha/kerala-meal-planner',
    live: 'https://kerala-meal-planner-esj6woufn-project-1-8368.vercel.app',
  },

  {
    title: 'Smart Visitor Management System',
    contribution: 'Full Stack Developer',
    problemSolved:
      'Built a visitor check-in system for UAE offices featuring QR-based entry, ID/passport OCR scanning, visit logs, and admin dashboards. Designed for real-world corporate and government workflows.',
    stack: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'Google Vision OCR',
      'Material UI',
    ],
    github: 'https://github.com/yourusername/visitor-management',
    live: '',
  },

  {
    title: 'E-Commerce Admin Dashboard',
    contribution: 'Full Stack Developer',
    problemSolved:
      'Developed a complete admin dashboard for managing products, orders, inventory, and analytics. Includes charts, role-based access, and responsive UI optimized for UAE retail businesses.',
    stack: [
      'React.js',
      'Express.js',
      'MongoDB',
      'Material UI',
      'JWT Auth',
    ],
    github: 'https://github.com/yourusername/ecommerce-admin-dashboard',
    live: '',
  },

  {
    title: 'AI Resume Builder (UAE Market)',
    contribution: 'Full Stack Developer',
    problemSolved:
      'Created an AI-powered resume builder tailored for UAE hiring standards. Features ATS score checking, auto skill generation, job description analysis, and modern CV templates.',
    stack: [
      'Next.js',
      'OpenAI API',
      'Tailwind CSS',
      'Firebase',
    ],
    github: 'https://github.com/yourusername/uae-ai-resume-builder',
    live: '',
  },

  {
    title: 'Real Estate Listing Analyzer',
    contribution: 'Full Stack Developer',
    problemSolved:
      'Built a property price analyzer for Dubai and Abu Dhabi using web scraping, ML-based price prediction, and map-based visualization. Helps users compare fair market prices across locations.',
    stack: [
      'Python',
      'Flask',
      'React.js',
      'BeautifulSoup',
      'Google Maps API',
      'Machine Learning',
    ],
    github: 'https://github.com/yourusername/real-estate-analyzer',
    live: '',
  },
];


const primaryFont = "'Inter', sans-serif";

const pageOpen = {
  hidden: { scale: 0.8, rotateY: 90, opacity: 0 },
  visible: { scale: 1, rotateY: 0, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ProjectsPage = () => {
  const theme = useTheme();

  const bg = theme.palette.background.default;
  const surface = theme.palette.background.paper;
  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;
  const accent = theme.palette.primary.main;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: bg,
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'hidden',
        width: '100%',
      }}
    >
      {/* Sparkles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '25%',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: textPrimary,
          filter: 'blur(2px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
        style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: textPrimary,
          filter: 'blur(3px)',
        }}
      />

      <motion.div
        variants={pageOpen}
        initial="hidden"
        animate="visible"
        style={{
          width: '100%',
          maxWidth: 1200,
          padding: '0 16px',
          boxSizing: 'border-box',
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontFamily: primaryFont,
            fontWeight: 800,
            color: textPrimary,
            fontSize: {
              xs: '2rem',
              sm: '2.8rem',
              md: '3.75rem',
            },
            mb: { xs: 5, md: 8 },
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Featured Work
        </Typography>

        <Stack spacing={4} width="100%">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.25 }}
            >
              <Card
                elevation={16}
                sx={{
                  borderRadius: 6,
                  background: surface,
                  boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                  textAlign: 'left',
                  border: `1px solid ${textPrimary}10`,
                  overflow: 'hidden',
                }}
              >
                <CardContent
                  sx={{
                    p: {
                      xs: 2.5,
                      sm: 3,
                      md: 5,
                    },
                  }}
                >
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="flex-start">
                    <Box
                      flex={1}
                      sx={{
                        minWidth: {
                          xs: '100%',
                          md: 250,
                        },
                      }}
                    >
                      <Typography

                        sx={{
                          fontSize: {
                            xs: '1.25rem',
                            sm: '1.5rem',
                            md: '2rem',
                          },
                          fontWeight: 800,
                          fontFamily: primaryFont,
                          color: textPrimary,
                          mb: 1.5,
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: primaryFont,
                          color: textSecondary,
                          lineHeight: 1.8,
                          fontSize: {
                            xs: '0.95rem',
                            md: '1.05rem',
                          },
                        }}
                      >
                        {project.problemSolved}
                      </Typography>
                    </Box>

                    <Box
                      flex={1}
                      sx={{
                        minWidth: {
                          xs: '100%',
                          md: 250,
                        },
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontFamily: primaryFont,
                          fontWeight: 600,
                          color: textPrimary,
                          mb: 1.5,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        Technology Stack
                      </Typography>

                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {project.stack.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              background: `${textPrimary}08`,
                              color: accent,
                              fontFamily: primaryFont,
                              fontWeight: 500,
                              borderRadius: '16px',
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </CardContent>

                <CardActions
                  sx={{
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    px: { xs: 2.5, md: 5 },
                    pb: 4,
                    pt: 0,
                  }}
                >
                  {project.live && (
                    <Button
                      href={project.live}
                      target="_blank"
                      variant="contained"
                      endIcon={<ArrowForward fontSize="small" />}
                      sx={{
                        borderRadius: '30px',
                        px: 4,
                        mr: 2,
                        fontWeight: 700,
                        textTransform: 'none',
                        background: accent,
                        '&:hover': { background: `${accent}dd` },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}

                  <Button
                    href={project.github}
                    target="_blank"
                    variant="outlined"
                    startIcon={<GitHub />}
                    endIcon={<ArrowForward fontSize="small" />}
                    sx={{
                      borderRadius: '30px',
                      px: 4,
                      fontWeight: 700,
                      textTransform: 'none',
                      borderColor: accent,
                      color: accent,
                      '&:hover': {
                        borderColor: accent,
                        background: `${accent}22`,
                      },
                    }}
                  >
                    View Source on GitHub
                  </Button>
                </CardActions>

              </Card>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default ProjectsPage;

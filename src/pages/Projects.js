
import React from 'react';
import { Typography, Card, CardContent, CardActions, Button, Box, Stack, Chip } from '@mui/material';
import { GitHub, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';


const projects = [
  {
    title: 'Modern Blog Platform',
    contribution: 'Full Stack Developer',
    problemSolved:
      'Built a responsive blogging platform where users can create, edit, delete, and manage articles. Implemented authentication, category filtering, search functionality, and a clean reading experience optimized for desktop and mobile devices.',

    stack: [
      'React.js',
      'Material UI',
      'Node.js',
      // 'Express.js',
      // 'MongoDB',
      'JWT Authentication',
    ],

    github: 'https://github.com/yourusername/blog-platform',
  },

  {
    title: 'Personal Fitness Tracker',
    contribution: 'Frontend Developer',
    problemSolved:
      'Developed a fitness tracking application that allows users to log workouts, monitor progress, track calories burned, and visualize weekly performance through interactive charts and analytics.',

    stack: [
      'React.js',
      'Material UI',
      'Chart.js',
      'React Hooks',
      'Local Storage',
    ],

    github: 'https://github.com/yourusername/fitness-tracker',
  },

  {
    title: 'Task Management Board',
    contribution: 'React Developer',
    problemSolved:
      'Created a Kanban-style task management system with drag-and-drop functionality, priority levels, due dates, and progress tracking. Designed reusable components and responsive layouts for productivity workflows.',

    stack: [
      'React.js',
      'Material UI',
      'Redux Toolkit',
      // 'React DnD',
      'JavaScript',
    ],

    github: 'https://github.com/yourusername/task-board',
  },

  {
    title: 'Authentication Dashboard',
    contribution: 'Frontend Developer',
    problemSolved:
      'Implemented a secure dashboard application featuring login, registration, protected routes, profile management, and role-based navigation. Focused on clean UI design and authentication workflows.',

    stack: [
      'React.js',
      'Material UI',
      'React Router',
      'JWT',
      'Axios',
    ],

    github: 'https://github.com/yourusername/auth-dashboard',
  },

  {
    title: 'E-Commerce Store',
    contribution: 'Frontend Developer',
    problemSolved:
      'Built a modern online shopping experience featuring product listings, category filtering, shopping cart functionality, wishlist management, and a responsive checkout flow.',

    stack: [
      'Next.js',
      'Tailwind CSS',
      'Context API',
      // 'Stripe',
      'Responsive Design',
    ],

    github: 'https://github.com/yourusername/ecommerce-store',
  },

  {
    title: 'Job Application Tracker',
    contribution: 'Full Stack Developer',
    problemSolved:
      'Designed an application for managing job applications, interview schedules, and application statuses. Included dashboard analytics, filtering, search, and CRUD operations for efficient job tracking.',

    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Material UI',
      'REST APIs',
    ],

    github: 'https://github.com/yourusername/job-tracker',
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
                    justifyContent: {
                      xs: 'center',
                      md: 'flex-start',
                    },
                    px: {
                      xs: 2.5,
                      md: 5,
                    },
                    pb: 4,
                    pt: 0,
                  }}
                >
                  <Button
                    disabled
                    href={project.github}
                    target="_blank"
                    variant="outlined"
                    startIcon={<GitHub />}
                    endIcon={<ArrowForward fontSize="small" />}
                    fullWidth={false}
                    sx={{
                      borderRadius: '30px',
                      px: 4,
                      width: {
                        xs: '100%',
                        sm: 'auto',
                      },
                      py: 1,
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

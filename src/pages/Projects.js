import React from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Box, Stack, Chip } from '@mui/material'; // *** NEW IMPORTS ***
import { GitHub, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

// *** NEW REFINED FONTS & COLORS FOR SENIOR AESTHETIC ***
const primaryFont = "'Inter', sans-serif"; // Recommended: load this font in index.html
const primaryTeal = '#00CEC9'; // Vibrant teal for accents
const darkBackground = '#121212'; // Deep, modern grey background
const surfaceBackground = '#1E1E1E'; // Slightly lighter dark surface

// *** OPTIMIZED PROJECT DATA (Outcome-oriented, Tech-focused) ***
const projects = [
  {
    title: 'OnCall Incident Management System',
    // *** NEW SENIOR LEVEL COPY: Focusing on technical outcomes and scale ***
    contribution: 'Frontend Architect', 
    problemSolved: 'Engineered a highly responsive dashboard to visualize incident severity and status. Implemented virtualization to handle 1,000+ data points simultaneously, achieving a 60fps interaction rate.',
    // *** NEW REQUIREMENT: TECH STACK FOR THE PROJECT ***
    stack: ['React 18', 'Material-UI (MUI)', 'TanStack Query', 'TypeScript', 'Vite', 'a11y'],
    github: 'https://github.com/yourusername/oncall-ims',
  },
  {
    title: 'MCQ Exam System',
    contribution: 'Lead UI Developer',
    problemSolved: 'Developed a robust UI to handle dynamic MCQ logic and real-time scoring calculations. Implemented custom MUI components for timed quizzes and instant feedback, ensuring high usability under stress conditions.',
    stack: ['React', 'Redux Toolkit', 'Axios', 'Material-UI', 'Jest (Testing)'],
    github: 'https://github.com/yourusername/mcq-exam-system',
  },
  {
    title: 'E-commerce Online Grocery Store',
    contribution: 'Fullstack Contributor (Frontend Focus)',
    problemSolved: 'Led the UI overhaul, implementing dynamic product filtering and a streamlined checkout flow. Reusable MUI components reduced development time for the cart functionality by 25%.',
    stack: ['React', 'Context API', 'Axios', 'MUI v5', 'User Authentication'],
    github: 'https://github.com/yourusername/online-grocery-store',
  },
];

const pageOpen = {
  hidden: { scale: 0.8, rotateY: 90, opacity: 0 },
  visible: { scale: 1, rotateY: 0, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ProjectsPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        // *** 1. UNIFIED MINIMAL DARK BACKGROUND ***
        background: darkBackground,
        position: 'relative',
        overflow: 'hidden',
        pt: 10, // Increased top padding for professional space
        pb: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Sparkles retained (optional) */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
        style={{ position: 'absolute', top: '20%', left: '25%', width: '6px', height: '6px', borderRadius: '50%', background: 'white', filter: 'blur(2px)' }}
      />
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
        style={{ position: 'absolute', top: '60%', right: '20%', width: '8px', height: '8px', borderRadius: '50%', background: 'white', filter: 'blur(3px)' }}
      />

      <motion.div variants={pageOpen} initial="hidden" animate="visible" style={{ width: '100%', maxWidth: 1200 }}>
        {/* *** 2. SENIOR TITLE STYLING *** */}
        <Typography 
          variant="h2" // Larger H2 for impact
          sx={{ 
            textAlign: 'center', 
            fontFamily: primaryFont, 
            fontWeight: 800, 
            color: 'white', 
            mb: 8, // More spacing below the title
            textTransform: 'uppercase', // Bold, assertive style
            letterSpacing: '2px', // Modern spacing
          }}
        >
          TECHNICAL SHOWCASE // Case Studies
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
                elevation={16} // Increased elevation for impact
                sx={{
                  borderRadius: 6, // Softer modern corners
                  // *** 3. REFINED CONTAINER STYLE (Dark Surface) ***
                  background: surfaceBackground, // Deep dark surface
                  boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                  textAlign: 'left', // *** 4. ALIGN TEXT LEFT for pro feel ***
                  border: `1px solid rgba(255, 255, 255, 0.03)`, // Ultra subtle border highlight
                  overflow: 'visible', // Ensure chips aren't cut off if expanded
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="flex-start">
                    <Box flex={2}>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 800, 
                          fontFamily: primaryFont, 
                          color: 'white', 
                          mb: 1.5,
                          textTransform: 'uppercase', // Bold title
                          letterSpacing: '1px',
                        }}
                      >
                        {project.title}
                      </Typography>
                      {/* *** NEW ROLE CHIP *** */}
                      <Chip 
                        label={project.contribution}
                        size="small"
                        sx={{
                          mb: 3,
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          color: darkBackground,
                          background: primaryTeal,
                          fontFamily: primaryFont,
                          textTransform: 'uppercase',
                        }}
                      />

                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontFamily: primaryFont,
                          color: 'rgba(255, 255, 255, 0.7)', // Muted text for readability
                          lineHeight: 1.8,
                          fontSize: '1.05rem',
                        }}
                      >
                        {project.problemSolved}
                      </Typography>
                    </Box>
                    
                    {/* *** NEW TECH STACK COLUMN *** */}
                    <Box flex={1} minWidth={250}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            fontFamily: primaryFont, 
                            fontWeight: 600, 
                            color: 'rgba(255, 255, 255, 0.9)', 
                            mb: 1.5, 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.5px' 
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
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: primaryTeal,
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
                
                {/* Re-enabled and restyled GitHub button */}
                <CardActions sx={{ justifyContent: 'left', px: 5, pb: 4, pt: 0 }}>
                  <Button
                    href={project.github}
                    target="_blank"
                    variant="outlined"
                    // disabled // Re-enabled for demonstration
                    startIcon={<GitHub />}
                    endIcon={<ArrowForward fontSize="small" />} // Added for interaction feel
                    sx={{ 
                        borderRadius: '30px', 
                        px: 4, 
                        py: 1, 
                        fontWeight: 700, 
                        textTransform: 'none', 
                        borderColor: primaryTeal, 
                        color: primaryTeal,
                        '&:hover': {
                            borderColor: primaryTeal,
                            background: 'rgba(0, 206, 201, 0.1)',
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
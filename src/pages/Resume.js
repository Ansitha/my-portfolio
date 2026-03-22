import React from 'react';
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Chip // *** NEW COMPONENT FOR SKILLS CHIPS ***
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Work,
  School,
  Star,
  Code,
  ArrowRight
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// *** NEW REFINED FONTS & COLORS ***
const primaryFont = "'Inter', sans-serif"; // Make sure to load this in your index.html
const primaryTeal = '#00CEC9'; // Vibrant teal for highlights
const darkBackground = '#121212'; // Deep, modern grey
const surfaceBackground = '#1E1E1E'; // Slightly lighter dark surface

// Page animation variants (Retained your animation logic)
const pageOpen = {
  hidden: { scale: 0.8, rotateY: 90, opacity: 0 },
  visible: {
    scale: 1,
    rotateY: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.8 },
  }),
};

// *** SKILLS CHIP DATA - CATEGORIZED ***
const skillsData = [
  { category: 'Core Stack', skills: ['React 18', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
  { category: 'State & Data', skills: ['Redux Toolkit', 'Zustand', 'TanStack Query', 'Context API'] },
  { category: 'UI & Design Systems', skills: ['Material UI (MUI)', 'Styled Components', 'Atomic Design'] },
  { category: 'Architecture & Optimization', skills: ['Performance Auditing', 'Code Splitting', 'Accessibility (a11y)', 'Atomic Design'] },
  { category: 'Tooling & Backend', skills: ['Git', 'Vite', 'Webpack', 'Node.js (basic)', 'Express (basic)'] },
];

const Resume = () => (
  <Box
    sx={{
      minHeight: '100vh',
      // *** 1. CHANGE BACKGROUND to MINIMAL DARK ***
      background: darkBackground,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Retained your sparkles (optional) */}
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
      style={{ position: 'absolute', top: '20%', left: '30%', width: '6px', height: '6px', borderRadius: '50%', background: 'white', filter: 'blur(2px)' }}
    />
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
      style={{ position: 'absolute', top: '60%', right: '25%', width: '8px', height: '8px', borderRadius: '50%', background: 'white', filter: 'blur(3px)' }}
    />

    {/* Book-like Resume Container */}
    <Container maxWidth="md" sx={{ pt: 10, pb: 10, perspective: 1500 }}>
      <motion.div variants={pageOpen} initial="hidden" animate="visible">
        <Paper
          elevation={16} // Increased elevation for a floating effect
          sx={{
            p: 6, // More padding for senior layout
            borderRadius: 6, // More rounded modern corners
            // *** 2. CHANGE CONTAINER BACKGROUND for a high-end look ***
            background: surfaceBackground, // Slightly lighter dark surface
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            transformStyle: 'preserve-3d',
            position: 'relative',
            overflow: 'hidden',
            border: `1px solid rgba(255, 255, 255, 0.03)`, // Ultra subtle border highlight
          }}
        >
          {/* Replaced page texture with a modern radial gradient highlight */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                `radial-gradient(circle at 5% 5%, rgba(0, 206, 201, 0.05), transparent 60%)`, // Ultra-subtle teal highlight
              zIndex: 0,
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
            {/* Header */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <Typography
                variant="h2"
                sx={{
                  // *** 3. REFINED FONT ***
                  fontFamily: primaryFont,
                  fontWeight: 800,
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  mb: 1.5,
                }}
              >
                Ansithamol A.
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  fontFamily: primaryFont,
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {/* *** 4. NEW SENIOR LEVEL TAGLINE *** */}
                Senior Frontend Architect // Fujairah, UAE
              </Typography>
            </motion.div>

            <Divider sx={{ my: 5, borderColor: 'rgba(255, 255, 255, 0.05)' }} />

            {/* Sections */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <Typography variant="h5" sx={{ fontFamily: primaryFont, fontWeight: 700, display: "flex", alignItems: "center", gutterBottom: 1.5, color: 'white' }}>
                <Work sx={{ mr: 1.5, color: primaryTeal, fontSize: "2rem" }} />
                Technical Summary
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: primaryFont, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.8, fontSize: "1.05rem" }}>
                {/* *** 5. NEW PROFESSIONAL SUMMARY FOCUSING ON IMPACT & SCALE *** */}
                Highly specialized Senior Frontend Architect with 4+ years of proven success in engineering performant, accessible, and scalable React applications for Enterprise-level challenges. Expert in Material-UI (MUI), TypeScript, and modern state management. Proven capability in bridging design and functionality with technical precision, driving development velocity, and strategic decision-making.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <Box mt={5}>
                <Typography variant="h5" sx={{ fontFamily: primaryFont, fontWeight: 700, display: "flex", alignItems: "center", gutterBottom: 2, color: 'white' }}>
                  <Code sx={{ mr: 1.5, color: primaryTeal, fontSize: "2rem" }} />
                  Expertise & Skills
                </Typography>
                {/* *** 6. NEW CATEGORIZED SKILLS LAYOUT WITH CHIPS *** */}
                {skillsData.map((categoryData, i) => (
                  <Box key={i} mb={2.5}>
                    <Typography variant="subtitle1" sx={{ fontFamily: primaryFont, fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)', mb: 1, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {categoryData.category}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {categoryData.skills.map((skill, j) => (
                        <Chip
                          key={j}
                          label={skill}
                          size="small"
                          sx={{
                            background: 'rgba(30, 30, 30, 0.8)',
                            color: primaryTeal,
                            fontFamily: primaryFont,
                            fontWeight: 500,
                            borderRadius: '16px',
                            border: `1px solid transparent`,
                            '&:hover': {
                              borderColor: primaryTeal,
                              background: 'rgba(0, 206, 201, 0.05)',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Box>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <Box mt={5}>
                <Typography variant="h5" sx={{ fontFamily: primaryFont, fontWeight: 700, display: "flex", alignItems: "center", gutterBottom: 2, color: 'white' }}>
                  <Work sx={{ mr: 1.5, color: primaryTeal, fontSize: "2rem" }} />
                  Experience
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: primaryFont, fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)' }}>
                  Senior React Developer – Zeazonz Technologies Pvt Ltd
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 2 }}>
                  Feb 2021 – Present | Ernakulam, Kerala, India
                </Typography>
                {/* *** 7. NEW EXPERIENCE BULLETS FOCUSING ON OUTCOMES & ACCOMPLISHMENTS *** */}
                <List dense sx={{ pl: 1 }}>
                  {[
                    "Architected and implemented a reusable MUI-based component library, reducing feature development time by 30% across multiple teams.",
                    "Led the frontend development of a critical enterprise analytics dashboard, optimizing render performance for large datasets using virtualization.",
                    "Collaborated in an agile environment to deliver seamless front-end experiences, focusing on performance, accessibility (a11y), and code quality.",
                    "Participated in technology stack decisions and mentoring junior developers in React and best practices."
                  ].map((bullet, k) => (
                    <ListItem key={k} disableGutters sx={{ alignItems: 'flex-start', mb: 0.5 }}>
                      <ArrowRight sx={{ mr: 1, color: primaryTeal, mt: 0.5 }} />
                      <ListItemText
                        primary={bullet}
                        primaryTypographyProps={{ sx: { color: 'rgba(255, 255, 255, 0.7)', fontFamily: primaryFont, lineHeight: 1.7 } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
              <Box mt={5}>
                <Typography variant="h5" sx={{ fontFamily: primaryFont, fontWeight: 700, display: "flex", alignItems: "center", gutterBottom: 1.5, color: 'white' }}>
                  <School sx={{ mr: 1.5, color: primaryTeal, fontSize: "2rem" }} />
                  Education
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: primaryFont, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.7 }}>
                  B.Tech in Electronics and Communication Engineering – College of Engineering, Cherthala (2019)
                </Typography>
              </Box>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}>
              <Divider sx={{ my: 5, borderColor: 'rgba(255, 255, 255, 0.05)' }} />
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ background: 'rgba(30, 30, 30, 0.5)', p: 3, borderRadius: '16px', border: `1px solid rgba(255, 255, 255, 0.03)` }}
              >
                <Box display="flex" alignItems="center">
                  <Email fontSize="small" sx={{ mr: 1.2, color: primaryTeal }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: primaryFont }}>ansithamol@gmail.com</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Phone fontSize="small" sx={{ mr: 1.2, color: primaryTeal }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: primaryFont }}>+971-52 286 0807</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOn fontSize="small" sx={{ mr: 1.2, color: primaryTeal }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: primaryFont }}>Fujairah, UAE</Typography>
                </Box>
              </Stack>
            </motion.div>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  </Box>
);

export default Resume;
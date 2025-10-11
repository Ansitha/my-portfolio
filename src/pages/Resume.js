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
  Stack
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Work,
  School,
  Star,
  Code
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Page animation variants
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

const Resume = () => (
  <Box
    sx={{
      minHeight: '100vh',
      background:
        'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Floating sparkles (anime feel) */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
      style={{
        position: 'absolute',
        top: '20%',
        left: '30%',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'white',
        filter: 'blur(2px)',
      }}
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
      style={{
        position: 'absolute',
        top: '60%',
        right: '25%',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'white',
        filter: 'blur(3px)',
      }}
    />

    {/* Book-like Resume */}
    <Container maxWidth="md" sx={{ pt: 10, pb: 10, perspective: 1500 }}>
      <motion.div variants={pageOpen} initial="hidden" animate="visible">
        <Paper
          elevation={8}
          sx={{
            p: 5,
            borderRadius: 4,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            transformStyle: 'preserve-3d',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle page texture overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.7), transparent 70%)',
              zIndex: 0,
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Header */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 'bold',
                  color: '#37474f',
                }}
              >
                Ansithamol A.
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                sx={{ fontFamily: "'Kaushan Script', cursive" }}
              >
                React Frontend Developer | Fujairah, UAE | Spouse Visa
              </Typography>
            </motion.div>

            <Divider sx={{ my: 4 }} />

            {/* Sections */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <Typography variant="h6" display="flex" alignItems="center" gutterBottom>
                <Work sx={{ mr: 1, color: '#ff8a65' }} />
                Professional Summary
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Passionate React developer with 4 years of experience crafting modern,
                responsive UIs. Loves bringing ideas to life through clean code,
                seamless interactions, and thoughtful design.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <Box mt={4}>
                <Typography variant="h6" display="flex" alignItems="center" gutterBottom>
                  <Code sx={{ mr: 1, color: '#9575cd' }} />
                  Skills
                </Typography>
                <List dense>
                  {[
                    'React.js, Redux, React Router',
                    'Material UI, Styled Components',
                    'JavaScript (ES6+), HTML5, CSS3',
                    'Node.js, Express (basic)',
                    'Git, VS Code, Webpack',
                  ].map((skill, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i * 0.2}>
                      <ListItem disableGutters>
                        <Star sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary={skill} />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </Box>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <Box mt={4}>
                <Typography variant="h6" display="flex" alignItems="center" gutterBottom>
                  <Work sx={{ mr: 1, color: '#ff7043' }} />
                  Experience
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  React Developer – Zeazonz Technologies Pvt Ltd
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  Feb 2021 – Present | Ernakulam, Kerala, India
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Developed scalable UI components, collaborated with teams to deliver
                  seamless front-end experiences, and participated in agile
                  development cycles.
                </Typography>
              </Box>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
              <Box mt={4}>
                <Typography variant="h6" display="flex" alignItems="center" gutterBottom>
                  <School sx={{ mr: 1, color: '#4fc3f7' }} />
                  Education
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  B.Tech in Electronics and Communication Engineering – College of
                  Engineering, Cherthala (2019)
                </Typography>
              </Box>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}>
              <Divider sx={{ my: 4 }} />
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Box display="flex" alignItems="center">
                  <Email fontSize="small" sx={{ mr: 1, color: '#ab47bc' }} />
                  <Typography variant="body2">ansithamol@gmail.com</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Phone fontSize="small" sx={{ mr: 1, color: '#29b6f6' }} />
                  <Typography variant="body2">+971-52 286 0807</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOn fontSize="small" sx={{ mr: 1, color: '#ef5350' }} />
                  <Typography variant="body2">Fujairah, UAE</Typography>
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

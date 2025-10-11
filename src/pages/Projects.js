import React from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'OnCall Incident Management System',
    description: `Worked on the frontend development of an OnCall Incident Management System from scratch to production.
Built responsive and interactive user interfaces using React and Material UI, implemented dashboards, real-time updates, 
and efficient incident workflows. Focused on delivering a clean, performant, and user-friendly experience.`,
    github: 'https://github.com/yourusername/oncall-ims',
  },
  {
    title: 'MCQ Exam System',
    description: `Developed a dynamic MCQ Exam System using React for the frontend and integrated with a backend API.
Implemented timed quizzes, real-time scoring, and interactive UI components. Focused on usability, responsiveness, 
and providing instant feedback to users.`,
    github: 'https://github.com/yourusername/mcq-exam-system',
  },
  {
    title: 'E-commerce Online Grocery Store',
    description: `Built a fully functional online grocery store using React and Material UI.
Implemented product listings, shopping cart, checkout flow, and user authentication. Ensured responsive design 
and seamless user experience across devices.`,
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
        background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: 6,
        pb: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Floating sparkles */}
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
          background: 'white',
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
          background: 'white',
          filter: 'blur(3px)',
        }}
      />

      <motion.div variants={pageOpen} initial="hidden" animate="visible" style={{ width: '100%', maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
          Projects
        </Typography>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
            style={{ marginBottom: 24 }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                background: 'linear-gradient(135deg, #f3e5f5, #e1f5fe)',
                textAlign: 'center', // center text
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // center content horizontally
              }}
            >
              <CardContent sx={{ maxWidth: 700 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', px: 3, pb: 2 }}>
                <Button
                  href={project.github}
                  target="_blank"
                  variant="outlined"
                  disabled
                  startIcon={<GitHub />}
                  sx={{ borderRadius: 2 }}
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default ProjectsPage;

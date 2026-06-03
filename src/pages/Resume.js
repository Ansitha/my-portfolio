import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  Email,
  Phone,
  LocationOn,
  School,
  ArrowRight,
  LinkedIn,
  CheckCircle,
} from "@mui/icons-material";

import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
};

const skills = [
  "React.js",
  "Next.js",
  "JavaScript ES6+",
  "Material UI",
  "Redux Toolkit",
  "HTML5",
  "CSS3",
  "REST APIs",
  "Node.js",
  "Express.js",
  "Git",
  "GitHub",
  "Vite",
  "Webpack",
];

const languages = [
  { name: "English", level: "Advanced" },
  { name: "Malayalam", level: "Native" },
  { name: "Hindi", level: "Intermediate" },
  { name: "Arabic", level: "Beginner" },
];

const certificates = [
  "JavaScript Algorithms & Data Structures — freeCodeCamp",
  "Java Programming Training — Evosoft Technologies Pvt Ltd",
];

const experiencePoints = [
  "Developed responsive UI components using React.js, JavaScript ES6+, and modern CSS frameworks.",
  "Built reusable component libraries to support scalable multi-module applications.",
  "Integrated REST APIs with proper state handling, loaders, error boundaries, and caching.",
  "Implemented authentication flows including OTP login, Google SSO, protected routes, and session handling.",
  "Created dashboards with tables, filters, charts, and API-driven components.",
  "Developed admin panels with CRUD operations, role-based access, and reusable form components.",
  "Improved UI performance using memoization, code splitting, and rendering optimization.",
  "Collaborated with backend, QA, and design teams in an agile environment.",
  "Participated in code reviews to ensure code quality and consistency.",
  "Contributed to technical documentation and internal UI guidelines.",
];

const Resume = () => {
  const theme = useTheme();

  const bg = theme.palette.background.default;
  const surface = theme.palette.background.paper;
  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;
  const accent = theme.palette.primary.main;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: bg,
        py: 8,
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* SIDEBAR */}
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: surface,
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${textPrimary}20`,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                  color: textPrimary,
                }}
              >
                {/* Avatar */}
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 2,
                    bgcolor: accent,
                    fontSize: 42,
                    fontWeight: 700,
                  }}
                >
                  AA
                </Avatar>

                {/* Name */}
                <Typography variant="h4" textAlign="center" fontWeight={700}>
                  Ansithamol A.
                </Typography>

                <Typography textAlign="center" color={textSecondary} mb={4}>
                  React & Front-End Developer
                </Typography>

                {/* CONTACT */}
                <Card
                  sx={{
                    bgcolor: `${textPrimary}05`,
                    borderRadius: 3,
                    mb: 3,
                    border: `1px solid ${textPrimary}15`,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" mb={2} color={accent}>
                      Contact
                    </Typography>

                    <Stack spacing={2}>
                      <Box display="flex" gap={1}>
                        <Email />
                        <Typography variant="body2">ansithamol@gmail.com</Typography>
                      </Box>

                      <Box display="flex" gap={1}>
                        <Phone />
                        <Typography variant="body2">052 286 0807</Typography>
                      </Box>

                      <Box display="flex" gap={1}>
                        <LocationOn />
                        <Typography variant="body2">United Arab Emirates</Typography>
                      </Box>

                      <Box display="flex" gap={1}>
                        <LinkedIn />
                        <Typography variant="body2">
                          linkedin.com/in/ansithamol-a-5b5864130
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                {/* STATUS */}
                <Card
                  sx={{
                    bgcolor: `${textPrimary}05`,
                    borderRadius: 3,
                    mb: 3,
                    border: `1px solid ${textPrimary}15`,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" mb={2} color={accent}>
                      Availability
                    </Typography>

                    <Stack spacing={1}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <CheckCircle sx={{ color: accent }} />
                        <Typography>Resident Visa</Typography>
                      </Box>

                      <Box display="flex" alignItems="center" gap={1}>
                        <CheckCircle sx={{ color: accent }} />
                        <Typography>Immediate Joiner</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                {/* SKILLS */}
                <Card
                  sx={{
                    bgcolor: `${textPrimary}05`,
                    borderRadius: 3,
                    mb: 3,
                    border: `1px solid ${textPrimary}15`,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" mb={2} color={accent}>
                      Skills
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            bgcolor: `${accent}22`,
                            color: textPrimary,
                            borderRadius: "6px",
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                {/* LANGUAGES */}
                <Card
                  sx={{
                    bgcolor: `${textPrimary}05`,
                    borderRadius: 3,
                    border: `1px solid ${textPrimary}15`,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" mb={2} color={accent}>
                      Languages
                    </Typography>

                    <Stack spacing={1}>
                      {languages.map((lang) => (
                        <Box key={lang.name} display="flex" justifyContent="space-between">
                          <Typography>{lang.name}</Typography>
                          <Typography color={textSecondary}>{lang.level}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Paper>
            </motion.div>
          </Grid>

          {/* MAIN CONTENT */}
          <Grid item xs={12} md={8}>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: surface,
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${textPrimary}15`,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                  color: textPrimary,
                }}
              >
                {/* ABOUT MY WORK */}
                <Typography variant="h4" mb={3} fontWeight={700}>
                  About My Work
                </Typography>

                <Typography color={textSecondary} lineHeight={1.9}>
                  A detail-oriented React Front-End Developer with 5+ years of experience building
                  responsive, scalable, and user-friendly web applications. Strong expertise in
                  React.js, JavaScript ES6+, UI state management, REST API integration,
                  authentication flows, dashboards, and admin panels. Currently expanding into
                  full-stack JavaScript (Node.js) and AI-powered web development.
                </Typography>

                <Divider sx={{ my: 4 }} />

                {/* EXPERIENCE */}
                <Typography variant="h4" mb={3} fontWeight={700}>
                  Engineering Experience
                </Typography>

                <Box sx={{ position: "relative", pl: 3 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      left: 12,
                      top: 0,
                      bottom: 0,
                      width: "2px",
                      bgcolor: accent,
                      opacity: 0.4,
                    }}
                  />

                  <Box sx={{ position: "relative", mb: 4 }}>
                    <Box
                      sx={{
                        position: "absolute",
                        left: -2,
                        top: 4,
                        width: 14,
                        height: 14,
                        bgcolor: accent,
                        borderRadius: "50%",
                      }}
                    />

                    <Typography sx={{ mx: 4 }} variant="h6">
                      React Front-End Developer
                    </Typography>
                    <Typography color={textSecondary}>
                      Zeazonz Technologies Pvt Ltd
                    </Typography>

                    <Typography variant="body2" color={textSecondary} mb={2}>
                      02/2021 – Present (Remote)
                    </Typography>

                    <List dense>
                      {experiencePoints.map((item) => (
                        <ListItem key={item}>
                          <ArrowRight sx={{ color: accent, mr: 1 }} />
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* EDUCATION */}
                <Typography variant="h4" mb={3} fontWeight={700}>
                  Academic Background
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: `${textPrimary}05`,
                    border: `1px solid ${textPrimary}15`,
                    mb: 4,
                  }}
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <School sx={{ color: accent }} />

                    <Box>
                      <Typography variant="h6">
                        B.Tech in Electronics & Communication Engineering
                      </Typography>

                      <Typography color={textSecondary}>
                        College of Engineering, Cherthala (2015–2019)
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* CERTIFICATES */}
                <Typography variant="h4" mb={3} fontWeight={700}>
                  Certificates
                </Typography>

                <List dense>
                  {certificates.map((cert) => (
                    <ListItem key={cert}>
                      <ArrowRight sx={{ color: accent, mr: 1 }} />
                      <ListItemText primary={cert} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Resume;

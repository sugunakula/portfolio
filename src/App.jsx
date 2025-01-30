import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, CardHeader, IconButton, CssBaseline, Paper, Link, Box, Container } from '@mui/material';
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as ScrollLink, Element, Events, scrollSpy } from 'react-scroll';

const theme = createTheme({
  palette: {
    primary: { main: '#1a237e' }, // Deep blue for professionalism
    secondary: { main: '#f5f5f5' },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#34495e',
    }
  },
  typography: { 
    fontFamily: 'Segoe UI, sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '0.25px',
    },
    h6: {
      fontWeight: 400,
      lineHeight: 1.6,
    }
  }
});

const projects = [
  {
    title: "AI Chat App",
    tech: "Java | XML | GPT-3.5 API",
    points: [
      "Integrated voice support and image generation APIs",
      "Enhanced user interaction by 40%"
    ]
  },
  {
    title: "E-Commerce App",
    tech: "Flutter | Firebase",
    points: [
      "Developed admin panel and customer interface",
      "Increased transaction efficiency by 25%"
    ]
  }
];

const skills = [
  { name: 'Flutter', icon: '💙' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'MySQL', icon: '🗃️' },
  { name: 'Git', icon: '🔀' },
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '💻' },
  { name: 'ReactJS', icon: '⚛️' }
];


const experience = [
  {
    position: "Mobile App Developer Intern",
    company: "Paritripti Jewels Pvt Ltd",
    duration: "AUG-OCT 2024",
    points: [
      "Designed 10+ responsive UI components",
      "Reduced data latency by 30%",
      "Lowered crash rates by 25%"
    ]
  }
];

const App = () => {
  React.useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const navItems = [
    { name: 'Summary', icon: '👨💻' },
    { name: 'Projects', icon: '🚀' },
    { name: 'Experience', icon: '💼' },
    { name: 'Skills', icon: '🛠️' }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Enhanced AppBar with gradient and responsive design */}
      <AppBar 
        position="fixed"
        sx={{
          background: 'linear-gradient(to right, #1a237e, #283593)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Sugun Pandu Raju
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.name.toLowerCase()}
                spy={true}
                smooth={true}
                duration={800}
                offset={-64}
              >
                <Typography 
                  component="span" 
                  sx={{ 
                    mx: 2, 
                    cursor: 'pointer',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-2px)',
                      opacity: 0.9
                    }
                  }}
                >
                  {item.icon} {item.name}
                </Typography>
              </ScrollLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ pt: 8 }}>
        {/* Enhanced Summary Section */}
        <Element name="summary">
          <Box 
            component="section" 
            sx={{ 
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              background: 'white', // Updated Background
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("/api/placeholder/1920/1080")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4,
                zIndex: -1
              }
            }}
          >
            <Container maxWidth="lg">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: { xs: 3, md: 6 },
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px'
                  }}
                >
                  <Typography variant="h4" gutterBottom>
                    💻 Hi! I am Sugun Pandu Raju
                  </Typography>
                  <Typography variant="h6" sx={{ lineHeight: 1.8 }}>
                    I am a dedicated Computer Science Engineering student with expertise in web development, 
                    proficient in HTML, CSS, JavaScript, ReactJS, and Flutter. I am passionate about solving 
                    complex problems and developing dynamic, user-centered applications.
                  </Typography>
                </Paper>
              </motion.div>
            </Container>
          </Box>
        </Element>

        {/* Projects Section */}
        <Element name="projects">
          <Box 
            component="section" 
            sx={{ 
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              bgcolor: '#f8f9fa',
              p: { xs: 2, md: 4 }
            }}
          >
            <Container maxWidth="lg">
              <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                🚀 Projects
              </Typography>
              <Grid container spacing={4}>
                {projects.map((project, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <motion.div 
                      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Card 
                        elevation={3} 
                        sx={{ 
                          height: '100%',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)'
                          }
                        }}
                      >
                        <CardHeader 
                          title={<Typography variant="h5">{project.title}</Typography>}
                          subheader={
                            <Typography 
                              variant="subtitle1" 
                              sx={{ 
                                color: 'primary.main',
                                fontWeight: 500 
                              }}
                            >
                              {project.tech}
                            </Typography>
                          }
                        />
                        <CardContent>
                          <ul style={{ paddingLeft: '20px' }}>
                            {project.points.map((point, i) => (
                              <li key={i} style={{ marginBottom: '8px' }}>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Element>

        {/* Experience Section */}
        <Element name="experience">
          <Box 
            component="section" 
            sx={{ 
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'secondary.main',
              p: 4
            }}
          >
            <Container maxWidth={false}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" gutterBottom>💼 Experience</Typography>
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Card elevation={3} sx={{ mb: 4, p: 4 }}>
                      <Typography variant="h4">{exp.position}</Typography>
                      <Typography variant="h5" color="text.secondary" gutterBottom>
                        {exp.company} | {exp.duration}
                      </Typography>
                      <ul style={{ fontSize: '1.25rem' }}>
                        {exp.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Container>
          </Box>
        </Element>

        {/* Skills Section */}
        <Element name="skills">
          <Box 
            component="section" 
            sx={{ 
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              p: 4
            }}
          >
            <Container maxWidth={false}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" gutterBottom>🛠️ Technical Skills</Typography>
                <Grid container spacing={4}>
                  {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Card elevation={3}>
                          <CardContent sx={{ textAlign: 'center', p: 6 }}>
                            <Typography variant="h4">{skill.icon}</Typography>
                            <Typography variant="h5">{skill.name}</Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Container>
          </Box>
        </Element>

        {/* Footer */}
        <Box 
          component="footer" 
          sx={{ 
            background: 'linear-gradient(to right, #1a237e, #283593)',
            color: 'white',
            py: 4
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3} textAlign="center">
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" sx={{ mb: 2 }}>Contact</Typography>
                <Box sx={{ 
                  mt: 2,
                  fontSize: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Phone sx={{ mr: 1 }} /> +91 9121778927
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Email sx={{ mr: 1 }} /> akulasugunpanduraju@gmail.com
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" sx={{ mb: 2 }}>Social</Typography>
                <Box sx={{ 
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2
                }}>
                  <Link 
                    href="https://linkedin.com/in/sugun-pandu-raju-akula" 
                    target="_blank" 
                    color="inherit"
                    sx={{ 
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'translateY(-3px)' }
                    }}
                  >
                    <LinkedIn sx={{ fontSize: 40 }} />
                  </Link>
                  <Link 
                    href="https://github.com/sugunakula" 
                    target="_blank" 
                    color="inherit"
                    sx={{ 
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'translateY(-3px)' }
                    }}
                  >
                    <GitHub sx={{ fontSize: 40 }} />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
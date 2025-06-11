import { Box, Typography, Container, Grid, Card, CardContent, Button, useTheme, alpha, useScrollTrigger } from '@mui/material';
import { Code, DesignServices, Cloud, Analytics, Palette, Search } from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Enhanced service data with colors and more details
const services = [
  {
    icon: <Code sx={{ fontSize: '3rem' }} />,
    title: 'Custom Software',
    description: 'Tailored solutions designed specifically for your business requirements.',
    highlight: 'From MVP to Enterprise',
    color: 'primary.main'
  },
  {
    icon: <DesignServices sx={{ fontSize: '3rem' }} />,
    title: 'UI/UX Design',
    description: 'Beautiful interfaces with intuitive user experiences that delight customers.',
    highlight: 'User-Centered Design',
    color: 'secondary.main'
  },
  {
    icon: <Cloud sx={{ fontSize: '3rem' }} />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure to power your digital transformation.',
    highlight: 'AWS | Azure | GCP',
    color: 'info.main'
  },
  {
    icon: <Analytics sx={{ fontSize: '3rem' }} />,
    title: 'Data Analytics',
    description: 'Actionable insights from your data to drive business decisions.',
    highlight: 'AI-Powered Insights',
    color: 'success.main'
  },
  {
    icon: <Palette sx={{ fontSize: '3rem' }} />,
    title: 'Branding',
    description: 'Memorable brand identities that make lasting impressions.',
    highlight: 'Full Brand Packages',
    color: 'warning.main'
  },
  {
    icon: <Search sx={{ fontSize: '3rem' }} />,
    title: 'Digital Marketing',
    description: 'Boost your online visibility and drive organic traffic.',
    highlight: '360° Marketing',
    color: 'error.main'
  }
];

// Animation variants
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const ServiceCard = ({ service, index }) => {
  const theme = useTheme();
  
  return (
    <Grid 
      item 
      xs={12}
      sm={6}
      md={4}
      lg={4}
      key={index}
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Card sx={{ 
          width: '100%',
          maxWidth: 350,
          height: '100%',
          borderRadius: '16px',
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.7)} 100%)`,
          boxShadow: `0 8px 32px ${alpha(theme.palette[service.color.split('.')[0]].main, 0.1)}`,
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: `0 12px 40px ${alpha(theme.palette[service.color.split('.')[0]].main, 0.2)}`,
            '&:before': {
              opacity: 1
            }
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${theme.palette[service.color.split('.')[0]].main}, ${theme.palette[service.color.split('.')[0]].light})`,
            opacity: 0.7,
            transition: 'opacity 0.3s ease'
          }
        }}>
          <CardContent sx={{ 
            p: 4, 
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Box sx={{ 
              mb: 3,
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${alpha(theme.palette[service.color.split('.')[0]].main, 0.1)} 0%, ${alpha(theme.palette[service.color.split('.')[0]].light, 0.05)} 100%)`,
              border: `1px solid ${alpha(theme.palette[service.color.split('.')[0]].main, 0.2)}`
            }}>
              {service.icon}
            </Box>

            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              mb: 1,
              background: `linear-gradient(90deg, ${theme.palette[service.color.split('.')[0]].main}, ${theme.palette[service.color.split('.')[0]].dark})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {service.title}
            </Typography>

            <Typography variant="body2" sx={{ 
              mb: 2,
              fontWeight: 'medium',
              color: theme.palette[service.color.split('.')[0]].main
            }}>
              {service.highlight}
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {service.description}
            </Typography>

            <Button
              variant="outlined"
              size="small"
              sx={{
                mt: 'auto',
                borderColor: alpha(theme.palette[service.color.split('.')[0]].main, 0.5),
                color: theme.palette[service.color.split('.')[0]].main,
                '&:hover': {
                  backgroundColor: alpha(theme.palette[service.color.split('.')[0]].main, 0.08),
                  borderColor: theme.palette[service.color.split('.')[0]].main
                }
              }}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};

const Services = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const trigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true
  });

  useEffect(() => {
    if (trigger) {
      controls.start("visible");
    }
  }, [controls, trigger]);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box 
      id="services"
      sx={{ 
        py: 15,
        background: `radial-gradient(circle at top left, ${alpha(theme.palette.primary.light, 0.05)} 0%, transparent 30%)`,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: -500,
          right: -300,
          width: 1000,
          height: 1000,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.light, 0.05)} 0%, transparent 70%)`,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3rem' }
            }}
          >
            Our <Box component="span" sx={{ 
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Premium Services</Box>
          </Typography>

          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              mb: 6, 
              color: 'text.secondary', 
              maxWidth: '700px', 
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            We deliver cutting-edge solutions with exceptional quality to accelerate your digital transformation journey.
          </Typography>
        </motion.div>
        
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: '12px',
              fontWeight: 'bold',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: `0 6px 24px ${alpha(theme.palette.primary.main, 0.4)}`,
                transition: 'all 0.3s ease'
              }
            }}
          >
            View All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

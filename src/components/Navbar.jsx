import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  IconButton,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
  useTheme,
  Fade,
  ListItemIcon,
  ListItemText,
  alpha,
  Slide,
  useScrollTrigger
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Info as AboutIcon,
  DesignServices as ServicesIcon,
  ContactMail as ContactIcon,
  RocketLaunch as GetStartedIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const open = Boolean(anchorEl);

  // Hide navbar on scroll down
  const trigger = useScrollTrigger();
  
  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Home", path: "/", icon: <HomeIcon fontSize="small" /> },
    { text: "About", path: "/about", icon: <AboutIcon fontSize="small" /> },
    { text: "Pricing", path: "/pricing", icon: <ServicesIcon fontSize="small" /> },
    { text: "Contact", path: "/contact", icon: <ContactIcon fontSize="small" /> }
  ];

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{ 
            backgroundColor: scrolled ? alpha(theme.palette.background.paper, 0.9) : 'transparent',
            backdropFilter: 'blur(12px)',
            color: theme.palette.text.primary,
            borderBottom: scrolled ? `1px solid ${alpha(theme.palette.divider, 0.1)}` : 'none',
            transition: 'all 0.3s ease',
            py: scrolled ? 0 : 1
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ 
              px: { xs: 0, sm: 2 },
              minHeight: scrolled ? '64px' : '72px',
              transition: 'all 0.3s ease'
            }}>
              {/* Logo/Brand */}
              <Box 
                component={Link} 
                to="/" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  flexGrow: 1,
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': {
                    transform: 'translateX(-3px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                <Box
                  component="img"
                  src="./favicon.ico"
                  alt="Logo"
                  sx={{
                    width: 50,
                    height: 50,
                    mr: 2,
                    borderRadius: '12px',
                    boxShadow: theme.shadows[1]
                  }}
                />
                <Typography 
                  variant="h6" 
                  component="div" 
                  sx={{ 
                    fontWeight: 800,
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: '-0.5px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: { xs: 'none', md: 'block' }
                  }}
                >
                  Task Nexus Technology
                </Typography>
              </Box>
              
              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 0.5
                }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.text}
                      component={Link}
                      to={item.path}
                      color="inherit"
                      sx={{ 
                        fontWeight: 600,
                        borderRadius: '12px',
                        px: 2.5,
                        py: 1,
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: location.pathname === item.path ? '40%' : '0%',
                          height: '3px',
                          backgroundColor: theme.palette.primary.main,
                          transition: 'width 0.3s ease'
                        },
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.05),
                          '&:after': {
                            width: '40%'
                          }
                        }
                      }}
                      startIcon={item.icon}
                    >
                      {item.text}
                    </Button>
                  ))}
                  
                  <Button 
                    component={Link}
                    to="/service-request" 
                    variant="contained" 
                    color="primary" 
                    sx={{ 
                      borderRadius: '12px',
                      px: 3,
                      ml: 1,
                      fontWeight: 'bold',
                      boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.2)}`,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                        transition: 'all 0.3s ease'
                      }
                    }}
                    startIcon={<GetStartedIcon />}
                  >
                    Get Started
                  </Button>
                </Box>
              )}
              
              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                  sx={{ 
                    color: 'inherit',
                    backgroundColor: open ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                    borderRadius: '12px',
                    p: 1.5,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {open ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              )}
              
              {/* Mobile Menu */}
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                TransitionComponent={Fade}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                PaperProps={{
                  sx: {
                    width: '280px',
                    maxWidth: '100%',
                    mt: 1.5,
                    borderRadius: '16px',
                    boxShadow: theme.shadows[10],
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    overflow: 'hidden',
                    background: alpha(theme.palette.background.paper, 0.95)
                  }
                }}
                MenuListProps={{
                  sx: {
                    py: 0
                  }
                }}
              >
                <Box sx={{ 
                  p: 2, 
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  color: 'white'
                }}>
                  <Typography variant="h6" fontWeight="bold">Menu</Typography>
                </Box>
                
                {menuItems.map((item) => (
                  <MenuItem 
                    key={item.text}
                    component={Link} 
                    to={item.path} 
                    onClick={handleMenuClose}
                    selected={location.pathname === item.path}
                    sx={{ 
                      py: 1.5,
                      px: 2,
                      borderLeft: location.pathname === item.path ? `3px solid ${theme.palette.primary.main}` : 'none',
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.05)
                      }
                    }}
                  >
                    <ListItemIcon sx={{ 
                      color: location.pathname === item.path ? theme.palette.primary.main : 'inherit'
                    }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.text} 
                      primaryTypographyProps={{ 
                        fontWeight: 500,
                        color: location.pathname === item.path ? theme.palette.primary.main : 'inherit'
                      }}
                    />
                  </MenuItem>
                ))}
                
                <Divider sx={{ my: 0.5 }} />
                
                <Box sx={{ p: 2 }}>
                  <Button 
                    component={Link}
                    to="/service-request"
                    fullWidth
                    variant="contained" 
                    color="primary" 
                    onClick={handleMenuClose}
                    sx={{ 
                      borderRadius: '12px',
                      py: 1.5,
                      fontWeight: 'bold',
                      boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.2)}`,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                        transition: 'all 0.3s ease'
                      }
                    }}
                    startIcon={<GetStartedIcon />}
                  >
                    Get Started
                  </Button>
                </Box>
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
      
      {/* This spacer pushes content down below the navbar */}
      <Toolbar sx={{ minHeight: scrolled ? '64px' : '72px' }} />
    </>
  );
};

export default Navbar;
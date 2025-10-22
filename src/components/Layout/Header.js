import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  alpha,
  Badge,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, FitnessCenter, Notifications, AccountCircle } from '@mui/icons-material';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Classes', path: '#classes', badge: 'New' },
    { text: 'Trainers', path: '#trainers' },
    { text: 'Membership', path: '#membership', badge: 'Popular' },
    { text: 'Facilities', path: '#facilities' },
    { text: 'Success Stories', path: '#stories' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ 
      width: 320, 
      height: '100%',
      background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #ff6b35 0%, #ff8e53 50%, #ff6b35 100%)',
      }
    }}>
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, ${alpha('#ff6b35', 0.1)} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${alpha('#ff8e53', 0.05)} 0%, transparent 50%)
          `,
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
      
      <Box sx={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ p: 3, borderBottom: `1px solid ${alpha('#fff', 0.1)}` }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                }}
              >
                <FitnessCenter />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: '800', color: 'white' }}>
                ApexFit
              </Typography>
            </Box>
            <IconButton 
              onClick={handleDrawerToggle} 
              sx={{ 
                color: 'white',
                background: alpha('#fff', 0.1),
                '&:hover': {
                  background: alpha('#ff6b35', 0.2),
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), textAlign: 'center' }}>
            Transform Your Body • Elevate Your Life
          </Typography>
        </Box>
        
        {/* Navigation */}
        <Box sx={{ flex: 1, p: 2 }}>
          <List sx={{ py: 2 }}>
            {menuItems.map((item, index) => (
              <ListItem 
                key={item.text} 
                disablePadding
                sx={{ 
                  mb: 1.5,
                  borderRadius: 3,
                  background: alpha('#fff', 0.03),
                  border: `1px solid ${alpha('#fff', 0.05)}`,
                  transition: 'all 0.3s ease',
                  animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`,
                  '&:hover': {
                    background: alpha('#ff6b35', 0.1),
                    borderColor: alpha('#ff6b35', 0.3),
                    transform: 'translateX(8px)',
                  }
                }}
                onClick={handleDrawerToggle}
              >
                <ListItemText 
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography 
                        sx={{ 
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '1rem',
                        }}
                      >
                        {item.text}
                      </Typography>
                      {item.badge && (
                        <Box
                          sx={{
                            background: item.badge === 'New' 
                              ? 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)'
                              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                          }}
                        >
                          {item.badge}
                        </Box>
                      )}
                    </Box>
                  } 
                  sx={{ 
                    px: 3,
                    py: 2,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        
        {/* Footer */}
        <Box sx={{ p: 3, borderTop: `1px solid ${alpha('#fff', 0.1)}` }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
              color: 'white',
              fontWeight: 'bold',
              py: 1.5,
              borderRadius: 3,
              fontSize: '1rem',
              boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #e55a2b 0%, #e57c3b 100%)',
                boxShadow: '0 12px 35px rgba(255, 107, 53, 0.6)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
              mb: 2,
            }}
          >
            Start Free Trial
          </Button>
          <Typography variant="caption" sx={{ color: alpha('#fff', 0.5), textAlign: 'center', display: 'block' }}>
            No credit card required • 7-day trial
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          borderBottom: `1px solid ${alpha('#ff6b35', 0.2)}`,
          height: '20vh',
          minHeight: '120px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          <Toolbar sx={{ 
            justifyContent: 'space-between', 
            height: '100%',
            py: { xs: 1, md: 2 },
          }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: { xs: 50, md: 60 },
                  height: { xs: 50, md: 60 },
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                  borderRadius: { xs: '12px', md: '16px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(10deg) scale(1.05)',
                  }
                }}
              >
                <FitnessCenter sx={{ fontSize: { xs: 24, md: 28 } }} />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  ApexFit
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: alpha('#fff', 0.7),
                    fontWeight: '600',
                    letterSpacing: '1px',
                  }}
                >
                  PREMIUM FITNESS
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="inherit"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #ff6b35 0%, #ff8e53 100%)',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover': {
                        color: '#ff8e53',
                        background: alpha('#ff6b35', 0.1),
                        '&::before': {
                          width: '80%',
                        }
                      }
                    }}
                  >
                    {item.text}
                    {item.badge && (
                      <Box
                        sx={{
                          background: item.badge === 'New' 
                            ? 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)'
                            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          px: 1,
                          py: 0.25,
                          borderRadius: 1,
                          fontSize: '0.6rem',
                          fontWeight: 'bold',
                          ml: 1,
                        }}
                      >
                        {item.badge}
                      </Box>
                    )}
                  </Button>
                ))}
              </Box>
            )}

            {/* Right Side Actions */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton
                  sx={{
                    color: 'white',
                    background: alpha('#fff', 0.05),
                    '&:hover': {
                      background: alpha('#ff6b35', 0.2),
                      color: '#ff8e53',
                    }
                  }}
                >
                  <Badge badgeContent={3} color="error">
                    <Notifications />
                  </Badge>
                </IconButton>
                <IconButton
                  sx={{
                    color: 'white',
                    background: alpha('#fff', 0.05),
                    '&:hover': {
                      background: alpha('#ff6b35', 0.2),
                      color: '#ff8e53',
                    }
                  }}
                >
                  <AccountCircle />
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #e55a2b 0%, #e57c3b 100%)',
                      boxShadow: '0 12px 35px rgba(255, 107, 53, 0.6)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Join Now
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ 
                  color: 'white',
                  background: alpha('#ff6b35', 0.2),
                  '&:hover': {
                    background: alpha('#ff6b35', 0.3),
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 320,
            border: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacing for fixed header */}
      <Box sx={{ height: '20vh', minHeight: '120px' }} />
      
      {/* Global Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
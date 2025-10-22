import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, alpha, TextField, Button } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube, Email, Phone, LocationOn, FitnessCenter, Send } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${alpha('#ff6b35', 0.2)}`,
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 10%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 90%, rgba(255, 142, 83, 0.02) 0%, transparent 50%)
          `,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <Grid container spacing={6}>
          {/* Brand Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                  color: 'white',
                }}
              >
                <FitnessCenter sx={{ fontSize: 28 }} />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #ffffff 0%, #ff8e53 50%, #ff6b35 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                FITNESS
              </Typography>
            </Box>
            
            <Typography variant="body1" sx={{ color: alpha('#fff', 0.8), lineHeight: 1.7, mb: 3, fontSize: '1rem' }}>
              Transform your body, elevate your life. Join us today and start your 
              journey to a healthier, stronger you with our state-of-the-art facilities 
              and expert guidance.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 4 }}>
              {[
                { icon: <Phone sx={{ fontSize: 20 }} />, text: '(555) 123-4567' },
                { icon: <Email sx={{ fontSize: 20 }} />, text: 'hello@fitness.com' },
                { icon: <LocationOn sx={{ fontSize: 20 }} />, text: '123 Fitness St, City, State 12345' },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                  <Box sx={{ color: '#ff6b35' }}>{item.icon}</Box>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), fontWeight: 500 }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { icon: <Instagram /> },
                { icon: <Facebook /> },
                { icon: <Twitter /> },
                { icon: <YouTube /> },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  sx={{
                    backgroundColor: alpha('#ffffff', 0.1),
                    color: alpha('#fff', 0.8),
                    border: `1px solid ${alpha('#ff6b35', 0.3)}`,
                    '&:hover': {
                      backgroundColor: '#ff6b35',
                      color: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                color: '#fff',
                fontSize: '1.1rem'
              }}
            >
              Quick Links
            </Typography>
            {['Home', 'About Us', 'Classes', 'Trainers', 'Pricing'].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  display: 'block',
                  color: alpha('#fff', 0.8),
                  mb: 2,
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#ff6b35',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* Classes */}
          <Grid item xs={6} md={2}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                color: '#fff',
                fontSize: '1.1rem'
              }}
            >
              Classes
            </Typography>
            {['HIIT Training', 'Yoga Flow', 'Strength', 'Spin Class', 'Pilates', 'Boxing'].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  display: 'block',
                  color: alpha('#fff', 0.8),
                  mb: 2,
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#ff6b35',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                color: '#fff',
                fontSize: '1.1rem'
              }}
            >
              Stay Updated
            </Typography>
            <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), mb: 3, lineHeight: 1.6, fontWeight: 500 }}>
              Get the latest news, class schedules, and fitness tips delivered to your inbox.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <TextField
                placeholder="Enter your email"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    backgroundColor: alpha('#fff', 0.05),
                    borderRadius: 2,
                    '& fieldset': {
                      borderColor: alpha('#ff6b35', 0.3),
                    },
                    '&:hover fieldset': {
                      borderColor: alpha('#ff6b35', 0.5),
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#ff6b35',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: alpha('#fff', 0.5),
                  },
                }}
              />
              <Button
                sx={{
                  minWidth: 'auto',
                  px: 3,
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                  borderRadius: 2,
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #e55a2b 0%, #e57c3b 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Send sx={{ fontSize: 20 }} />
              </Button>
            </Box>

            <Typography variant="caption" sx={{ color: alpha('#fff', 0.6), fontSize: '0.8rem' }}>
              By subscribing, you agree to our Privacy Policy
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: `1px solid ${alpha('#ff6b35', 0.2)}`,
            mt: 6,
            pt: 4,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), fontWeight: 500 }}>
            © {new Date().getFullYear()} FITNESS. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  color: alpha('#fff', 0.7),
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#ff6b35',
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
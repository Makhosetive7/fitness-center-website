import React from 'react';
import { Container, Grid, Typography, Button, Box, alpha, Card, CardContent } from '@mui/material';
import { PlayArrow, FitnessCenter, People, MenuBook, Videocam, LocalFireDepartment } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        color: 'white',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '3rem', md: '4rem', lg: '5rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #ff8e53 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'block',
                }}
              >
                FITNESS
              </Box>
              <Box
                component="span"
                sx={{
                  color: alpha('#fff', 0.9),
                  display: 'block',
                  fontSize: '0.8em',
                }}
              >
                IS A STATE OF
              </Box>
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'block',
                }}
              >
                HEALTH
              </Box>
            </Typography>

            <Typography
              sx={{
                color: alpha('#fff', 0.7),
                fontSize: '1.2rem',
                mb: 4,
                maxWidth: '500px',
                lineHeight: 1.6,
              }}
            >
              Transform your life through fitness. Join our community and achieve your health goals with expert guidance.
            </Typography>

            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', gap: 3, mb: 8, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  textTransform: 'none',
                  boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #e55a2b 0%, #e57c3b 100%)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  borderWidth: '2px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textTransform: 'none',
                  color: 'white',
                  borderColor: alpha('#fff', 0.3),
                  backgroundColor: alpha('#fff', 0.05),
                  '&:hover': {
                    borderColor: '#ff6b35',
                    backgroundColor: alpha('#ff6b35', 0.1),
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More
              </Button>
            </Box>

            {/* Stats Grid */}
            <Grid container spacing={3} sx={{ maxWidth: '600px' }}>
              {[
                { number: '120+', label: 'EXPERT COACH', icon: <People sx={{ color: '#ff6b35' }} /> },
                { number: '1K+', label: 'MEMBERS', icon: <FitnessCenter sx={{ color: '#ff6b35' }} /> },
                { number: '50+', label: 'PROGRAMS', icon: <MenuBook sx={{ color: '#ff6b35' }} /> },
                { number: '350+', label: 'VIDEOS TUTORIAL', icon: <Videocam sx={{ color: '#ff6b35' }} /> },
              ].map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <Card
                    sx={{
                      background: alpha('#fff', 0.05),
                      border: `1px solid ${alpha('#ff6b35', 0.2)}`,
                      borderRadius: 2,
                      p: 2,
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: alpha('#ff6b35', 0.1),
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: '0 !important', textAlign: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                        {stat.icon}
                        <Typography variant="h5" sx={{ fontWeight: 800, color: '#ff6b35' }}>
                          {stat.number}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), fontWeight: 600, fontSize: '0.8rem' }}>
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '400px', lg: '500px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Main Fitness Card */}
              <Card
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '400px',
                  height: '300px',
                  background: `linear-gradient(135deg, ${alpha('#ff6b35', 0.9)} 0%, ${alpha('#ff8e53', 0.9)} 100%)`,
                  borderRadius: 3,
                  p: 4,
                  boxShadow: '0 25px 50px rgba(255, 107, 53, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginLeft: 'auto',
                  mr: { lg: 4 },
                }}
              >
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: 'white', mb: 1 }}>
                    220 kcal
                  </Typography>
                  <Typography sx={{ color: alpha('#fff', 0.9), fontWeight: 600 }}>
                    Calories Burned
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: alpha('#fff', 0.8), mb: 2, fontSize: '0.9rem' }}>
                    Start your fitness journey today
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<LocalFireDepartment />}
                    sx={{
                      background: 'white',
                      color: '#ff6b35',
                      borderRadius: 2,
                      px: 4,
                      py: 1,
                      fontWeight: 800,
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': {
                        background: alpha('#fff', 0.9),
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Join Now
                  </Button>
                </Box>
              </Card>

              {/* Secondary Stats Card */}
              <Card
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  background: alpha('#fff', 0.1),
                  border: `1px solid ${alpha('#fff', 0.2)}`,
                  borderRadius: 2,
                  p: 3,
                  backdropFilter: 'blur(10px)',
                  minWidth: '150px',
                  animation: 'float 3s ease-in-out infinite',
                }}
              >
                <CardContent sx={{ p: '0 !important', textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#ff6b35', mb: 1 }}>
                    7280
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), fontWeight: 600 }}>
                    Heart Rate
                  </Typography>
                </CardContent>
              </Card>

              {/* Background Decorative Elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '10%',
                  right: '20%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  zIndex: -1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Global Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
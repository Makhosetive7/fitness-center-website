import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, alpha, Button } from '@mui/material';
import { FitnessCenter, Group, Schedule, Spa, LocalDining, MonitorHeart, ArrowForward } from '@mui/icons-material';

const Features = () => {
  const features = [
    {
      icon: <FitnessCenter sx={{ fontSize: 40 }} />,
      title: 'Premium Equipment',
      description: 'State-of-the-art fitness equipment from leading brands for optimal workouts.',
      stats: '200+ Machines'
    },
    {
      icon: <Group sx={{ fontSize: 40 }} />,
      title: 'Expert Trainers',
      description: 'Certified personal trainers with proven track records of client success.',
      stats: '120+ Coaches'
    },
    {
      icon: <Schedule sx={{ fontSize: 40 }} />,
      title: '24/7 Access',
      description: 'Open round the clock to fit your busy schedule and workout preferences.',
      stats: 'Always Open'
    },
    {
      icon: <Spa sx={{ fontSize: 40 }} />,
      title: 'Recovery Zone',
      description: 'Sauna, steam room, and massage services for post-workout recovery.',
      stats: 'Full Relaxation'
    },
    {
      icon: <LocalDining sx={{ fontSize: 40 }} />,
      title: 'Nutrition Bar',
      description: 'Healthy snacks and protein shakes to fuel your fitness journey.',
      stats: 'Healthy Fuel'
    },
    {
      icon: <MonitorHeart sx={{ fontSize: 40 }} />,
      title: 'Body Analysis',
      description: 'Advanced body composition scanning and progress tracking.',
      stats: 'Track Progress'
    }
  ];

  return (
    <Box sx={{ 
      py: 12, 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 142, 83, 0.03) 0%, transparent 50%)
          `,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #ffffff 0%, #ff8e53 50%, #ff6b35 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 3,
              letterSpacing: '-0.02em',
            }}
          >
            WHY CHOOSE US
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: alpha('#fff', 0.8),
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.7,
              fontWeight: 300,
              fontSize: '1.2rem',
            }}
          >
            Experience world-class facilities and expert guidance designed to help you 
            achieve extraordinary results
          </Typography>
        </Box>

        {/* Features Grid - 3 per row on large screens */}
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card
                sx={{
                  background: alpha('#fff', 0.05),
                  borderRadius: 3,
                  border: `1px solid ${alpha('#ff6b35', 0.2)}`,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(255, 107, 53, 0.2)',
                    borderColor: alpha('#ff6b35', 0.5),
                    background: alpha('#ff6b35', 0.1),
                  },
                }}
              >
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Icon with gradient background */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                      color: 'white',
                      mb: 3,
                      boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
                    }}
                  >
                    {feature.icon}
                  </Box>

                  {/* Stats badge */}
                  <Box
                    sx={{
                      display: 'inline-block',
                      background: alpha('#ff6b35', 0.2),
                      color: '#ff8e53',
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      mb: 2,
                      border: `1px solid ${alpha('#ff6b35', 0.3)}`,
                      alignSelf: 'flex-start',
                    }}
                  >
                    {feature.stats}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      mb: 2,
                      fontSize: '1.5rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: alpha('#fff', 0.8),
                      lineHeight: 1.6,
                      mb: 3,
                      fontSize: '1rem',
                      flexGrow: 1,
                    }}
                  >
                    {feature.description}
                  </Typography>

                  {/* Learn More Link */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#ff6b35',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#ff8e53',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    Learn more
                    <ArrowForward sx={{ fontSize: 18, ml: 1 }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              px: 6,
              py: 2,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
              fontSize: '1.1rem',
              fontWeight: '700',
              textTransform: 'none',
              boxShadow: '0 8px 30px rgba(255, 107, 53, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #e55a2b 0%, #e57c3b 100%)',
                boxShadow: '0 12px 40px rgba(255, 107, 53, 0.6)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Explore All Features
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
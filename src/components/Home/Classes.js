import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, alpha, Chip, Button } from '@mui/material';
import { Schedule, Group, FitnessCenter, ArrowForward, LocalFireDepartment } from '@mui/icons-material';

const Classes = () => {
  const classes = [
    {
      name: 'HIIT Training',
      description: 'High-intensity interval training for maximum calorie burn and endurance building.',
      duration: '45 mins',
      intensity: 'High',
      trainer: 'Sarah Chen',
      image: '🔥',
      participants: '12 spots left'
    },
    {
      name: 'Yoga Flow',
      description: 'Mindful movement and breathing exercises for flexibility and mental clarity.',
      duration: '60 mins',
      intensity: 'Low',
      trainer: 'Marcus Rodriguez',
      image: '🧘',
      participants: '8 spots left'
    },
    {
      name: 'Strength Training',
      description: 'Build muscle and increase strength with progressive weight training.',
      duration: '50 mins',
      intensity: 'Medium',
      trainer: 'Jessica Williams',
      image: '💪',
      participants: '15 spots left'
    },
    {
      name: 'Spin Class',
      description: 'High-energy cycling sessions with motivating music and expert instruction.',
      duration: '45 mins',
      intensity: 'High',
      trainer: 'David Kim',
      image: '🚴',
      participants: '5 spots left'
    },
    {
      name: 'Pilates',
      description: 'Core strengthening and body alignment for improved posture and stability.',
      duration: '55 mins',
      intensity: 'Medium',
      trainer: 'Emily Johnson',
      image: '🌟',
      participants: '10 spots left'
    },
    {
      name: 'Boxing',
      description: 'Learn boxing techniques while getting an incredible full-body workout.',
      duration: '50 mins',
      intensity: 'High',
      trainer: 'Mike Thompson',
      image: '🥊',
      participants: '3 spots left'
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
            radial-gradient(circle at 70% 30%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(255, 142, 83, 0.03) 0%, transparent 50%)
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
            GROUP CLASSES
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
            Join our diverse range of group classes designed for all fitness levels. 
            Expert trainers, motivating atmosphere, and incredible results.
          </Typography>
        </Box>

        {/* Classes Grid - 3 per row on large screens */}
        <Grid container spacing={3}>
          {classes.map((classItem, index) => (
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
                <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Class Header */}
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                      p: 3,
                      textAlign: 'center',
                      borderTopLeftRadius: 3,
                      borderTopRightRadius: 3,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Background Pattern */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `
                          radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
                        `,
                      }}
                    />
                    <Typography variant="h1" sx={{ fontSize: '3.5rem', mb: 2, position: 'relative', zIndex: 2 }}>
                      {classItem.image}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: 'white',
                        mb: 1,
                        position: 'relative',
                        zIndex: 2,
                        fontSize: '1.5rem'
                      }}
                    >
                      {classItem.name}
                    </Typography>
                    <Chip
                      label={classItem.intensity}
                      sx={{
                        background: alpha('#fff', 0.2),
                        color: 'white',
                        fontWeight: 600,
                        position: 'relative',
                        zIndex: 2,
                      }}
                    />
                  </Box>

                  {/* Class Details */}
                  <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: alpha('#fff', 0.8),
                        lineHeight: 1.6,
                        mb: 3,
                        flexGrow: 1,
                        fontSize: '0.95rem'
                      }}
                    >
                      {classItem.description}
                    </Typography>

                    {/* Class Info */}
                    <Box sx={{ mb: 3, space: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                          <Schedule sx={{ fontSize: 20, color: '#ff6b35' }} />
                          <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), fontWeight: 600 }}>
                            {classItem.duration}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                          <Group sx={{ fontSize: 20, color: '#ff6b35' }} />
                          <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), fontWeight: 600 }}>
                            {classItem.trainer}
                          </Typography>
                        </Box>
                      </Box>
                      
                      {/* Spots Available */}
                      <Box
                        sx={{
                          background: alpha('#ff6b35', 0.1),
                          border: `1px solid ${alpha('#ff6b35', 0.3)}`,
                          borderRadius: 2,
                          p: 1.5,
                          textAlign: 'center'
                        }}
                      >
                        <Typography variant="body2" sx={{ color: '#ff8e53', fontWeight: 700, fontSize: '0.9rem' }}>
                          {classItem.participants}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      variant="contained"
                      endIcon={<ArrowForward />}
                      sx={{
                        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                        color: 'white',
                        fontWeight: 700,
                        borderRadius: 2,
                        py: 1,
                        textTransform: 'none',
                        boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #e55a2b 0%, #e57c3b 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<LocalFireDepartment />}
            sx={{
              borderColor: alpha('#ff6b35', 0.5),
              color: '#ff6b35',
              px: 6,
              py: 2,
              borderRadius: 2,
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'none',
              background: alpha('#ff6b35', 0.05),
              backdropFilter: 'blur(10px)',
              '&:hover': {
                borderColor: '#ff6b35',
                background: alpha('#ff6b35', 0.1),
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            View Full Schedule
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Classes;
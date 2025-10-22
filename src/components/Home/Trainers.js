import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, alpha, Chip, IconButton, Button } from '@mui/material';
import { Facebook, Instagram, Twitter, FitnessCenter, ArrowForward, Star } from '@mui/icons-material';

const Trainers = () => {
  const trainers = [
    {
      name: 'Sarah Chen',
      specialization: 'HIIT & Strength',
      experience: '8 years',
      bio: 'NASM certified trainer specializing in high-intensity workouts and strength building.',
      image: '👩‍💼',
      specialties: ['HIIT', 'Strength', 'Nutrition'],
      rating: '4.9',
      clients: '250+'
    },
    {
      name: 'Marcus Rodriguez',
      specialization: 'Yoga & Mobility',
      experience: '12 years',
      bio: 'RYT-500 certified yoga instructor with expertise in mobility and functional movement.',
      image: '🧘‍♂️',
      specialties: ['Yoga', 'Mobility', 'Meditation'],
      rating: '4.8',
      clients: '180+'
    },
    {
      name: 'Jessica Williams',
      specialization: 'Bodybuilding',
      experience: '10 years',
      bio: 'IFBB Pro with multiple competition wins, specializing in physique transformation.',
      image: '💪',
      specialties: ['Bodybuilding', 'Physique', 'Competition'],
      rating: '5.0',
      clients: '300+'
    },
    {
      name: 'David Kim',
      specialization: 'Cycling & Endurance',
      experience: '6 years',
      bio: 'Former competitive cyclist now helping others build endurance and cardiovascular health.',
      image: '🚴‍♂️',
      specialties: ['Cycling', 'Endurance', 'Cardio'],
      rating: '4.7',
      clients: '200+'
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
            radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(255, 142, 83, 0.03) 0%, transparent 50%)
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
            MEET OUR TRAINERS
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
            Our certified personal trainers bring years of experience and passion 
            to help you achieve your fitness goals with personalized guidance.
          </Typography>
        </Box>

        {/* Trainers Grid - 4 per row on large screens */}
        <Grid container spacing={3}>
          {trainers.map((trainer, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
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
                  {/* Trainer Header */}
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
                    <Typography variant="h1" sx={{ fontSize: '4rem', mb: 2, position: 'relative', zIndex: 2 }}>
                      {trainer.image}
                    </Typography>
                  </Box>

                  {/* Trainer Info */}
                  <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: 'white',
                        mb: 1,
                        textAlign: 'center',
                        fontSize: '1.4rem'
                      }}
                    >
                      {trainer.name}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#ff8e53',
                        fontWeight: 600,
                        mb: 2,
                        textAlign: 'center',
                        fontSize: '1rem'
                      }}
                    >
                      {trainer.specialization}
                    </Typography>

                    {/* Rating and Experience */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 1 }}>
                      <Chip
                        icon={<Star sx={{ fontSize: 16, color: '#ffd700' }} />}
                        label={trainer.rating}
                        size="small"
                        sx={{
                          background: alpha('#ffd700', 0.1),
                          color: '#ffd700',
                          fontWeight: 600,
                          flex: 1
                        }}
                      />
                      <Chip
                        icon={<FitnessCenter sx={{ fontSize: 16, color: '#ff6b35' }} />}
                        label={trainer.experience}
                        size="small"
                        sx={{
                          background: alpha('#ff6b35', 0.1),
                          color: '#ff8e53',
                          fontWeight: 600,
                          flex: 1
                        }}
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: alpha('#fff', 0.8),
                        lineHeight: 1.6,
                        mb: 3,
                        textAlign: 'center',
                        fontSize: '0.9rem',
                        flexGrow: 1
                      }}
                    >
                      {trainer.bio}
                    </Typography>

                    {/* Specialties */}
                    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                      {trainer.specialties.map((specialty, idx) => (
                        <Chip
                          key={idx}
                          label={specialty}
                          size="small"
                          sx={{
                            background: alpha('#ff6b35', 0.1),
                            color: '#ff8e53',
                            fontWeight: 500,
                            fontSize: '0.7rem',
                            border: `1px solid ${alpha('#ff6b35', 0.3)}`,
                          }}
                        />
                      ))}
                    </Box>

                    {/* Clients */}
                    <Box
                      sx={{
                        background: alpha('#ff6b35', 0.1),
                        border: `1px solid ${alpha('#ff6b35', 0.3)}`,
                        borderRadius: 2,
                        p: 1.5,
                        textAlign: 'center',
                        mb: 2
                      }}
                    >
                      <Typography variant="body2" sx={{ color: '#ff8e53', fontWeight: 700, fontSize: '0.8rem' }}>
                        {trainer.clients} Happy Clients
                      </Typography>
                    </Box>

                    {/* Social Links */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: alpha('#fff', 0.7),
                          background: alpha('#fff', 0.1),
                          '&:hover': {
                            background: '#ff6b35',
                            color: 'white'
                          }
                        }}
                      >
                        <Instagram fontSize="small" />
                      </IconButton>
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: alpha('#fff', 0.7),
                          background: alpha('#fff', 0.1),
                          '&:hover': {
                            background: '#ff6b35',
                            color: 'white'
                          }
                        }}
                      >
                        <Facebook fontSize="small" />
                      </IconButton>
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: alpha('#fff', 0.7),
                          background: alpha('#fff', 0.1),
                          '&:hover': {
                            background: '#ff6b35',
                            color: 'white'
                          }
                        }}
                      >
                        <Twitter fontSize="small" />
                      </IconButton>
                    </Box>

                    <Button
                      variant="contained"
                      size="small"
                      fullWidth
                      sx={{
                        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                        color: 'white',
                        fontWeight: 700,
                        borderRadius: 2,
                        py: 1,
                        textTransform: 'none',
                        fontSize: '0.9rem',
                        boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #e55a2b 0%, #e57c3b 100%)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Book Session
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
            endIcon={<ArrowForward />}
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
            Meet All Trainers
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Trainers;
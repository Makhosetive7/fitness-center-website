import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, alpha, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Check as CheckIcon, Star as StarIcon, LocalFireDepartment } from '@mui/icons-material';

const Membership = () => {
  const plans = [
    {
      name: 'BASIC',
      price: '$49',
      period: 'per month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Access to gym equipment',
        'Locker room facilities',
        'Basic fitness assessment',
        'Group class access (2/week)',
        'Open 5AM-11PM'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'PRO',
      price: '$79',
      period: 'per month',
      description: 'Our most popular plan for serious fitness enthusiasts',
      features: [
        'Unlimited gym access',
        'All group classes included',
        'Priority booking',
        'Personalized workout plan',
        'Nutrition guidance',
        '24/7 access',
        'Guest passes (2/month)'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'ELITE',
      price: '$129',
      period: 'per month',
      description: 'Maximum benefits with personal training included',
      features: [
        'All Pro features included',
        '4 personal training sessions',
        'Advanced body composition',
        'Recovery services access',
        'Nutrition bar credit',
        'Unlimited guest passes',
        'Dedicated locker'
      ],
      buttonText: 'Contact Us',
      popular: false
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
            radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 142, 83, 0.03) 0%, transparent 50%)
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
            MEMBERSHIP PLANS
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
            Choose the plan that fits your fitness goals and lifestyle. 
            All memberships include a 7-day free trial to experience our facilities.
          </Typography>
        </Box>

        {/* Membership Plans - 3 per row on large screens */}
        <Grid container spacing={3} alignItems="stretch">
          {plans.map((plan, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  background: alpha('#fff', 0.05),
                  borderRadius: 3,
                  border: `1px solid ${plan.popular ? alpha('#ff6b35', 0.5) : alpha('#ff6b35', 0.2)}`,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  backdropFilter: 'blur(10px)',
                  boxShadow: plan.popular ? '0 8px 32px rgba(255, 107, 53, 0.2)' : '0 8px 32px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: plan.popular 
                      ? '0 20px 40px rgba(255, 107, 53, 0.3)'
                      : '0 20px 40px rgba(255, 107, 53, 0.2)',
                    borderColor: alpha('#ff6b35', 0.6),
                    background: alpha('#ff6b35', 0.08),
                  },
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)',
                      color: 'white',
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      zIndex: 2,
                    }}
                  >
                    <StarIcon sx={{ fontSize: 14 }} />
                    MOST POPULAR
                  </Box>
                )}

                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Plan Name */}
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      background: plan.popular 
                        ? 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)'
                        : 'linear-gradient(135deg, #ffffff 0%, #ff8e53 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      mb: 1,
                      textAlign: 'center',
                      fontSize: '1.75rem'
                    }}
                  >
                    {plan.name}
                  </Typography>

                  {/* Price */}
                  <Box sx={{ textAlign: 'center', my: 3 }}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 900,
                        color: plan.popular ? '#ff6b35' : '#ff8e53',
                        lineHeight: 1,
                        mb: 1,
                        fontSize: '3.5rem'
                      }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: alpha('#fff', 0.7),
                        fontWeight: 500,
                        fontSize: '1rem'
                      }}
                    >
                      {plan.period}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: alpha('#fff', 0.8),
                      textAlign: 'center',
                      mb: 4,
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}
                  >
                    {plan.description}
                  </Typography>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? "contained" : "outlined"}
                    fullWidth
                    size="large"
                    startIcon={plan.popular ? <LocalFireDepartment /> : null}
                    sx={{
                      mb: 4,
                      py: 2,
                      borderRadius: 2,
                      fontSize: '1rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      background: plan.popular 
                        ? 'linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)' 
                        : 'transparent',
                      color: plan.popular ? 'white' : '#ff6b35',
                      borderColor: plan.popular ? 'transparent' : '#ff6b35',
                      borderWidth: '2px',
                      boxShadow: plan.popular ? '0 8px 25px rgba(255, 107, 53, 0.3)' : 'none',
                      '&:hover': {
                        background: plan.popular 
                          ? 'linear-gradient(135deg, #e55a2b 0%, #e57c3b 100%)'
                          : alpha('#ff6b35', 0.1),
                        transform: 'translateY(-2px)',
                        boxShadow: plan.popular 
                          ? '0 12px 35px rgba(255, 107, 53, 0.4)'
                          : '0 8px 25px rgba(255, 107, 53, 0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {plan.buttonText}
                  </Button>

                  {/* Features List */}
                  <List dense sx={{ flexGrow: 1 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon sx={{ 
                            color: plan.popular ? '#ff6b35' : '#ff8e53', 
                            fontSize: '1.1rem' 
                          }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: {
                              color: alpha('#fff', 0.8),
                              fontWeight: 500,
                              fontSize: '0.9rem'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Note */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography
            variant="body2"
            sx={{
              color: alpha('#fff', 0.7),
              maxWidth: 500,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: '0.9rem',
              background: alpha('#ff6b35', 0.1),
              border: `1px solid ${alpha('#ff6b35', 0.3)}`,
              borderRadius: 2,
              p: 2
            }}
          >
            💪 All plans include a 7-day free trial • No long-term contracts • Cancel anytime
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Membership;
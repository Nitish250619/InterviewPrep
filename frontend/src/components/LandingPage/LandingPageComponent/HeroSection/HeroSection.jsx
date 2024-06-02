import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled component for animated typography
const AnimatedTypography = styled(Typography)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        padding: '50px 20px',
        overflow: 'hidden',
        '@media (min-width:600px)': {
          padding: '80px 40px',
          '& > *': {
            fontSize: '44px',
          },
        },
        '@media (min-width:960px)': {
          padding: '100px 60px',
          '& > *': {
            fontSize: '3rem',
          },
        },
        '@media (min-width:1280px)': {
          padding: '120px 80px',
          '& > *': {
            fontSize: '2rem',
          },
        },
      }}
    >
      <AnimatedTypography variant="h2" component="h1" gutterBottom>
        Practice Your Interview Skills
      </AnimatedTypography>
      <Typography variant="body1" gutterBottom>
        We've teamed up with interview experts and recruiters
      </Typography>
    </Box>
  );
};

export default HeroSection;

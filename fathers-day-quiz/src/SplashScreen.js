import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)({
  backgroundImage: 'url("/path/to/your/background/image.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  color: '#434760', // Ensure text is visible against the background
  padding: '0 20px', // Add some padding for better text visibility on small screens
});

const StartButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#13421a',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#36755b',
  },
});

const SplashScreen = ({ onStart }) => {
  return (
    <BackgroundBox>
      <Typography variant="h4" gutterBottom>
        How good a dad are you?
      </Typography>
      <StartButton variant="contained" onClick={onStart}>
        Start Quiz
      </StartButton>
    </BackgroundBox>
  );
};

export default SplashScreen;

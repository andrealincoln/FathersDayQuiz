import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from './BackgroundImages/fathersDaySplash.jpg'; // Adjust the path as necessary

const BackgroundBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover', // Ensure the image covers the entire viewport proportionally
  backgroundRepeat: 'no-repeat', // Prevent the image from repeating
  backgroundPosition: 'center', // Center the image
  zIndex: -1, // Ensure the background is behind other content
});

const ContentBox = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '90vh',
  width: '70vw',
  padding: '0 20px', // Add some padding for better text visibility on small screens
  boxSizing: 'border-box', // Include padding and border in the element's total width and height
});

const CenteredText = styled(Typography)({
  position: 'absolute',
  top: '45%', // Adjust based on the position of the blue circle
  left: '35%',
  transform: 'translate(-50%, -50%)',
  color: '#0e111f', // Ensure the text is visible against the blue background
});

const StartButton = styled(Button)({
  position: 'absolute',
  top: '55%', // Adjust based on the position of the blue circle
  left: '35%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#235d27',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#122c15',
  },
});

const SplashScreen = ({ onStart }) => {
  return (
    <>
      <BackgroundBox />
      <ContentBox>
        <CenteredText variant="h4" gutterBottom>
          How good a dad are you?
        </CenteredText>
        <StartButton variant="contained" onClick={onStart}>
          Start Quiz
        </StartButton>
      </ContentBox>
    </>
  );
};

export default SplashScreen;

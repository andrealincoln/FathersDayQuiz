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
  height: '100%',
  width: '100%',
  padding: '0 20px', // Add some padding for better text visibility on small screens
  boxSizing: 'border-box', // Include padding and border in the element's total width and height
});

const CenteredText = styled(Typography)({
  fontSize: '4vw', // Adjust based on viewport width
  color: '#0e111f', // Ensure the text is visible against the blue background
  textAlign: 'center', // Center the text
  marginBottom: '20px', // Add some space between the text and the button
});

const StartButton = styled(Button)({
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

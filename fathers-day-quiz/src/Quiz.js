import React, { useState } from 'react';
import { Container, Typography, Box, LinearProgress } from '@mui/material';
import questions from './questions';
import Question from './Question';
import SplashScreen from './SplashScreen';
import quizCornerImage from './BackgroundImages/QuizCorner.png'; // Import the new image


const getDadReference = (score) => {
  if (score <= 3) {
    return "You are like Homer Simpson from The Simpsons. Not the best dad, but deep down you love your kids!";
  } else if (score <= 7) {
    return "You are like Danny Tanner from Full House. You're trying your best and always have your kids' best interests at heart!";
  } else if (score <= 11) {
    return "You are like Phil Dunphy from Modern Family. A good dad who is loving, supportive, and sometimes a bit goofy!";
  } else {
    return "You are like Mufasa from The Lion King. A super dad who is wise, noble, and a loving protector!";
  }
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [feedback, setFeedback] = useState(null);

  const handleAnswerOptionClick = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setFeedback({
      isCorrect,
      correctAnswer: questions[currentQuestion].correctAnswer,
    });

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setFeedback(null);
    }, 750); // 3/4 of a second
  };

  const handleStartQuiz = () => {
    setShowSplash(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        {showSplash ? (
          <SplashScreen onStart={handleStartQuiz} />
        ) : showScore ? (
          <Typography variant="h5">
            Congratulations! You've completed the quiz. You got {correctAnswers} out of {questions.length} correct. Happy Father's Day!
            <Typography variant="h6" mt={2}>
              {getDadReference(correctAnswers)}
            </Typography>
          </Typography>
        ) : (
          <>
            <Box position="absolute" top={0} left={0} width="30%" >
              <img src={quizCornerImage} alt="Quiz Corner" style={{ width: '100%', height: '100%' }} />
            </Box>
            <LinearProgress variant="determinate" value={progress} />
            <Typography variant="body1" mt={2} mb={2}>
              Question {currentQuestion + 1} of {questions.length}
            </Typography>
            {feedback ? (
              <Box>
                <Typography variant="h6" color={feedback.isCorrect ? 'green' : 'red'}>
                  {feedback.isCorrect ? 'Correct!' : `Incorrect! The correct answer was: ${feedback.correctAnswer}`}
                </Typography>
              </Box>
            ) : (
              <Question
                question={questions[currentQuestion]}
                handleAnswerOptionClick={handleAnswerOptionClick}
              />
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Quiz;

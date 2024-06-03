import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import questions from './questions';
import Question from './Question';
import SplashScreen from './SplashScreen';

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

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        {showSplash ? (
          <SplashScreen onStart={handleStartQuiz} />
        ) : showScore ? (
          <Typography variant="h5">
            Congratulations! You've completed the quiz. You got {correctAnswers} out of {questions.length} correct. Happy Father's Day!
          </Typography>
        ) : feedback ? (
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
      </Box>
    </Container>
  );
};

export default Quiz;

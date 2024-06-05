import React, { useState } from 'react';
import { Container, Typography, Box, LinearProgress } from '@mui/material';
import questions from './questions';
import Question from './Question';
import SplashScreen from './SplashScreen';
import quizCornerImage from './BackgroundImages/QuizCorner.png'; // Import the new image
import dadImage1 from './BackgroundImages/DadImage1.jpg';
import dadImage2 from './BackgroundImages/DadImage2.jpg';
import dadImage3 from './BackgroundImages/DadImage3.jpg';
import dadImage4 from './BackgroundImages/DadImage4.jpg';
import humorousImage from './BackgroundImages/sillyDad.webp';


const getDadReference = (score) => {
  if (score <= 3) {
    return "ChatGPT thinks you are like Nero or Caligula. You might have some power, but your fatherly skills could use some serious work. Don't worry, there's always room for improvement!";
  } else if (score <= 7) {
    return "ChatGPT thinks you are like Cicero or Tiberius. You've faced your fair share of challenges and made some mistakes, but you always try your best and have your heart in the right place.";
  } else if (score <= 11) {
    return "ChatGPT thinks you are like Harry S. Truman or Marcus Aurelius. A solid father who makes wise decisions, supports your family, and handles responsibilities well.";
  } else {
    return "ChatGPT thinks you are like Augustus or Winston Churchill. A true leader and role model, you excel in your fatherly duties and inspire those around you with your dedication and wisdom.";
  }
};

const getDadImage = (score) => {
  if (score <= 3) {
    return dadImage1;
  } else if (score <= 7) {
    return dadImage2;
  } else if (score <= 11) {
    return dadImage3;
  } else {
    return dadImage4;
  }
};

const ScoreDisplay = ({ correctAnswers, totalQuestions }) => {
  return (
    <Box mt={5} textAlign="center" p={3} borderRadius={5} boxShadow={3} bgcolor="#f0f4c3">
      <Typography variant="h4" gutterBottom color="primary">
        Congratulations!
      </Typography>
      <Typography variant="h5" gutterBottom>
        You've completed the quiz.
      </Typography>
      <Typography variant="h6" gutterBottom>
        You got {correctAnswers} out of {totalQuestions} correct.
      </Typography>
      <Typography variant="h6" mt={2} color="secondary">
        {getDadReference(correctAnswers)}
      </Typography>
      <Box mt={4}>
        <img
          src={getDadImage(correctAnswers)}
          alt="Dad"
          style={{ width: '200px', height: 'auto' }}
        />
      </Box>
      <Box position="absolute" bottom={0} left={0} p={3}>
        <img
          src={humorousImage}
          alt="Humorous"
          style={{ width: '200px', height: 'auto' }}
        />
      </Box>
      <Typography variant="h5" mt={2} color="textSecondary">
        Happy Father's Day!
      </Typography>
    </Box>
  );
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
          <ScoreDisplay correctAnswers={correctAnswers} totalQuestions={questions.length} />
        ) : (
          <>
            <Box position="absolute" top={0} left={0} width="30%">
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

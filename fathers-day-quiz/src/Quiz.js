// src/Quiz.js
import React, { useState } from 'react';
import { Container, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Box } from '@mui/material';
import questions from './questions';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    setAnswers([...answers, answer]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>Father's Day Quiz</Typography>
        {showScore ? (
          <Typography variant="h5">Congratulations! You've completed the quiz. Happy Father's Day!</Typography>
        ) : (
          <>
            <Typography variant="h6">{questions[currentQuestion].questionText}</Typography>
            <FormControl component="fieldset">
              <RadioGroup>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <FormControlLabel
                    key={answerOption.answerText}
                    value={answerOption.answerText}
                    control={<Radio />}
                    label={answerOption.answerText}
                    onClick={() => handleAnswerOptionClick(answerOption.answerText)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Quiz;

// src/Question.js
import React from 'react';
import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const Question = ({ question, handleAnswerOptionClick }) => {
  return (
    <>
      <Typography variant="h6">{question.questionText}</Typography>
      <FormControl component="fieldset">
        <RadioGroup>
          {question.answerOptions.map((answerOption) => (
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
  );
};

export default Question;

import React, { useState } from 'react';
import { Box, Typography, Button, Divider, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { quizData } from './QuizData/QuizData';





const QuizApp = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setSelectedDifficulty(null);
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setOpenDialog(true);
  };

  const handleQuizSelect = (quizIndex) => {
    navigate(`/quiz/${selectedTopic}/${selectedDifficulty}/${quizIndex}`);
    setOpenDialog(false);
  };

  const renderOptions = () => {
    if (selectedTopic === null) {
      return null;
    }

    return (
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h5">Choose Difficulty:</Typography>
        </Grid>
        {['Beginner', 'Intermediate', 'Advanced'].map((difficulty, index) => (
          <Grid item key={index}>
            <Button variant="contained" color="primary" onClick={() => handleDifficultySelect(difficulty)}>
              {selectedTopic} {difficulty}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderQuizOptions = () => {
    if (!selectedTopic || !selectedDifficulty) {
      return null;
    }

    const quizzes = quizData[selectedTopic][selectedDifficulty];

    return (
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Choose a Quiz</DialogTitle>
        <DialogContent>
          {quizzes.map((quiz, index) => (
            <Button key={index} onClick={() => handleQuizSelect(index)}>
              {quiz.title}
            </Button>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', p: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 600 }}>
        <Typography variant="h5" textAlign="center">Choose a Topic:</Typography>
        <Grid container spacing={2} justifyContent="center">
          {['HTML', 'CSS', 'JavaScript', 'React'].map((topic, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleTopicSelect(topic)}
              >
                {topic}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Divider />
        {renderOptions()}
        {renderQuizOptions()}
      </Box>
    </Box>
  );
};

export default QuizApp;

import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" gutterBottom>
        React To-Do Application
      </Typography>
      <TaskInput />
      <TaskList />
    </Container>
  );
};

export default App;

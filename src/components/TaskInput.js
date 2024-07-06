import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';
import { TextField, Button } from '@mui/material';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, completed: false }));
      setTask('');
    }
  };

  return (
    <div>
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <Button onClick={handleAddTask} variant="contained" color="primary">
        Add Task
      </Button>
    </div>
  );
};

export default TaskInput;

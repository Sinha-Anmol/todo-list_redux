import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../actions';
import { Checkbox, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask({ ...task, text: newText }));
    setIsEditing(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox checked={task.completed} onChange={handleToggle} />
      {isEditing ? (
        <TextField
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
        />
      ) : (
        <span
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            flexGrow: 1,
          }}
        >
          {task.text}
        </span>
      )}
      {isEditing ? (
        <IconButton onClick={handleEdit}>
          <SaveIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsEditing(true)}>
          <EditIcon />
        </IconButton>
      )}
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TaskItem;

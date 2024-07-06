export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId,
  });
  
  export const editTask = (task) => ({
    type: 'EDIT_TASK',
    payload: task,
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    payload: taskId,
  });
  
import { Button, TextInput, Group } from '@mantine/core';
import { useState } from 'react';
import TodoList from './List';

function Demo() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim().length < 2) {
      alert('La tarea es muy corta');
      return;
    }
    setTasks([...tasks, { text: taskInput, completed: false }]);
    setTaskInput('');
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <Group spacing="sm" mb="md">
        <TextInput
          label=""
          placeholder="Ingresa la tarea a realizar"
          value={taskInput}
          onChange={(event) => setTaskInput(event.currentTarget.value)}
        />
        <Button onClick={addTask}>Agregar Tarea</Button>
      </Group>
      <TodoList tasks={tasks} onToggleCompletion={toggleTaskCompletion} onRemoveTask={removeTask} />
    </>
  );
}

export default Demo;

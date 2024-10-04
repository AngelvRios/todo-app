import { Stack, Button, Checkbox, Group, Paper, Text } from '@mantine/core';

function TodoList({ tasks, onToggleCompletion, onRemoveTask }) {
  if (tasks.length === 0) {
    return <Text align="center" color="gray">No hay tareas agregadas.</Text>;
  }

  return (
    <Stack spacing="lg" sx={{ width: 300, height: 300 }}>
      {tasks.map((task, index) => (
        <Paper shadow="xl" radius="lg" p="xl" key={index}>
          <Group position="apart" sx={{ width: '100%' }}>
            <Checkbox
              checked={task.completed}
              onChange={() => onToggleCompletion(index)}
              color="teal" 
              radius="md"
            />
            <Text td={task.completed ? 'line-through' : 'none'} color={task.completed ? 'dimmed' : 'black'}>
              {task.text}
            </Text>
            <div style={{ marginLeft: 'auto' }}>
              <Button
                variant="outline" 
                color="red" 
                onClick={() => onRemoveTask(index)}
                size="xs"
                radius="md" 
              >
                Borrar
              </Button>
            </div>
          </Group>
        </Paper>
      ))}
    </Stack>
  );
}

export default TodoList;

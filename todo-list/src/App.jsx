import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Demo from './Components/Demo.jsx';

function App() {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        fontFamily: 'Arial, sans-serif',
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="App">
        <h1>Todo List</h1>
        <h3>tareas</h3>
        <Demo />
      </div>
    </MantineProvider>
  );
}

export default App;

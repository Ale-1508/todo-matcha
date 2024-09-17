import { ChakraProvider } from '@chakra-ui/react'

import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import { ToDoProvider } from './context/toDoContext';
import { theme } from './context/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ToDoProvider>
        <main>
        <Header />
        <MainSection />
        </main>
      </ToDoProvider>
    </ChakraProvider>
  )
}

export default App;

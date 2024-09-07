import { ChakraProvider } from '@chakra-ui/react'

import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import { ToDoProvider } from './context/toDoContext';

function App() {
  return (
    <ChakraProvider>
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

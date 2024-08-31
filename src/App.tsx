import { ChakraProvider } from '@chakra-ui/react'

import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';

function App() {
  return (
    <ChakraProvider>
      <main>
      <Header />
      <MainSection />
      </main>
    </ChakraProvider>
  )
}

export default App;

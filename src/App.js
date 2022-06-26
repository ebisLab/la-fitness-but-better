import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='platform'>
       <ChakraProvider>
        <Header/>
        <Main/>
        <Footer/>
        </ChakraProvider>
    </div>
  );
}

export default App;

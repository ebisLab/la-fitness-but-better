import React, {useCallback, useContext, useMemo, useState} from 'react'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [patronsCount, setPatronsCount]=useState(0)

  return (
    <div className='platform'>
       <ChakraProvider>
        <Header/>
        <Main patronsCount={patronsCount} setPatronsCount={setPatronsCount}/>
        <Footer patronsCount={patronsCount}/>
        </ChakraProvider>
    </div>
  );
}

export default App;

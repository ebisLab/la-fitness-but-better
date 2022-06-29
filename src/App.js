import React, { useState} from 'react'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TabWrapper from './components/TabWrapper';

function App() {
  const [patronsCount, setPatronsCount]=useState(0)
  const [tabIndex, setTabIndex] = React.useState(0)
  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  return (
    <div className='platform'>
       <ChakraProvider>
        <Header/>
        <TabWrapper tabIndex={tabIndex} setTabIndex={setTabIndex} handleTabsChange={handleTabsChange}>
          <Dashboard 
          setTabIndex={setTabIndex}
            handleTabsChange={handleTabsChange}
            patronsCount={patronsCount} setPatronsCount={setPatronsCount}
          />
        </TabWrapper>
        <Footer patronsCount={patronsCount}/>
        </ChakraProvider>
    </div>
  );
}

export default App;

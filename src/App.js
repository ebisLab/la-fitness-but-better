import React, {useState} from 'react';
import './App.css';
import {ChakraProvider} from '@chakra-ui/react';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import TabWrapper from './components/TabWrapper';
import {CardProvider} from './store/CardContext';
import {TableProvider} from './store/TableContext';
import {FooterProvider} from './store/FooterContext';

function App() {
  const [patronsCount, setPatronsCount] = useState(0);
  const [patronsCount2, setPatronsCount2] = useState([]);
  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabsChange = index => {
    setTabIndex(index);
  };

  // function removeduplicates2() {
  //   let duplicateRemover = new Set();
  //   let distinctAarr = patronsCount2.filter((obj, i) => {
  //     if (
  //       !duplicateRemover.has(obj.barcode_number) &&
  //       obj.status !== UNRECOGNIZED
  //     ) {
  //       duplicateRemover.add(obj.barcode_number);
  //       return obj;
  //     }
  //     return false;
  //   });
  //   return distinctAarr;
  // }

  return (
    <div className="platform">
      <CardProvider>
        <TableProvider>
          <ChakraProvider>
            <FooterProvider>
              <TabWrapper
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                handleTabsChange={handleTabsChange}>
                <Dashboard
                  setTabIndex={setTabIndex}
                  handleTabsChange={handleTabsChange}
                  setPatronsCount2={setPatronsCount2}
                  patronsCount2={patronsCount2}
                  setPatronsCount={setPatronsCount}
                />
              </TabWrapper>
              {/* <FooterProvider> */}
              <Footer
                // removeduplicates2={removeduplicates2}
                patronsCount={patronsCount}
                patronsCount2={patronsCount2}
              />{' '}
            </FooterProvider>
          </ChakraProvider>
        </TableProvider>
      </CardProvider>
    </div>
  );
}

export default App;

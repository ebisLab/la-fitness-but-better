import React, {useState} from 'react';
import './App.css';
import {ChakraProvider} from '@chakra-ui/react';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import TabWrapper from './components/TabWrapper';
import {CardProvider} from './store/CardContext';
import {TableProvider} from './store/TableContext';
import {FooterProvider} from './store/FooterContext';
import {useTabIndexLogic} from './utils/helpers/tabindexlogic';

function App() {
  const {tabIndex, setTabIndex, handleTabsChange, cellRef, divSize} =
    useTabIndexLogic();
  const [occupantsCount, setOccupantsCount] = useState(0);

  // function removeduplicates2() {
  //   let duplicateRemover = new Set();
  //   let distinctAarr = occupantsCount2.filter((obj, i) => {
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
                  divSize={divSize}
                  cellRef={cellRef}
                  setTabIndex={setTabIndex}
                  handleTabsChange={handleTabsChange}
                  setOccupantsCount={setOccupantsCount}
                />
              </TabWrapper>
              {/* <FooterProvider> */}
              <Footer occupantsCount={occupantsCount} />{' '}
            </FooterProvider>
          </ChakraProvider>
        </TableProvider>
      </CardProvider>
    </div>
  );
}

export default App;

import React, {createContext, useContext, useState} from 'react';
import CardContext from './CardContext';

const FooterContext = createContext();
export function FooterProvider({children}) {
  const {dataToAdd, patronList, setPatronList} = useContext(CardContext);

  const addToFooterCount = () => {
    // console.log('wait what');
    // setPatronList(prevstate => [dataToAdd, ...prevstate]);
  };

  console.log('😭', patronList);
  return (
    <FooterContext.Provider
      value={{patronList, setPatronList, addToFooterCount}}>
      {children}
    </FooterContext.Provider>
  );
}
export default FooterContext;

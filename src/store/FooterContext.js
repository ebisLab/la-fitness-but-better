import React, {createContext, useContext} from 'react';
import CardContext from './CardContext';

const FooterContext = createContext();
export function FooterProvider({children}) {
  const {patronList, setPatronList} = useContext(CardContext);
  return (
    <FooterContext.Provider value={{patronList, setPatronList}}>
      {children}
    </FooterContext.Provider>
  );
}
export default FooterContext;

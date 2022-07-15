import React, {createContext, useContext} from 'react';
import CardContext from './CardContext';

const FooterContext = createContext();
export function FooterProvider({children}) {
  const {occupantsList, setOccupantsList} = useContext(CardContext);
  return (
    <FooterContext.Provider value={{occupantsList, setOccupantsList}}>
      {children}
    </FooterContext.Provider>
  );
}
export default FooterContext;

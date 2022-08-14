import React from 'react';
import Main from '../views/Main/Main';
import {TabPanels, TabPanel} from '@chakra-ui/react';
import Search from '../views/Search';
import Account from '../views/Account';
import Management from '../views/Management';
import TableDate from '../views/TableDate';

export default function Dashboard(props) {
  const {setOccupantsCount, handleTabsChange, setTabIndex} = props;
  return (
    <TabPanels>
      <TabPanel p="0px 0px 10px 0px">
        <Main
          setTabIndex={setTabIndex}
          handleTabsChange={handleTabsChange}
          setOccupantsCount={setOccupantsCount}
        />
      </TabPanel>
      <TabPanel>
        <Search />
      </TabPanel>
      <TabPanel style={{background: '#ebf0f7'}}>
        <Account />
      </TabPanel>
      <TabPanel style={{background: '#ebf0f7'}}>
        <TableDate />
      </TabPanel>
      <TabPanel>
        <Management />
      </TabPanel>
    </TabPanels>
  );
}

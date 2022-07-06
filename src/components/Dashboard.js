import React from 'react';
import Main from '../views/Main/Main';
import {TabPanels, TabPanel} from '@chakra-ui/react';
import Search from '../views/Search';
import Account from '../views/Account';
import Management from '../views/Management';

export default function Dashboard(props) {
  const {
    patronsCount2,
    setPatronsCount,
    setPatronsCount2,
    handleTabsChange,
    setTabIndex,
  } = props;
  return (
    <TabPanels>
      <TabPanel p="0px 0px 10px 0px">
        <Main
          patronsCount2={patronsCount2}
          setTabIndex={setTabIndex}
          handleTabsChange={handleTabsChange}
          setPatronsCount={setPatronsCount}
          setPatronsCount2={setPatronsCount2}
        />
      </TabPanel>
      <TabPanel>
        <Search />
      </TabPanel>
      <TabPanel>
        <Account />
      </TabPanel>
      <TabPanel>
        <Management />
      </TabPanel>
    </TabPanels>
  );
}

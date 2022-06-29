import React from 'react'
import Main from '../views/Main'
import { TabPanels, TabPanel } from '@chakra-ui/react'
import Search from '../views/Search'
import Account from '../views/Account'
import Management from '../views/Management'


export default function Dashboard(props) {
    const {patronsCount, setPatronsCount, handleTabsChange, setTabIndex}=props;
  return (
<TabPanels>
<TabPanel p="0px 0px 10px 0px">
<Main 
setTabIndex={setTabIndex}
    handleTabsChange={handleTabsChange}
    patronsCount={patronsCount} setPatronsCount={setPatronsCount}
    />
</TabPanel>
<TabPanel>
<Search/>
</TabPanel>
<TabPanel>
<Account/>
</TabPanel>
<TabPanel>
<Management/>
</TabPanel>
</TabPanels>

  )
}

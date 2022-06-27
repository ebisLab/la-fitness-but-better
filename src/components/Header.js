import React from 'react';
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'

export default function Header() {
  return (
    <header>
<Tabs variant='enclosed' style={{    marginTop: '1.5%'}}>
  <TabList >
    <Tab _selected={{ bg: '#ebf0f7' }}>Member</Tab>
    <Tab _selected={{ bg: '#ebf0f7' }}>Search</Tab>
  </TabList>
  {/* <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels> */}
</Tabs>
    </header>

  )
}

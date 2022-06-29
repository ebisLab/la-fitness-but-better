import React from 'react';
import { Tabs, Tab, TabList } from '@chakra-ui/react'

export default function TabWrapper({children, handleTabsChange, tabIndex, setTabIndex}) {
  return (

<Tabs 
index={tabIndex}
onChange={(index) => setTabIndex(index)}
 variant='enclosed' style={{    marginTop: '1.5%'}}>
  <TabList >
    <Tab _selected={{ bg: '#ebf0f7' }} >Member</Tab>
    <Tab _selected={{ bg: '#ebf0f7' }} >Search</Tab>
    <Tab _selected={{ bg: '#ebf0f7' }} >Account</Tab>
    <Tab _selected={{ bg: '#ebf0f7' }} >Management</Tab>
  </TabList>
  {children}
</Tabs>)}

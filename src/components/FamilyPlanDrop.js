import React from 'react';
import { 
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box } from '@chakra-ui/react'

export default function FamilyPlanDrop() {
  return (
    <div>
<Accordion allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='center'>
          Family under the plan
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <ul>
        <li>family 1</li>
        <li>family 2</li>
      </ul>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
  )
}

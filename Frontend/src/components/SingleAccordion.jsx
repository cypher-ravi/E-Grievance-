import React from 'react'
import { Accordion } from 'flowbite-react/lib/cjs/components';
import ReactHtmlParser from "html-react-parser"

export default function SingleAccordion(props) {
  
  return (
    <Accordion alwaysOpen={true} className="mt-2">
    <Accordion.Panel>
    <Accordion.Title>
    Answer {props.id }
   
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      {ReactHtmlParser(props.content)}
      </p>
   
      
    </Accordion.Content>
  </Accordion.Panel>
  </Accordion>
  )
}

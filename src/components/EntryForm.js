import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

const EntryForm = ({description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense}) => {
  return (
    <>
    <Form.Group>
    <Form.Input
    icon="tags"
    width={12}
    label="Description"
     placeholder="New Shinny thing"
     value={description}
     onChange={(e)=>{setDescription(e.target.value)}}/>

  <Form.Input  
    icon='dollar'
    iconPosition='left'      
    width={4}
    label="Value"
     placeholder="100.00"
     value={value}
     onChange={(e)=>{setValue(e.target.value)}}/>
  </Form.Group>
  <Segment compact>
    <Checkbox 
    toggle 
    label='is expense' 
    checked={isExpense}
    onChange={(e)=>{setIsExpense((isExpense) => !isExpense)}} />
  </Segment>
  </>
  )
}

export default EntryForm

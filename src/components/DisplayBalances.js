import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { DisplayBalance } from './DisplayBalance'

export const DisplayBalances = () => {
  return (
    <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance size='tiny' color='green'  label='Incoming' value='1,045.5'/>
              
            </Grid.Column>
            <Grid.Column> 
            <DisplayBalance size='tiny' color='red' label='Expenses' value='623.50'/>
            </Grid.Column>           
          </Grid.Row>
        </Grid>
      </Segment>
  )
}

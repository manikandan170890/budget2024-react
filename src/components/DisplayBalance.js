import React from 'react'
import { Statistic } from 'semantic-ui-react'
export const DisplayBalance = ({size = 'tiny',color='black',label,value}) => {
  return (
    <Statistic size={size} color={color}>
    <Statistic.Label >
      {label}:
      </Statistic.Label>
      <Statistic.Value>
        {value}
      </Statistic.Value>
  </Statistic>
  )
}

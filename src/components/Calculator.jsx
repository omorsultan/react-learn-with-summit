import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import InputTemperature from './InputTemperature'


class Calculator  extends React.Component{
  
  render(){

    return(
      <>
      <InputTemperature scale="c" />
      <InputTemperature scale="f" />

      </>
    )
    
  }

}

export default Calculator
import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import InputTemperature from './TemperatureInput'
import { convert , toCelsius , toFahrenheit} from '../lib/converter'


class Calculator  extends React.Component{
  
  state = { temperature : '' , scale :'c'} // object
  
  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    })
  }

  render(){
    const {temperature, scale } = this.state;
    const celsius = scale === 'f' ? convert (temperature, toCelsius) : temperature;
    const farhenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
    return(
      <>
      <InputTemperature scale="c" 
        temperature={celsius}
        onTemperatureChange = {this.handleChange}
      
      />
      <InputTemperature 
        scale = 'f'
        temperature = {farhenheit}
        onTemperatureChange = {this.handleChange}
      
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />

      </>
    );
    
  }

}

export default Calculator
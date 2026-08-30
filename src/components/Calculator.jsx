import React from 'react'
import BoilingVerdict from './BoilingVerdict'


class Calculator  extends React.Component{
  
  state = {
    temperature: '',
  }

  onTemperatureChange = (e) =>{
    this.setState({
      temperature: e.target.value,
    })
  }

  render(){
    const {temperature } = this.state;

    return(
      <>
      <div className='bg-amber-300 mt-10 ml-20 mr-20'>
         <fieldset >
       <legend>Enter temperature in Celsius</legend>
       <input type='text' value={temperature} 
       onChange={this.onTemperatureChange}
       className='bg-green-400 border-blue-700 border-2' />
      </fieldset>
      <BoilingVerdict celsius={parseFloat(temperature)}/>

      </div>
     
      </>
    )
    
  }

}

export default Calculator
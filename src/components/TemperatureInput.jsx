import React from 'react'

 const scaleName = {
    c : 'Celsius',
    f : 'Fahrenheit'
  };



const TemperatureInput = ({scale ,temperature,  onTemperatureChange}) => {

    return(
      <>
      <div className='bg-amber-300 mt-10 ml-20 mr-20 md-20'>
         <fieldset >
       <legend>Enter temperature in {scaleName[scale]}</legend>
       <input type='text' value={temperature} 
       onChange={(e) => onTemperatureChange(e, scale)}
       className='bg-green-400 border-blue-700 border-2' />
      </fieldset>

      </div>
     
      </>
    )
    
  
}

export default TemperatureInput
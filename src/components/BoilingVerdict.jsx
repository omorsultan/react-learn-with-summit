import React from 'react'

const BoilingVerdict = ({celsius=0}) => {
  if(celsius >=100){
    return <p>Water would Boil</p>
  }
  return <p>Water would not Boil</p>
}

export default BoilingVerdict
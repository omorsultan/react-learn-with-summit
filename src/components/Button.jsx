import React from 'react'

class Button extends React.Component{



  render(){
    const {change} = this.props;
    return (
        <button type="button" onClick={()=>{change()}}>
          Change the language is it real
        </button>
    )
  }

}

export default Button;

import React from 'react'

class Button extends React.Component{

  render(){
    const {change , locale} = this.props;
    // console.log(locale);
    return (
        <button type="button" onClick={()=>{change(locale)}}>
          Change the language is it real
        </button>
    )
  }

}

export default Button;

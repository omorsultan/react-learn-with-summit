import React from 'react'

class Button extends React.Component{

  render(){
    const {change , locale} = this.props;
    // console.log(locale);
    return (
        <button type="button" onClick={()=>{change(locale)}}>
          Toggle to change language
        </button>
    )
  }

}

export default Button;

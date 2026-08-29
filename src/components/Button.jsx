import React from 'react'


class Button extends React.Component{

  render(){
    const {change , locale} = this.props;
    // console.log(locale);
    return (
        <button type="button" onClick={()=>{change(locale)}}
        className="rounded-lg bg-blue-500 px-5 py-2 text-white hover:bg-blue-600">
          Toggle to change language
        </button>
    )
  }

}

export default Button;

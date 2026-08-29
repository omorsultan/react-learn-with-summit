import React from 'react'

export default class Form extends React.Component {

  state = {
    title: 'javaScript'
  }
  render(){
    const {title} = this.state;
    return(
      <div>
        <form>
          <input type = "text"  placeholder='Enter Title'
          value={title}
          className='border-2 border-gray-300 rounded-sm  focus:border-blue-500 mt-6'/>
        </form>
      </div>
    )
  }
}


import React from 'react'

export default class Form extends React.Component {
  render(){
    return(
      <div>
        <form>
          <input type = "text"  placeholder='Enter Title'
          className='border-2 border-gray-300 rounded-sm  focus:border-blue-500 mt-6'/>
        </form>
      </div>
    )
  }
}


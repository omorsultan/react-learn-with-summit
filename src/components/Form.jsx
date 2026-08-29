import React from 'react'

export default class Form extends React.Component {

  state = {
    title: 'javaScript',
    text : 'javaScript is awesome',
    library: 'Angular',
    isAwesome: true
    
  }

  handleChange = (e) =>{
    if(e.target.type === 'text'){
      this.setState({
        title: e.target.value,
      }
      )
    }

    else if (e.target.type === 'textarea'){
      this.setState({
        text: e.target.value,
      })
    }
    else if (e.target.type === 'select-one'){
      this.setState({
        library: e.target.value,
      })
    }

    else if (e.target.type === 'checkbox'){
      this.setState({
        isAwesome: e.target.checked
      })
    }
  }

  submitHandler =(e)=>{
    const {title , text , library, isAwesome} = this.state;

    e.preventDefault();
    console.log(title, text,  library, isAwesome);

  }
  render(){
    const {title , text , library, isAwesome} = this.state;
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <input type = "text" 
           placeholder='Enter Title'
           value={title}
           onChange={this.handleChange}
           className='border-2 border-gray-300 rounded-sm  focus:border-blue-500 mt-6'/>
            <br />
           <br />
          <textarea
           name="text" value={text}  onChange={this.handleChange}
           className='border-2 mt-4 pt-2 border-gray-200 focus:border-green-600'>
           </textarea>
           <br />
           <br />

           <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
           </select>
           
           <input type="checkbox" checked={isAwesome}
           onChange={this.handleChange} />
            <br />
           <input type="submit" value="Submit" />
          </form>
        
      </div>
    )
  }
}


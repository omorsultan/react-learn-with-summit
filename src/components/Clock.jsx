import React from 'react'

class Clock extends  React.Component{
  state ={
    date: new Date(),
    locale: 'bn-BD'
  }

  componentDidMount(){
    this.clockTimer = setInterval(()=>{
      this.tick();
    },1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  tick = ()=>{
    this.setState({
      date: new Date(),
    })
  }

  handleClick = () =>{
    this.setState({
      locale: 'en-US'
    })
  }

  render(){
    const {date, locale} = this.state;

    return <>
    {date.toLocaleTimeString(locale)};
    <button type="button" onClick={this.handleClick}>
      click to change Language
    </button>
    </>
  }
}

export default Clock;

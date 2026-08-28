import React from 'react';


class Clock extends React.Component{

  state = {date: new Date()}

  componentDidMount(){
    this.clockTimer = setInterval(()=>{
      this.tick();
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  tick(){
    this.setState({date: new Date()});
  }

  render(){
    return <>
    {this.state.date.toLocaleTimeString()}
    </>
  }

  


}

export default Clock;
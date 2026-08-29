import React from 'react'
import Button from './Button.jsx'
import '../App.jsx'

class Clock extends React.Component {

  state = {
    date: new Date(),
    locale: 'bn-BD'
  } // default value of state

  componentDidMount() { // runs after the component is mounted/rendered
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000) // calls tick() every 1 second
  }

  componentWillUnmount() { // runs before the component is removed
    clearInterval(this.clockTimer); // stops the timer
  }

  handleClick = (locale) => { // arrow function keeps the correct 'this' context
    this.setState({ // proper way to update state
      locale: locale,
    });
  }

  tick = () => {
    this.setState({ date: new Date() }); // updates the current time
  }

  render() {
    const { date, locale } = this.state;

    let button;
    if(locale === 'bn-BD'){
      button = (<Button change={this.handleClick} locale="en-US">
          click here or fake
        </Button>)
    }
    else{
      button = (
        <Button change={this.handleClick} locale="bn-BD">
          click here or fake
        </Button>
      )
    }

    return (
      <>
      <div className='text-5xl font-extrabold'>
        {date.toLocaleTimeString(locale)}
      </div>
      <div className="rounded-lg bg-blue-500 px-5 py-2 text-white hover:bg-blue-600">
        {button}
      </div>
        
        
      </>
    )
  }
}

export default Clock;
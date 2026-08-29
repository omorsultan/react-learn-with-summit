import React from 'react'
import Button from './Button.jsx'

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

    return (
      <>
        {date.toLocaleTimeString(locale)}

        <Button change={this.handleClick} locale="en-US">
          click here or fake
        </Button>
      </>
    )
  }
}

export default Clock;
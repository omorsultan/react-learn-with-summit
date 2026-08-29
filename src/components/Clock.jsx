import React from 'react'

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

  handleClick = () => { // arrow function keeps the correct 'this' context
    this.setState({ // proper way to update state
      locale: 'en-US',
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

        <button type="button" onClick={this.handleClick}>
          Change the language
        </button>
      </>
    )
  }
}

export default Clock;
import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    // gets the time when the component mounts.
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    // will continue to update the time every second.
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    // adds a leading zero if number is less than 10, so spacing looks good. convert the if to a ternary.
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days, hours, minutes, seconds});
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;

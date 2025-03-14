import React, { Component } from 'react';
import './assets/scss/App.scss';
import Clock from './Clock';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.__getcurrentTime();
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(this.__getcurrentTime);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  __getcurrentTime() {
    const now = new Date();

    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      ticks: this.state ? this.state.ticks + 1 : 1,
    };
  }

  render() {
    return this.state.ticks % 5 === 0 ? null : (
      <Clock
        title={`ex03: Clock Component I:${this.state.ticks}`}
        hours={this.state.hours}
        minutes={this.state.minutes}
        seconds={this.state.seconds}
      />
    );
  }
}

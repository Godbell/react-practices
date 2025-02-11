import React, { Component } from 'react';

export default class TitelBar01 extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    console.log('TitleBar01 Clicked!');
  }

  render() {
    return (
      <div onClick={this.onClick}>
        <h4>Function Handler in Class Component(click here!)</h4>
      </div>
    );
  }
}

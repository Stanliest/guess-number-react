import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctValue: '',
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderTip = this.renderTip.bind(this);
  }

  componentDidMount() {
    // initialized number to be guessed
    this.setState({ correctValue: Math.floor(Math.random() * 101) });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('You entered: ' + this.state.value);
    console.log("Secret: ", this.state.correctValue);
    event.preventDefault();
  }

  renderTip(props) {
    if (props.value == props.correctValue) {
      return (
        <p>{props.value} is correct</p>
      )
    } else if (props.value > props.correctValue) {
      return (
        <p>{props.value} is too big</p>
      )
    } else {
      return (
        <p>{props.value} is too small</p>
      )
    };
  }

  render() {
    const { correctValue, value } = this.state;
    return (
      <div className="App">
        <h2>
          Guess the number
        </h2>

        <text>
          Enter a number between 0 and 100:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </text>

        <this.renderTip correctValue={correctValue} value={value} />

      </div>
    );
  }
}

export default App;

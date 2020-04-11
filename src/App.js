import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayQuote from './components/DisplayQuote';

const sampleQuote = {
  quote: "But my mom says I'm cool.",
  character: "Milhouse Van Houten",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
  }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleQuote: sampleQuote,
    }

    this.getSimpsonQuote = this.getSimpsonQuote.bind(this);
  }

  getSimpsonQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.data)
    .then(data => {
      this.setState({
        singleQuote: data[0],
      });
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getSimpsonQuote}>Get a new quote</button>
        <DisplayQuote singleQuote={this.state.singleQuote}/>
      </div>
    );
  }
  
}

export default App;

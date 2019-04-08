import React, { Component } from 'react';
import './styles.css'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    numLikes: 0, 
    wordLikes: "likes"
  }

  clickHandler = (e) => {
    this.setState({
      numLikes: (this.state.numLikes + 1),
      wordLikes: this.state.numLikes === 0 ? 'like': "likes"
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>{this.state.numLikes} {this.state.wordLikes}</button>
      </div>
    );
  }
}

export default App;

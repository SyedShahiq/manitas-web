import React, { Component } from 'react';
import './App.css';
import Body from './components/body';
import Header from './components/header';
import en from './content/en.json';
import es from './content/es.json';
class App extends Component {
  state = {
    "language": "en",
    "content": en,
  }
  languageChanger = (language) => {
    this.setState({
      "language": language,
      "content": language === 'en' ? en : es
    })
  }
  render() {
    return (
      <div>
        <Header language={this.state.language}
          languageChanger={this.languageChanger}
          content={this.state.content} />
        <Body language={this.state.language}
          content={this.state.content} />
      </div >
    );
  }
}

export default App;

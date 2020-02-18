import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SingleBlog from './components/Blogs/SingleBlog';
import Body from './components/body';
import Footer from './components/Footer/Footer';
import Header from './components/header';
import en from './content/en.json';
import es from './content/es.json';
import esti from './content/esti.json';
import ru from './content/ru.json';
class App extends Component {
  state = {
    "language": "en",
    "content": en,
  }
  languageChanger = (language) => {
    if (language === 'en') {
      this.setState({
        "content": en
      })
    } else if (language === 'es') {
      this.setState({
        "content": es
      })
    } else if (language === 'ru') {
      this.setState({
        "content": ru
      })

    } else if (language === 'esti') {
      this.setState({
        "content": esti
      })
    }
    this.setState({
      "language": language,
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Header language={this.state.language}
            languageChanger={this.languageChanger}
            content={this.state.content} />
            <Route exact path="/post/:id" component={SingleBlog} />
            <Route exact path="/" component={()=><Body language={this.state.language}
            content={this.state.content} />} />
          <Footer content={this.state.content} />
        </Router>
      </div >
    );
  }
}

export default App;

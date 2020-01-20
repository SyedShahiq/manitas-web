import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
function App() {
  return (
    <div>
      <header className="site-header">
        <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
          <div className="container">
            <a className="navbar-brand mr-4" href="/">Manitas</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggle">
              <div className="navbar-nav mr-auto">
              </div>
            </div>
          </div>
        </nav>
        <main role="main" className="main">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('./images/images.jpeg')}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require('./images/images.jpeg')}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </main>
      </header >
    </div >
  );
}

export default App;

import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo />
        <Rank/>
        <ImageLinkForm/>
        {
        // <faceRecognition />
        }
      </div>
    );
  }
}

export default App;

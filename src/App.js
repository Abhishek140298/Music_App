import React from 'react';
import Home from  './components/home/Home'
import NavBar from './components/navBar/NavBar';
import  AudioMusic from './components/home/audioMusic/AudioMusic'
export default class App extends React.Component {
  render() {
    return (
      <>
    <AudioMusic/>
      </>
    );
  }
}

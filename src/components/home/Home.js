import React from 'react';
import './Home.css'
export default class Home extends React.Component {
  render() {
    return (
      <div className='home_main_div'>
        <span className='music_button'>Audio Music</span>
				<span className='music_button'>Video Music</span>
      </div>
    );
  }
}

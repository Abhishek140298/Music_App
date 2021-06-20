import React from 'react';
import './WayToSong.css';
export default class WayToSong extends React.Component {
  render() {
    return (
      <div className='song_main_div'>
        <img
          src='https://i.ytimg.com/vi/iEZGdHJLJD4/maxresdefault.jpg'
          className='song_image'
          onMouseOver={() => {
            console.log('hello there i am here');
          }}
        />
      </div>
    );
  }
}

import React from 'react';
import  WayToMusic from '../../wayTosong/WayToSong'
export default class AudioMusic extends React.Component {
  render() {
    return (
      <div>
        <span>
          <h2>Your Favourite</h2>
					<WayToMusic/>
					<h3>Artists</h3>
					<WayToMusic/>
					<h4>Songs</h4>
					<WayToMusic/>
        </span>
      </div>
    );
  }
}

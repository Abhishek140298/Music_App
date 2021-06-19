import React from 'react';
import './NavBar.css';
import  {FcSearch} from 'react-icons/fc'
export default class NavBar extends React.Component {
  render() {
    return (
      <div className='nav_main_div'>
        <h1>Melody</h1>
        <div className='search_div'>
          <input placeholder='search' />
				<span className='search_icon'>	<FcSearch/></span>
        </div>
      </div>
    );
  }
}

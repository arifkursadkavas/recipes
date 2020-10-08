import * as React from 'react';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img className='headerLogo' src='favicon-96x96.png'></img>
        <span className='headerTitle'>Marley Spoon</span>
      </div>
    );
  }
}

export default Header;

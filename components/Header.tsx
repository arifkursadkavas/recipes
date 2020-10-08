import Link from 'next/link';
import * as React from 'react';
import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link href='/'>
          <img className='headerLogo' src='favicon-96x96.png'></img>
        </Link>
        <Link href='/'>
          <span className='headerTitle'>Marley Spoon</span>
        </Link>
      </div>
    );
  }
}

export default Header;

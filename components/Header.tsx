import Link from 'next/link';
import * as React from 'react';

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <Link href="/">
        <img
          className="headerLogo"
          src="../favicon-96x96.png"
          alt="Header Logo"
        ></img>
      </Link>
      <Link href="/">
        <span className="headerTitle">Marley Spoon</span>
      </Link>
    </div>
  );
};

interface HeaderProps {}

export default Header;

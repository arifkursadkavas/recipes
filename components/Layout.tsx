import * as React from 'react';

const Layout: React.FC<LayoutProps> = (props) => {
  return <div className="appLayout">{props.children}</div>;
};

interface LayoutProps {}

export default Layout;

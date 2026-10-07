import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  // throw new Error('Not Implemented');
  return (
    <div>
      <p>Home Navbar</p>
      {children}
      Home Footer
    </div>
  );
};

export default Layout;

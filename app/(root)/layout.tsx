import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Home Navbar</p>
      {children}
      Home Footer
    </div>
  );
};

export default Layout;

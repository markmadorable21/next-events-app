import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Dashboard Navbar</p>
      {children}
      Dashboard Footer
    </div>
  );
};

export default Layout;

import React from 'react';

import Header from './header';
import Content from './content';
import Footer from './footer';

const Layout = function() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;

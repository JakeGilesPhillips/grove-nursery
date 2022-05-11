import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Error from './pages/Error';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {/* Header Pages */}
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<Contact />} />

          {/* Additional Pages */}
          <Route path='*' element={<Error />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;

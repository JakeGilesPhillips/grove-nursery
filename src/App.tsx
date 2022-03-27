import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import OurNursery from './pages/OurNursery';
import Contact from './pages/Contact';
import Brochure from './pages/Brochure';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-nursery' element={<OurNursery />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/request-brochure' element={<Brochure />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

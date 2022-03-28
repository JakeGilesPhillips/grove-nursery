import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import OurNursery from './pages/OurNursery';
import OurClasses from './pages/OurClasses';
import OurFees from './pages/OurFees';
import Contact from './pages/Contact';
import Brochure from './pages/Brochure';
import Error from './pages/Error';
import ForestSchool from './pages/ForestSchool';
import GreenerGrove from './pages/GreenerGrove';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Header Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/our-nursery' element={<OurNursery />} />
        <Route path='/our-classes' element={<OurClasses />} />
        <Route path='/our-fees' element={<OurFees />} />
        <Route path='/greener-grove' element={<GreenerGrove />} />
        <Route path='/request-brochure' element={<Brochure />} />
        <Route path='/contact-us' element={<Contact />} />

        {/* Header Pages */}
        <Route path='/forest-school' element={<ForestSchool />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

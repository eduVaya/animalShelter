// React imports
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Adoption from './containers/Adoption/Adoption';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Adoption />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

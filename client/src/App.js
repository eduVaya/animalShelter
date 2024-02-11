// React imports
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './containers/Landing';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

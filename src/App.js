import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './components/pages/home';
import Categories from './components/pages/categories';

function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/categories" element={<Categories/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;

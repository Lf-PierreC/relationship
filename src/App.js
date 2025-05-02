import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Casamento from './components/pages/Casamento';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/casamento" element={<Casamento/>}/>     
      </Routes>
    </Router>
  );
}

export default App;

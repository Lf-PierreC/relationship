import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Casamento from './components/pages/Casamento';
import Momentos from './components/pages/Momentos';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/casamento" element={<Casamento/>}/>     
        <Route path="/momentos" element={<Momentos/>}/>   
      </Routes>
    </Router>
  );
}

export default App;

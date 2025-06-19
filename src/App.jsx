import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Strawberry from './pages/Strawberry';
import Blueberry from './pages/Blueberry';
import Vanilla from './pages/Vanilla';
import Pistachio from './pages/Pistachio';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Strawberry />} />
        <Route path="/blueberry" element={<Blueberry />} />
        <Route path="/vanilla" element={<Vanilla />} />
        <Route path="/pistachio" element={<Pistachio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



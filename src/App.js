import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GeneralStorage } from './Contexts/GeneralContext';
import CountryDetails from './Components/CountryDetails';
import HomePage from './Components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <GeneralStorage>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="rest-countries-api-with-color-theme-switcher" element={<HomePage />}/>
          <Route path="/:name" element={<CountryDetails/>} />
        </Routes>
      </GeneralStorage>
    </BrowserRouter>
  );
}

export default App;
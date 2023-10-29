import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomeComponent from './components/HomeComponent';

import 'bootstrap/dist/css/bootstrap.css';
import ViewVideo from './components/ViewVideo';
import Header from './components/Header';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomeComponent />}></Route>
          <Route exact path='/video/:id' element={<ViewVideo />}></Route>
          {/* <Route exact path='/video/:id' element={<ViewVideo />}></Route> */}
          {/* <Route path="*" element={<HomeComponent />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

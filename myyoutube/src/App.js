// import React from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import './App.css';
// import HomeComponent from './components/HomeComponent';

// import 'bootstrap/dist/css/bootstrap.css';
// import ViewVideo from './components/ViewVideo';
// import Header from './components/Header';


// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route exact path='/' element={<HomeComponent />}></Route>
//           <Route exact path='/video/:id' element={<ViewVideo />}></Route>
//           {/* <Route exact path='/video/:id' element={<ViewVideo />}></Route> */}
//           {/* <Route path="*" element={<HomeComponent />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

// function App() {
  // const [seconds, setSeconds] = useState(10); // Initial number of seconds
  // const targetTime = (new Date()).getTime()/1000 + 10;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const sec = targetTime - (new Date()).getTime()/1000;
  //     if (sec > 0) {
  //       setSeconds(Math.floor(sec));
  //     }
  //   }, 1000);

  //   // Cleanup interval on component unmount
  //   // return () => clearInterval(interval);
  // }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Reverse Timer</h1>
//         <p>Seconds remaining: {seconds}</p>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";

function App() {
  // const [seconds, setSeconds] = useState(10); // Initial number of seconds
  let seconds = 10;
  const [sec,setSec] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        seconds--
        setSec(seconds);
      }
      if(seconds < 0) {
        clearInterval(interval)
      }
      console.log("seconds", seconds)
    }, 1000);

    // Cleanup interval on component unmount
    // return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reverse Timer</h1>
        <p>Seconds remaining: {sec}</p>
      </header>
    </div>
  );
}

export default App;

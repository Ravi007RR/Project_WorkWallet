import React from "react";
import Work from './Components/Work';
import Login from "./Components/first";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App  () {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Work/>} />
          <Route path="/first" element={<Login/>} />
      </Routes>
      </Router>
      </div>
  );
}

export default App;
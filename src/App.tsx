import React from 'react';
import './App.css';
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link><br/>
      <Link to="/matches">Matches</Link><br/>
      <Link to="/matches2">Matches2</Link><br/>
      <Outlet/>
    </div>
  );
}

export default App;

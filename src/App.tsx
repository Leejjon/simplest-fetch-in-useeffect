import React, {useState} from 'react';
import './App.css';
import {Match} from "./model/Match";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Matches2 from "./pages/Matches2";

export interface ErrorProps {
  error: string | undefined;
  setError: (error: string | undefined) => void;
}

function App() {
  const [error, setError] = useState<string | undefined>(undefined);
  const [matches, setMatches] = useState<Array<Match>>([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link><br/>
        <Link to="/matches">Matches</Link><br/>
        <Link to="/matches2">Matches2</Link><br/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/matches" element={
            <Matches matches={matches} setMatches={setMatches} error={error} setError={setError}/>
          }/>
          <Route path="/matches2" element={
            <Matches2 matches={matches} setMatches={setMatches} error={error} setError={setError}/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

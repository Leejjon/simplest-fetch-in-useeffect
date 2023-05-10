import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Matches2 from "./pages/Matches2";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to="/">Home</Link><br/>
                <Link to="/matches">Matches</Link><br/>
                <Link to="/matches2">Matches2</Link><br/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/matches" element={
                        <Matches/>
                    }/>
                    <Route path="/matches2" element={
                        <Matches2/>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

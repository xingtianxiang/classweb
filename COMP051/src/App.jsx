// src/App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import PartPage from './pages/PartPage.jsx'
import PartContentPage from "./pages/PartContentPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contents" element={<div>Contents Page</div>} />
                <Route path="/syllabus" element={<div>Syllabus Page</div>} />
                <Route path="/resources" element={<div>Resources Page</div>} />
                <Route path="/part0" element={<PartPage partId="0" />} />
                <Route path="/part1" element={<PartPage partId="1" />} />
                <Route path="/part2" element={<PartPage partId="2" />} />
                <Route path="/part3" element={<PartPage partId="3" />} />
                <Route path="/:partId/:contentId" element={<PartContentPage />} />
            </Routes>
        </Router>
    );
}

export default App;

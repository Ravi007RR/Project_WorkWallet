import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Work from './Components/Work'; // Assuming Work is your main page
import FirstBlog from './Components/first'; // Import the new first blog page
import SecBlog from './Components/sec'; // Import the new second blog page

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Work />} />
                <Route path="/first" element={<FirstBlog />} /> {/* Route for first blog */}
                <Route path="/sec" element={<SecBlog />} /> {/* Route for second blog */}
            </Routes>
        </Router>
    );
};

export default App;

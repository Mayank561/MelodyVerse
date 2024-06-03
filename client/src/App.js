import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import PostList from './components/PostList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Signup />} />
          <Route path="/posts" element={<PostList />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

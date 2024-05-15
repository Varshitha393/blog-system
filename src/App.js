import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin';
import User from './Components/User';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ViewBlog from './Components/ViewBlog';
import Home from './Components/Home';
import CardModal from './Components/CardModal';
import Login from './Components/Login';
import Signup from './Components/signup';
import Registration from './Components/Registration';
import Signin from './Components/Signin';

const App = () => {
  const [Blog, setBlog] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [Modal, setModalOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setShowSidebar={setShowSidebar} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Signin" element={<Signin />} />
        <Route
          path="/Admin"
          element={
            <>
              {showSidebar && <Navbar />}
              {showSidebar && <Sidebar />}
              <Admin setBlog={setBlog} />
            </>
          }
        />
        <Route
          path="/user"
          element={
            <>
              {showSidebar && <Navbar />}
              {showSidebar && <Sidebar />}
              <User Blog={Blog} />
            </>
          }
        />
        <Route
          path="/viewblog"
          element={
            <>
              {showSidebar && <Navbar />}
              {showSidebar && <Sidebar />}
              <ViewBlog setBlog={setBlog} />
            </>
          }
        />
        {/* Correct placement of CardModal route */}
        <Route
          path="/user/CardModal"
          element={
            <>
              {showSidebar && <Navbar />}
              {showSidebar && <Sidebar />}
              <CardModal setModal={Modal} />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
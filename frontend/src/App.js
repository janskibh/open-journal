import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import Error404 from './components/Error404/Error404';
import AddUserForm from './components/AddUserForm/AddUserForm';
import SearchUser from './components/SearchUser/SearchUser';

function App() {
  return (
    <main>
      <Router>
        <nav>
          <div className="content">
            <div className="navlink-img"><Link to="/"><img src="/logo192.png" alt="Open Journal"/></Link></div>
            <div className="navlink"><Link to="/user">Afficher un Utilisateur</Link></div>
          </div>
        </nav>
        <div className="content">
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/adduser" element={<AddUserForm />} />
              <Route path="/user" element={<SearchUser />} />
              <Route path="*" element={<Error404 />} />
          </Routes>
          </div>
       </Router>
    </main>
  );
}

export default App;

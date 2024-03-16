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
        <div className="navlink"><Link to="/">Home</Link></div>
          <div className="navlink"><Link to="/user">Afficher un Utilisateur</Link></div>
        </nav>
        <div class="content">
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

// src/components/AddUserForm.js

import React, { useState } from 'react';

import axios from 'axios';
import '../../css/inputs.css';
import './AddUserForm.css';

const AddUserForm = () => {
  const [userData, setUserData] = useState({ username: '', email: '', password: ''});
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setSuccessMessage('');
    setErrorMessage('');
    e.preventDefault();
    try {
      const response = await axios.post('http://10.59.100.59:3059/users/newuser', userData);

      console.log(response.data);
      setSuccessMessage("Utilisateur Ajouté");
    } catch (error) {
      console.log("Erreur lors de l'ajout de l'utilisateur" + error);
      setErrorMessage("Erreur : " + error);
    }
  };

  return (
    <div className="AddUserForm">
    {successMessage && <div className="success">{successMessage}</div>}
    {errorMessage && <div className="error">{errorMessage}</div>}
    <form onSubmit={handleSubmit}>
        <div className="text-input"><input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="username" required /></div>
        <div className="text-input"><input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="email" required /></div>
        <div className="text-input"><input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="password" required /></div>
        <div><button type="submit">Add user</button></div>
    </form>
    </div>
  );
};

export default AddUserForm;

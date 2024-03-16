// routes/user.js

const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db'); // Ajustez le chemin selon votre structure
const router = express.Router();

router.get('/:username', async (req, res) => {
  const { username } = req.params;

  res.header("Content-Type", "text/plain");

  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Utilisateur non trouvé');
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

router.post('/newuser', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  res.header("Content-Type", "text/plain");

  try {
    const newUser = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );
    res.json(newUser.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = router;
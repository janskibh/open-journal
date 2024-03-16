// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'oj_user', // Votre nom d'utilisateur pour la base de données
  host: '127.0.0.1',
  database: 'open_journal',
  password: 'p49cykAhdqQJSxzm2K358t', // Votre mot de passe pour la base de données
  port: 5432,
});

module.exports = pool;

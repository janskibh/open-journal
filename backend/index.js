const express = require('express');
const app = express();
const cors = require('cors');

// ROUTES

const userRoutes = require('./routes/users');

app.use(express.json()); // Pour parser les requêtes JSON
app.use(cors());

app.get('/', (req, res) => {
  res.header("Content-Type", "text/plain");
  res.send('Open-Journal API\n');
});

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3059;
app.listen(PORT, () => {
  console.log(`Open Journal server is running on port ${PORT}`);
});

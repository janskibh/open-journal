const express = require('express');
const app = express();

app.use(express.json()); // Pour parser les requêtes JSON

app.get('/', (req, res) => {
  res.send('Bienvenue sur Open Journal !');
});

const PORT = process.env.PORT || 3059;
app.listen(PORT, () => {
  console.log(`Open Journal server is running on port ${PORT}`);
});

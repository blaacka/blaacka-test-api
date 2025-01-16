const express = require('express');
const app = express();
const port = 3000;

const countries = [
  { code: 'FR', name: 'France' },
  { code: 'DE', name: 'Germany' },
  { code: 'IT', name: 'Italy' },
  // Ajoutez d'autres pays ici
];

app.get('/countries', (req, res) => {
  res.json(countries);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

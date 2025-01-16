const express = require('express');
const app = express();
const port = 3000;

const countries = [
  { code: 'FR', name: 'France SIRLRIA NG' },
  { code: 'DE', name: 'Germany SIRLRIA NG' },
  { code: 'IT', name: 'Italy SIRLRIA NG' },
  { code: 'ITxx', name: 'Norvege SIRLRIA NG' },
  // Ajoutez d'autres pays ici
];

app.get('/countries', (req, res) => {
  res.json(countries);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

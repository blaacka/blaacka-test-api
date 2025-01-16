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

const dangers = [
  { code: 'FR', name: 'DANGER AAAA' },
  { code: 'DE', name: 'DANGER BBBB' },
  { code: 'IT',  name: 'DANGER CCCC' },
  { code: 'ITxx', name: 'DANGER DDDD' },
  // Ajoutez d'autres pays ici
];

app.get('/countries', (req, res) => {
  res.json(countries);
});
app.get('/dangers', (req, res) => {
  res.json(dangers);
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Bienvenue</title>
      </head>
      <body>
        <h1>Bienvenue sur notre API</h1>
        <p>Utilisez l'endpoint <a href="/countries">/countries</a> pour obtenir la liste des pays.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

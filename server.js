const express = require('express');
const app = express();
const port = 2000;

const countries = [
  { code: 'FR', name: 'France SIRLRIA NG' },
  { code: 'DE', name: 'Germany SIRLRIA NG' },
  { code: 'IT', name: 'Italy SIRLRIA NG' },
  { code: 'DD', name: 'Norvege SIRLRIA NG xxxxxxx' },
  // Ajoutez d'autres pays ici
];

const dangers = [
  { code: 'FR', name: 'DANGER AAAA' },
  { code: 'DE', name: 'DANGER BBBB' },
  { code: 'IT',  name: 'DANGER CCCC' },
  { code: 'DD', name: 'DANGER DDDD' },
  // Ajoutez d'autres pays ici
];

const classeDangerRefListe = [{value:'AA',label:'DANGER AAAA'},{value:'BB',label:'DANGER BBBB'},{value:'CC',label:'DANGER CCCC'},{value:'DD',label:'DANGER DDDD'}];
const classeDangerRefListe2 = [{value:'AA',label:'DANGER AAAA'},{value:'BB',label:'DANGER BBBB'},{value:'CC',label:'DANGER CCCC'},{value:'DD',label:'DANGER DDDD'},{value:'EE',label:'DANGER EEEEE'},{value:'FF',label:'DANGER FFFF'},,{value:'GG',label:'DANGER GGGG'}];

app.get('/countries', (req, res) => {
  res.json(countries);
});
app.get('/dangers', (req, res) => {
  res.json(dangers);
});

app.get('/formsjs/dangers', (req, res) => {
  res.json(classeDangerRefListe);
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

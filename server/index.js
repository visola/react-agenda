const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 4000;

const contacts = [];

app.get('/api/contacts', (req, res) => {
  setTimeout(() => res.json(contacts), 2000 * Math.random() + 500);
});

app.post('/api/contacts', (req, res) => {
  contacts.push({
    ...req.body,
    id: Date.now(),
  });

  fs.writeFileSync('data.json', JSON.stringify(contacts));
  res.json(contacts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

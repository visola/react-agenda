const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const uuidv4 = require('uuid').v4;

const app = express();
app.use(bodyParser.json());

const port = 4000;

const contactsAsString = fs.existsSync('data.json') ? fs.readFileSync('data.json').toString() : '[]';
const contacts = JSON.parse(contactsAsString);

const randomDelay = () => 2000 * Math.random() + 500;

app.get('/api/contacts', (req, res) => {
  setTimeout(() => res.json(contacts), randomDelay());
});

app.post('/api/contacts', (req, res) => {
  setTimeout(() => {
    contacts.push({
      ...req.body,
      id: uuidv4(),
    });
  
    fs.writeFileSync('data.json', JSON.stringify(contacts));
    res.json(contacts);
  }, randomDelay());
});

app.put('/api/contacts/:id', (req, res) => {
  setTimeout(() => {
    const id = req.params.id;
    const indexOf = contacts.findIndex((c) => c.id === id);
    contacts[indexOf] = req.body;
    fs.writeFileSync('data.json', JSON.stringify(contacts));
    res.json(contacts);
  }, randomDelay());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

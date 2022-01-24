const express = require('express')
const path = require('path')
const app = express();

const notes = require('./db/db.json')
const fs = require('fs');
const uuid = require('./helpers/uuid')

const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/public', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))

});


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
    console.log(`${req.method} request received to get notes`)
});


app.post('/api/notes', (req, res) => {
    console.log(`${req.method} request received to add notes`)
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
       notes.push(newNote); 
    }
    
})


// const addedNotes 

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`))
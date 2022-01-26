const express = require('express');
const path = require('path');
const app = express();
const notes = require('./db/db.json');
const fs = require('fs');
const uuid = require('./helpers/uuid');
const apiRoutes = require('./routes/apiroutes');

const PORT = process.env.PORT || 3001;

//Middleware
app.use('/api', apiRoutes);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});



// const addedNotes 

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`))
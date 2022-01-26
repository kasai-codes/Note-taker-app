const express = require('express');
const path = require('path');
const app = express();

const fs = require('fs');
const uuid = require('./helpers/uuid');
const apiRoutes = require('./routes/apiroutes');

const PORT = process.env.PORT || 3001;

//Middleware
app.use
app.use('/api', apiRoutes);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// const addedNotes 

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`))
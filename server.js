const express = require('express');
const path = require('path');
const app = express();
const storedNotes = require('./db/db.json');
const fs = require('fs');
const uuid = require('./helpers/uuid');


const PORT = process.env.PORT || 3001;

//Middleware

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Get request for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// Get request for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});
// Get route for getting all the notes
app.get('/api/notes', (req, res) => {

    console.log(`${req.method} request received to get notes`)
    res.sendFile(path.join(__dirname, './db/db.json'))
});


// Post route for a new note
app.post('/api/notes', (req, res) => {
    console.log(`${req.method} request received to add notes`)
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        storedNotes.push(newNote);

        var Notes = JSON.stringify(storedNotes, null, 2);

        fs.writeFile(`./db/db.json`, Notes, (err) =>
            err
                ? console.error(err)
                : console.log(
                    `"${newNote.title}" has been written to JSON file`
                ));
        const response = {
            status: 'success',
            body: newNote,

        }

        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error in posting note');
    }

});


app.delete('/api/notes/:id', (req, res) => {
     
    const noteIndex = storedNotes.findIndex(({id}) => id === req.params.id);

    if (noteIndex >= 0) {
        storedNotes.splice(noteIndex, 1)

  

          fs.writeFile(
            './db/db.json', JSON.stringify(storedNotes, null, 4), // notes or allNotes
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully deleted note with ID:' + req.params.id)
          );
          res.sendStatus(204)
    }

})
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`))



    // const id = rq.params.id;
    // var currentNotes = storedNotes.filter(item => item.id !== id);
    // storedNotes = currentNotes;
    // if (id) {
    //     fs.writeFile(`./db/db.json`, JSON.stringify(currentNotes, null, 2), (err) =>
    //     err
    //       ? console.error(err)
    //       : console.log(
    //           `${id} has been deleted from JSON file`
    //         )
    //   );
  
    //   const response = {
    //     status: 'success',
    //     id: id
    //   };
  
    //   console.log(response);
    //   res.status(201).json(response);
    // } else {
    //     res.status(500).json('Error in deleting note');
    // }
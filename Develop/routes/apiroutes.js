const crud = require('../db/crud');
const router = require('express').Router();


router.get('/notes', (req, res) => {

    console.log(`${req.method} request received to get notes`)
    crud.read().then((data) => res.json(JSON.parse(data)));
});


router.post('/api/notes', (req, res) => {
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
    
});

module.exports = router;
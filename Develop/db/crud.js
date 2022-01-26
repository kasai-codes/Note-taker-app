const util = require('util');
const fs = require('fs');



const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Crud {

    read() {
        return readFileAsync('./db/db.json', 'utf-8')

        console.log(data);
    }

    write() {

    }

    getNotes() {

    }

    addNotes() {

    }

    deleteNotes() {

    }
};

module.exports = new Crud();
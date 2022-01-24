const util = require('util');
const fs = require('fs');
const uuid = require('uuid');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class crud {

    read() {

    }

    write() {

    }

    getNotes(){

    }

    addNotes(){

    }

    deleteNotes() {

    }
};

module.exports = new crud();
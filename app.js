const validator = require('validator');
const chalk = require('chalk');

const yargs = require('yargs');

const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        notes.addNotes(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder:{
        title:{
            describe:'Note title to be deleted',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        notes.removeNotes(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler (){
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads Notes',
    builder:{
        title:{
            describe:'Note to be read',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();
// console.log(yargs.argv);
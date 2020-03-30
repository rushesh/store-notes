const fs = require('fs');
const chalk = require('chalk');

const getnotes = ()=>{
    const notes = loadNotes();
}

const addNotes = (title,body)=>{

    const notes = loadNotes();

    // const duplicateNotes = notes.filter((note)=>{
    //     return note.title === title;
    // });

    const duplicateNoteSingle = notes.find((note)=>{
        return note.title === title;
    });

    if(!duplicateNoteSingle)
    {
    notes.push({
        title:title,
        body:body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New Note Added'));
    }
    else{
        console.log(chalk.red.inverse('Duplicate note title : ')+ chalk.red('Note Title Taken'));
    }
}

const removeNotes = (title)=>{
    const notes = loadNotes();
    const findNote = notes.filter((note)=>{
        return note.title!==title;
    });
    if(findNote.length < notes.length){
        saveNotes(findNote);
        console.log(chalk.greenBright('Note deleted successfully:',title));
    }
    else{
        console.log(chalk.redBright.inverse('No note with entered title to delete'));
    }
}

const listNotes = ()=>{

    const notes = loadNotes();
    if(notes.length === 0){
        console.log(chalk.yellowBright('No notes to display'));
    }
    else{
        console.log(chalk.green.inverse('Your notes are : '));
        notes.forEach(note => {
            console.log(chalk.green('Title : '+note.title));
            console.log(chalk.green('Body : '+note.body));
        });
    }

}

const readNote = (title)=>{
    const notes = loadNotes();
    // const findNote = notes.filter((note)=>{
    //     return (note.title === title)
    // });
    //filter constinues to parse even after finding a first match wheae as find stops at the first condition met

    const findNoteSingle = notes.find((note)=>{
        return note.title === title;
    })

    if(findNoteSingle){
        console.log(chalk.green('Title : '+findNoteSingle.title));
        console.log(chalk.green('Body : '+findNoteSingle.body));
    }
    else{
        console.log(chalk.yellowBright('No such note with title found'));
    }
}

const loadNotes = ()=>{
    try {
        const notesDataBuffer = fs.readFileSync('notes.json');
        const notesDataJson = notesDataBuffer.toString();
        const notesArrayJson = JSON.parse(notesDataJson);
        return notesArrayJson; 
    } catch (error) {
        return [];
    }
}

const saveNotes = (notes)=>{
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}

module.exports = {
    getnotes:getnotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
};
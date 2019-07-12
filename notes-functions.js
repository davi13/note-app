// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

//Remove note from the List
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })
    if (noteIndex >= -1) {
        notes.splice(noteIndex, 1);
    }
}
// Generate the DOM structure for a note
const generateNoteDOM = function (note) {

    const noteEl = document.createElement('div');
    const textEL = document.createElement('a')
    const button = document.createElement('button');
    const time = document.createElement('span');

    //Setup the remove note button
    button.textContent = 'X';
    noteEl.appendChild(button);
    button.addEventListener('click', function () {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    })
    const now = moment().fromNow([note.createAt]);
    //Setup the note title text
    if (note.title.length > 0) {
        textEL.textContent = note.title;
        time.textContent = now;
    } else {
        textEL.textContent = 'Unnamed note';
        time.textContent = now;

    }
    //redirecting user to edit-note page
    textEL.setAttribute('href', `/edit.html#${note.id}`);

    //noteEl.appendChild(textEL);
    noteEl.appendChild(textEL);
    noteEl.appendChild(time);
    return noteEl;
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}
//Generate the last edited message
const generateLastEdited = function (timeStamp) {
    return `Last edited ${moment(timeStamp).fromNow()}`;
}
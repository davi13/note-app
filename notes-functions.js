'use strict';

// Read existing notes from localStoragex
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');
    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (e) {
        return [];
    }
    // if (notesJSON !== null) {
    //     return JSON.parse(notesJSON)
    // } else {
    //     return []
    // }

}

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

//Remove note from the List
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex >= -1) {
        notes.splice(noteIndex, 1);
    }
}
// Generate the DOM structure for a note
const generateNoteDOM = (note) => {

    const noteEl = document.createElement('div');
    const textEL = document.createElement('a')
    const button = document.createElement('button');
    const time = document.createElement('span');

    //Setup the remove note button
    button.textContent = 'X';
    noteEl.appendChild(button);
    button.addEventListener('click', () => {
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
//Sort your notes by one three ways 
const sorteNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        });
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createAt > b.createAt) {
                return -1;
            } else if (a.createAt < b.createAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        })
    }
    else {
        return notes
    }

}

// Render application notes
const renderNotes = (notes, filters) => {
    notes = sorteNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}
//Generate the last edited message
const generateLastEdited = (timeStamp) => `Last edited ${moment(timeStamp).fromNow()}`;
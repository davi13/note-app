//Modification in the edit page
const titlElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const button = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-edited');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function (note) {
    return note.id === noteId;
});
//Redirection if there is no id provide
if (note === undefined) {
    location.assign('/index.html');
}
titlElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);
//Selection of input and modfication
titlElement.addEventListener('input', function (e) {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});
//Selection of textArea and modfication 
bodyElement.addEventListener('input', function (e) {

    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});
//Removing the hole note.
button.addEventListener('click', function () {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
});
window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find(function (note) {
            return note.id === noteId;
        });
        if (note === undefined) {
            location.assign('/index.html');
        }
        titlElement.value = note.title;
        bodyElement.value = note.body;
        dateElement.textContent = generateLastEdited(note.updatedAt);
    }
});


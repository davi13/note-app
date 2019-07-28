// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`;
}

// Render application notes
const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector('#notes');
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    notesEl.innerHTML = '';

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note);
            notesEl.appendChild(noteEl);
        })
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMessage.classList.add('empty-message');
        notesEl.appendChild(emptyMessage);
    }
}
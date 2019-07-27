let notes = [];

// Read existing notes from localStorage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

//Expose notes from module
const getNotes = () => notes

notes = loadNotes();

export { getNotes };
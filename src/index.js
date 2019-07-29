import { getNotes, createNotes, removeNote, updateNote } from './notes.js';
import { getFilters, setFilters } from './filters'
import { renderNotes } from './views';

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = createNotes();
    location.assign(`edit.html#${id}`);

})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes();
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes();
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes();
    }
})

import { getNotes, createNotes, removeNote, updateNote } from './notes.js';
import { getFilters, setFilters } from './filters'

// console.log(getNotes());
// createNotes()
// updateNote('f3fc2b4e-8e2a-42ff-bec4-c2f2f1543f99', {
//     title: 'My note title',
//     body: 'This is the body for my note'
// })
// console.log(getNotes());
console.log(getFilters());
setFilters({
    searchText: 'Office',
    sortBy: 'bycreated'
});
console.log(getFilters());  
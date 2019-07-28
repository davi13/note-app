import { getNotes, createNotes, removeNote, updateNote } from './notes.js';
import { getFilters, setFilters } from './filters'


console.log(getFilters());
setFilters({
    searchText: 'Office',
    sortBy: 'bycreated'
});
console.log(getFilters());  
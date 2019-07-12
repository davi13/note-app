let notes = getSavedNotes()
const filters = {
    searchText: ''
}
renderNotes(notes, filters)
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4();
    const now = moment();
    notes.push({
        id: id,
        title: '',
        body: '',
        createAt: now.format('DD/MM/YYYY HH:mm.ss')
    })
    saveNotes(notes);
    //renderNotes(notes, filters);
    location.assign(`/edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
});
//Editing the title on live from the edit page
window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
});


// const now = moment();
// now.subtract(1, 'week').subtract(20, 'days');

// const nowTimestamp = now.valueOf();
// console.log(moment(nowTimestamp).toString());
//const newMoment = moment().set({ 'day': 5, 'year': 1980, 'month': 9, });

// const birthday = moment();
// birthday.date(10).month(9).year(1980);




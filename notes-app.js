let notes = getSavedNotes()
const filters = {
    searchText: ''
}
renderNotes(notes, filters)
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: ''
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

const now = new Date();
//console.log(now)
// console.log(`year: ${now.getFullYear()}`);
// console.log(`month: ${now.getMonth()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`minute: ${now.getMinutes()}`);
// console.log(`seconds: ${now.getSeconds()}`);

const timeStamp = now.getTime();

const dateOne = new Date('march 1 2018 12:00:00');
const dateOneTimeStamp = dateOne.getTime();
const dateTwo = new Date();
const dataTwoTimeStamp = dateTwo.getTime()

if (dateOneTimeStamp < dataTwoTimeStamp) {
    console.log(dateOne.toString());

} else if (dateTwo < dateOne) {
    console.log(dateTwo.toString());

}
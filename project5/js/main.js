/* SEARCH BAR FUNCTIONALITY */

/* Get the search bar, corresponding table and its rows */
const searchBar = document.querySelector(".search");
const table = document.querySelector(`table[data-info="${searchBar.dataset.table}"]`);
const rows = [...(table.children[0]).children];
rows.shift();
const names = rows.map(row => row.children[0].innerHTML);

/* Implement the search function */
function search() {
    const text = this.value;
    if (text === '') {
        rows.forEach(row => row.style.display = null);
        return;
    }
    const length = names.length;
    const regex = new RegExp(text, 'gi');
    for (let i = 0; i < length; i++) {
        if (names[i].match(regex)) rows[i].style.display = null;
        else rows[i].style.display = 'none';
    }
}

/* Hook up the listener */
searchBar.addEventListener('keyup', search);

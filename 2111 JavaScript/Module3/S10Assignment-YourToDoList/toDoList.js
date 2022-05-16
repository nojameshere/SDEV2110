const addItem = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos')
//gets passed the (todo) then it places it and the html into the document by appending it using +=.
const genTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `

    list.innerHTML += html;

}
//when enter is pressed on add a new do to, it calls the genTemplate function with any string that isn't length 0
addItem.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addItem.add.value.trim();

    if (todo.length) {
        genTemplate(todo);
        addItem.reset();
    }
})
//Delete items
list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

});
//filters by giving the .filtered class to the to dos
const filterTodos = (term) => {

    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));

}
//a keyp event listener where I spent almost 35 minutes rewatching videos because I spelt 'search' as 'serach' and didn't notice...
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term);
})
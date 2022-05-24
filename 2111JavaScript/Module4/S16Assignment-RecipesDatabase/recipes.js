const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) => {
    let liItem = `
    <li data-id="${id}">
        <div>${recipe.title}, ${recipe.category}</div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>`;

    list.innerHTML += liItem;
}

const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    })
}

db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        } else if(change.type === 'removed') {
            deleteRecipe(doc.id);
        }
    })
});

form.addEventListener('submit', e => {
    e.preventDefault();

    const recipe = {
        title: form.recipe.value,
        category: form.category.value
    };
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch(err => {
        console.log(err);
    })
    form.reset();
})
list.addEventListener('click', e => {
    
    if(e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe deleted');
        });
    }
})

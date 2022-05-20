const recipeList = document.querySelector('.chat-list');
const newRecipeForm = document.querySelector('.new-chat');
const categories = document.querySelector('.chat-rooms');
const categoryType = document.querySelector('.type');

//add a new recipe
newRecipeForm.addEventListener('submit', e => {
    e.preventDefault();

    const newTitle = newRecipeForm.message.value.trim();
    recipes.addRecipe(newTitle)
        .then(() => newRecipeForm.reset())
        .catch(err => console.log(err))
        ;
})

categories.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        recipeUI.clear();
        recipes.updateCategory(e.target.getAttribute('id'));
        recipes.getRecipes(recipe => recipeUI.render(recipe));
        categoryType.innerHTML = recipes.category;
    }
})

//class instances
const recipeUI = new RecipeUI(recipeList);
const recipes = new Recipes('entree');
//this sets the category lable as 'entree' same as the default used when constructing the recipes const.
categoryType.innerHTML = 'entree';
//get recipies and render
recipes.getRecipes(data => {
    recipeUI.render(data);
})


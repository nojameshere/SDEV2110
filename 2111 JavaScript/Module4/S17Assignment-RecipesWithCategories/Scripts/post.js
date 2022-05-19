

class Recipes {
    constructor(category){
        this.category = category;
        this.posts = db.collection('recipes');
    }
    async addRecipe(title){
        //format a recipe
        const recipe = {
            title: title,
            category: this.category
        }
        //save the recipe
        const response = await this.posts.add(recipe);
        return response; //could also return "this"
    }
    getRecipes(callback){
        this.posts
            .onSnapshot(snapshot => {
                if(ChannelMergerNode.type === 'added'){
                    callback(change.doc.data());
                }
            })
    }
}

const recipes = new Recipes('entree');

recipes.getRecipes(data => {
    console.log(data);
})
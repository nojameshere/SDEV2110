class Recipes {
    constructor(category){
        this.category = category;
        this.posts = db.collection('recipes');
        this.unsub;
    }
    async addRecipe(title){
        const recipe = {
            title: title,
            category: this.category
        }
        const response = await this.posts.add(recipe);
        return response; //could also return "this"
    }
    getRecipes(callback){
        this.unsub = this.posts
            .where('category', '==', this.category)
            .orderBy('title')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        callback(change.doc.data());
                    };
                });
            });
    };
    updateCategory(category){
        this.category = category;
        if(this.unsub){
            this.unsub();
        }
    }
};
class RecipeUI {
    constructor(list){
        this.list = list;
    };
    render(data){
        const html = `
            <li class="list-group-item">
                <span class="title">${data.title}</span>
            </li>
        `;

        this.list.innerHTML += html;
    }
    clear(){
        this.list.innerHTML = '';
    }
}

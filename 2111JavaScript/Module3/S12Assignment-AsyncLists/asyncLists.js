const ul = document.querySelector('ul');

const appendHtml = ((item) => {
    const template = `<h2>${item[0].topic}</h2>`;
    const liTemplate = array => {
        return `<li>${array.text}</li>`;
    }
    ul.innerHTML += template;
    
    item.forEach((arrayText) => {
        ul.innerHTML += liTemplate(arrayText);
    })
});
const getTodos = resource => {

return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            resolve(data)
        } else if(request.readyState === 4){
            reject('error getting resource')
        }
    });

    request.open('GET', resource);
    request.send();
    
});

};
getTodos('todos/macbook.json').then(data => {
    console.log('promise resolved: ', data);
    appendHtml(data);
    return getTodos('todos/dinner.json');
}).then(data => {
    console.log('promise 2 resolved: ', data);
    appendHtml(data);
    return getTodos('todos/nightActivities.json');
}).then(data => {
    console.log('promise 3 resolved: ', data);
    appendHtml(data);
}).catch(err => {
    console.log('promise rejected', err);
})
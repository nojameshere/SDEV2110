const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    popup.style.display = 'block';
    const liPrepend = document.createElement('li');
    liPrepend.textContent = 'Hello World!';
    ul.prepend(liPrepend);
})

ul.addEventListener('click', () => {
    const liAppend = document.createElement('li');
    liAppend.textContent = 'Congratulations!';
    ul.append(liAppend);
})

close.addEventListener('click', () => {
    popup.style.display = 'none';
})

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})
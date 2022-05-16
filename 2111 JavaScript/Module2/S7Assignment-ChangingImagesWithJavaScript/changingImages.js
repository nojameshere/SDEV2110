const pumpkin = document.getElementById('pumpkinIMG');
const light = document.getElementById('lightbulbIMG');

//Changes the image source of pumpkin when clicked. Is a toggle.
pumpkin.addEventListener('click', e => {
    console.log(pumpkin.getAttribute('src'))
    if(pumpkin.getAttribute('src') === 'pumpkins-lit.jpg'){
        pumpkin.src = 'pumpkins.jpg';
    } else {
        pumpkin.src = 'pumpkins-lit.jpg';
    }
})
//Turns bulb on when mouse is hovering
light.addEventListener('mouseover', e => {
    light.src = 'light_bulb_on.png'
})
// Turns bulb off when mouse is not hovering
light.addEventListener('mouseout', e => {
    light.src = 'light_bulb_off.png'
})
// class Tooltip {
//     constructor(element){
//         this.element = element;
//         this.message = element.getAttribute('data-message')
//     }
//     init(){
//         const tip = document.createElement('div');
//         tip.classList.add('tip');
//         tip.textContent = this.message;
//         this.element.appendChiled(tip);

//         this.element.addEventListener('mouseenter', () => {
//             tip.classList.add('active');
//         });
//         this.element.addEventListener('mouseleave', () => {
//             tip.classList.remove('active');
//         });
//     }
// }
const tipArray = {
    0: 'Course SDEV 2111',
    1: 'Language for creating interactive web sites',
    2: 'MDN website, https://developer.mozilla.org/en-US/',
    3: 'MDN website'
}

// const tooltip = new Tooltip(document.querySelector('div'));

// tooltip.init();

const pTags = document.querySelector('.tooltips');

pTags.addEventListener('mouseout', e => {
    if(e.target.classList.contains('output')){
    e.target.style.display = 'none';
    }
})

pTags.addEventListener('mouseover', e => {
    if(e.target.classList.contains('0')){
    console.log('shit is 0');
    }else if(e.target.classList.contains('1')){
        console.log('shit is 1');
    }else if(e.target.classList.contains('2')){
        console.log('looks like 2');
    }else if(e.target.classList.contains('3')){
        console.log('tahree');
    }
})
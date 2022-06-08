const tooltips = document.querySelector('.tooltips');

const tipArray = {
    0: 'Course SDEV 2111',
    1: 'Language for creating interactive web sites',
    2: 'MDN website, https://developer.mozilla.org/en-US/',
    3: 'MDN website'
};

tooltips.addEventListener('mouseover', e => {
    if(e.target.className === 'tips'){ 
        let tipNumber = e.target.dataset.tipnumber;
        const tip = document.createElement('div');
        tip.classList.add('output');
        tip.textContent = tipArray[tipNumber];
        tip.style.display = 'block';
        tip.style.top = e.clientY + 5 + "px";
        tip.style.left = e.clientX + 5 + "px";
        e.target.appendChild(tip);
        setInterval(removeOutput,3000);
    }
});
const removeOutput = () => {
    const outputs = document.querySelectorAll('.output');
    outputs.forEach(output => output.style.display = 'none');
}
tooltips.addEventListener('mouseleave', () => {
    removeOutput();
});
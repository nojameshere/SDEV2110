const button = document.querySelector('button');
const advice = document.querySelector('h2');

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const result = await response.json();
    
    advice.textContent = result.slip.advice;
}

button.addEventListener('click', () => {

    getAdvice();
})

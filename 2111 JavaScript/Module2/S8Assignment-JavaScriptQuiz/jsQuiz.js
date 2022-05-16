const correctAnswers = ['B', 'C', 'A', 'D', 'B'];
const form = document.querySelector('.quiz-form');
const scoreDocument = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    })
    scrollTo(0, 0);
    scoreDocument.querySelector('span').textContent = `${score}%`;
    scoreDocument.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        scoreDocument.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 15);
});
form.addEventListener('reset', e => {
    scrollTo(0, 0);
    scoreDocument.classList.add('d-none');
})
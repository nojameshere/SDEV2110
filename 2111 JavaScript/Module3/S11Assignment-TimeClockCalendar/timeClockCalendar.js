const clock = document.querySelector('.clock');
const date = document.querySelector('.date');

const tick = () => {
    const now = new Date();

    const html = `
        <p>Military Time: <span>${dateFns.format(now, 'HH : mm : ss')}</span></p>
        <p>Standard Time: <span>${dateFns.format(now, 'h : mm : ss A')}</span></p>
    `;
    clock.innerHTML = html;

    const dateHtml = `
        <p>Long Date: <span>${dateFns.format(now, 'MMMM d, YYYY')}</span></p>
        <p>Military Date: <span>${dateFns.format(now, 'd MMM YYYY')}</span></p>
        <p>Slash Date: <span>${dateFns.format(now, 'M/d/YY')}</span></p>
        <p>Euro Date: <span>${dateFns.format(now, 'd/M/YYYY')}</span></p>
    `;
    date.innerHTML = dateHtml;
}

setInterval(tick, 1000);
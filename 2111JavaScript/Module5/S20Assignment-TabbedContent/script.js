const tabs = document.querySelectorAll('li');
const container = document.querySelector('.tabs');
function toggleTabs(e){
    tabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');
}

function toggleContent(e){
    container.querySelectorAll('.content').forEach(item => {
        item.classList.remove('active');
    });
    const selector = e.target.getAttribute('data-target');
    const content = document.querySelector(selector);
    content.classList.add('active');
}


tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        toggleTabs(e);
        toggleContent(e);
    })
})


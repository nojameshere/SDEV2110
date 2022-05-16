const namePattern = /^[a-zA-Z]{4,}$/
const passwordPattern = /^[a-zA-Z0-9]{12,}$/
const costPattern = /^[0-9\.]{1,}$/
const form = document.querySelector('.tip');
const nError = document.querySelector('.nError');
const pError = document.querySelector('.pError');
const cError = document.querySelector('.cError');
const feedbackCost = document.querySelector('.mealCost');
const feedbackTip = document.querySelector('.tipAmount');
const feedbackBill = document.querySelector('.totalBill');

form.addEventListener('submit', e => {
    e.preventDefault();
    let mealCost = parseFloat(form.cost.value);
    let percentage = parseFloat(form.qos.value);
    percentage = percentage / 100;
    let tipAmount = percentage * mealCost;
    let totalBill = tipAmount + mealCost;
    let moneyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    let formattedTip = moneyFormat.format(tipAmount);
    let formattedTotal = moneyFormat.format(totalBill);
    //push MealCost, Tip, and Total here
    feedbackCost.textContent = 'Meal Cost: $' + form.cost.value;
    feedbackTip.textContent = 'Tip: ' + formattedTip;
    feedbackBill.textContent = 'Total: ' + formattedTotal;
})
//Validates the name input field
form.name.addEventListener('keyup', e => {
    if (namePattern.test(e.target.value)) {
        form.name.setAttribute('class', 'success');
        nError.textContent = null;
    } else {
        form.name.setAttribute('class', 'failure');
        nError.textContent = '  Name must be at least 4 letters long, no numbers.';
    }
});
//Validates the password input field
form.password.addEventListener('keyup', e => {
    if (passwordPattern.test(e.target.value)) {
        form.password.setAttribute('class', 'success');
        pError.textContent = null;
    } else {
        form.password.setAttribute('class', 'failure');
        pError.textContent = '  Password Must be 12 characters, letters and numbers only';
    }
})
//Validates the cost input field
form.cost.addEventListener('keyup', e => {
    if (costPattern.test(e.target.value)) {
        form.cost.setAttribute('class', 'success');
        cError.textContent = null;
    } else {
        form.cost.setAttribute('class', 'failure');
        cError.textContent = '  Meal Cost must be numbers and decimal only'
    }
    if (e.target.value <= 0) {
        form.cost.setAttribute('class', 'failure');
        cError.textContent = '  Meal Cost must be more than $0';
    }
})
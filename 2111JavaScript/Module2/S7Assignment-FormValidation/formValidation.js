//query selectors for the form and <p> elements for error messages.
const form = document.querySelector('.signup-form');
const docIDError = document.querySelector('#idError');
const docFNError = document.querySelector('#fnError');
const docLNError = document.querySelector('#lnError');
//regular expressions for input field testing.
const firstNamePattern = /^[a-zA-z]{2,}$/;
const lastNamePattern = /^[a-zA-Z]{2,}$/;
const IDPattern = /^[0-9]{10,}$/;
//submit button form validation.
form.addEventListener('submit', e => {
    e.preventDefault();
    if(IDPattern.test(form.userID.value)){
        console.log('success')
    } else {
        docIDError.textContent = '•ID Number must be at least 10 digits long and only contain numbers.'
    }
    if(firstNamePattern.test(form.firstName.value)){
        console.log('success')
    } else {
        docFNError.textContent = '•First Name must be only letters and more than 2 letters long.'
    }
    if(lastNamePattern.test(form.lastName.value)){
        console.log('success')
    } else {
        docLNError.textContent = '•Last Name must be only letters and more than 2 letters long.'
    }
})
//listens to typing in the userID field.
form.userID.addEventListener('keyup', e => {
    if(IDPattern.test(e.target.value)){
        form.userID.setAttribute('class', 'success');
        docIDError.textContent = null;
    } else {
        form.userID.setAttribute('class', 'failure');
        docIDError.textContent = '•ID Number must be at least 10 digits long and only contain numbers.'
    }
})
//listens to typing in the firstName field.
form.firstName.addEventListener('keyup', e => {
    if(firstNamePattern.test(e.target.value)){
        form.firstName.setAttribute('class', 'success');
        docFNError.textContent = null;
    } else {
        form.firstName.setAttribute('class', 'failure');
        docFNError.textContent = '•First Name must be only letters and more than 2 letters long.'
    }
})
//listens to typing in the lastName field.
form.lastName.addEventListener('keyup', e => {
    if(lastNamePattern.test(e.target.value)){
        form.lastName.setAttribute('class', 'success');
        docLNError.textContent = null;
    } else {
        form.lastName.setAttribute('class', 'failure');
        docLNError.textContent = '•Last Name must be only letters and more than 2 letters long.'
    }
})
//------VARIABLES------//
//DOM elements
const form = document.getElementById('form');
const passwordElement = document.getElementById('password1');
const passwordConfirmElement = document.getElementById('password2');
const messageContainer = document.querySelector('.result-message-container');
const message = document.getElementById('result-message');

//Process form data
let isValid = false;
let passwordMatch = false;

//------FUNCTIONALITIES------//
//Check form validity within js
function validateForm() {
    let colorCode = '#6e0101';
    //check constraints
    isValid = form.checkValidity();
    //check and modify message for an error
    if(!isValid) { 
        colorCode = '#6e0101';
        message.textContent = 'Please fill out all fields.';
        message.style.color = colorCode;
        messageContainer.style.borderColor = colorCode;
        return;  
    }

    // check if passwords are the same 
    if(passwordElement.value === passwordConfirmElement.value) {
        colorCode = '#007200';
        passwordMatch = true;
        message.style.color = colorCode;
        messageContainer.style.borderColor = colorCode;
        messageContainer.style.backgroundColor = 'white';
        passwordElement.style.borderColor = colorCode;
        passwordConfirmElement.style.borderColor = colorCode;
    } else {
        colorCode = '#6e0101';
        passwordMatch = false;
        message.textContent = 'Passwords are not matching';
        message.style.color =  colorCode;
        messageContainer.style.borderColor = colorCode;
        messageContainer.style.backgroundColor = 'white';
        passwordElement.style.borderColor = colorCode;
        passwordConfirmElement.style.borderColor = colorCode;
        return;
    }

    // if form is valid and passwords match
    if(isValid && passwordMatch) {
            colorCode = '#007200';
            message.textContent = 'Successful Registration';
            message.style.color = colorCode ;
            messageContainer.style.borderColor = colorCode ;
            messageContainer.style.backgroundColor = 'white';
            messageContainer.style.color = colorCode;
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value, 
        email: form.email.value,
        websiteURL: form.url.value,
        password: form.password.value
    }
    console.log(user); 
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    //if form is valid store data
    if(isValid && passwordMatch) {
        storeFormData();
    }
}

//------EVENT LISTENER------//
//Add event listener
form.addEventListener('submit', processFormData);
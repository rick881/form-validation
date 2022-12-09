const form = document.getElementById('form');
const control = document.querySelectorAll('.form-control');
const username = document.getElementById('name'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const cPassword = document.getElementById('password2'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const name = username.value.trim();
    const mail = email.value.trim();
    const password1 = password.value.trim();
    const password2 = cPassword.value.trim();

    if (name === '') {
        onError(username, "username cannot be blank");
    } else {
       success(username);
    }    

    if (mail === '') {
        onError(email, "email cannot be blank");
    } if (!mail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        onError(email, "enter a valid email address");
    } else {
        success(email);
    }    

    if (password1 === '') {
        onError(password, "password cannot be blank");
    } else if (password1.length < 8)  {
        onError(password, "password too short");
    } else if (password1.length > 20) {
        onError(password, "password too long");
    } else {
        success(password);
    }

    if (password2 === '') {
        onError(cPassword, "password cannot be blank");
    } else if (password2 !== password1) {
        onError(cPassword, "passwords do not match");
    } else if (password2.length > 20) {
        onError(password, "password too long");
    } else {
        success(cPassword);
    }
}    

function onError(input, message) {
    let parent = input.parentElement;
    let msg = parent.querySelector("small");
    parent.classList.remove('success');
    parent.classList.add('error');
    msg.innerText = message;
}

function success(input) {
    let parent = input.parentElement;
    let msg = parent.querySelector("small");
    parent.classList.remove('error');
    parent.classList.add('success');
    msg.innerText = "";
    
}


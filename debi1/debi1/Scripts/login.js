var username = document.getElementById('username');
var password = document.getElementById('password');
var form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    usernameValidation();
    passwordValidation();
}

function clearInput() {
    document.getElementById("form").reset();
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    small.style.display = "block";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    if (small) {
        small.innerText = '';
        small.style.display = 'none';
    }
}

function usernameValidation() {
    var length = 3;
    var usernameValue = username.value;
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else if (usernameValue.length < length) {
        setErrorFor(username, 'Username must be at least 3 characters long');

    } else if (nameValue.length < length) {
        setErrorFor(firstname, 'first name must be at least 2 letters long');


    } else {
        setSuccessFor(username);
    }
}

function passwordValidation() {
    var length = 6;
    var passwordValue = password.value;

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (!/[A-Z]/.test(passwordValue)) {
        setErrorFor(password, 'Password must include at least 1 uppercase letter');
    } else if (!/\d/.test(passwordValue)) {
        setErrorFor(password, 'Password must include at least 1 number');
    } else if (passwordValue.length < length) {
        setErrorFor(password, 'Password must be at least 6 characters long');
    } else {
        setSuccessFor(password);
    }
}

var floating_btn = document.querySelector('.floating-btn');
var close_btn = document.querySelector('.close-btn');
var social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});


const form = document.querySelector('.form');

const submitButton = document.querySelector('.submit-button');

form.addEventListener('submit', (event) => {

    event.preventDefault();
});


function checkFormValues() {
    const isDisabled = Object.values(formValues).some((value) => value.length === 0);
    submitButton.disabled = isDisabled;
}

const formValues = {
    username: '',
    phone: '',
    password: '',
};

const inputUsername = document.querySelector('input[name="username"]');
const inputPhone = document.querySelector('input[name="phone"]');
const inputPassword = document.querySelector('input[name="password"]');

function updateButton() {
    submitButton.disabled = !(formValues.username && formValues.phone && formValues.password);
}

inputUsername.addEventListener('input', (event) => {
    formValues.username = event.target.value;
    updateButton();
});

inputPhone.addEventListener('input', (event) => {
    formValues.phone = event.target.value;
    updateButton();
});

inputPassword.addEventListener('input', (event) => {
    formValues.password = event.target.value;
    updateButton();
});
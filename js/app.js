//Collapsible navigation
(function (navigation) {
    const menuIcon = document.querySelector('.dropdown__menu');
    const closeIcon = document.querySelector('.dropdown__close');
    const menuIconBox = document.querySelector('.dropdown__menu-box');
    const closeIconBox = document.querySelector('.dropdown__close-box');

    const navList = document.querySelector('.navigation-list');
    const navItems = document.querySelector('.navigation-list__items');


    menuIcon.addEventListener('click', () => {
        navList.classList.add('visible');
        menuIconBox.classList.add('hidden');
    })


    closeIcon.addEventListener('click', () => {
        navList.classList.remove('visible');
        menuIconBox.classList.remove('hidden');
    })
})();


//Contact form validation
(function form() {
    const form = document.querySelector('.contact__form');
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const telInput = document.querySelector('input[name="tel"]');


    function showErrMsg(input, message) {
        let container = input.parentElement;

        //Remove an exisiting error
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        //Add the error if the message is not empty
        if (message) {
            let error = document.createElement('p');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    };


    function validateNameInput() {
        if (!nameInput.value) {
            showErrMsg(nameInput, 'Name is a required filed');
            return false;
        }

        showErrMsg(nameInput, null);
        return true;
    };


    function validateEmailInput() {
        if (!emailInput.value) {
            showErrMsg(emailInput, 'Email is a required filed');
            return false;
        } else if (emailInput.value.indexOf('@') === -1
            || emailInput.value.indexOf('.') === -1) {
            showErrMsg(emailInput, 'Enter a valid email address');
            return false;
        }

        showErrMsg(emailInput, null);
        return true;
    };


    function validateTelInput() {
        const parsedInput = Number(telInput.value);
        if (isNaN(parsedInput)) {
            showErrMsg(telInput, 'Enter a valid telephone number');
            return false;
        }

        showErrMsg(telInput, null);
        return true;
    };


    function validateForm() {
        const isValidNameInput = validateNameInput();
        const isValidEmailInput = validateEmailInput();
        const isValidTelInput = validateTelInput();

        return isValidNameInput && isValidEmailInput && isValidTelInput;
    };


    nameInput && nameInput.addEventListener('input', validateNameInput);
    emailInput && emailInput.addEventListener('input', validateEmailInput);
    telInput && telInput.addEventListener('input', validateTelInput);

    form && form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted!');
        } else {
            alert('Please make adjustment to fullfill requirments')
        }
    });

})();
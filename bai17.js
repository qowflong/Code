const form = document.getElementById('registerForm');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const messageElement = formGroup.querySelector('.message');
    messageElement.innerText = `✗ ${message}`;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
    const messageElement = formGroup.querySelector('.message');
    messageElement.innerText = '✓ Hợp lệ';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkFullname() {
    const fullnameValue = fullnameInput.value.trim();
    if (fullnameValue === '') {
        showError(fullnameInput, 'Họ và tên không được để trống');
        return false;
    } else {
        showSuccess(fullnameInput);
        return true;
    }
}

function checkEmail() {
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        showError(emailInput, 'Email không được để trống');
        return false;
    } else if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Email không hợp lệ (thiếu tên miền)');
        return false;
    } else {
        showSuccess(emailInput);
        return true;
    }
}

function checkPassword() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === '') {
        showError(passwordInput, 'Mật khẩu không được để trống');
        return false;
    } else if (passwordValue.length < 6) {
        showError(passwordInput, 'Mật khẩu phải có ít nhất 6 ký tự');
        return false;
    } else {
        showSuccess(passwordInput);
        return true;
    }
}

function checkConfirmPassword() {
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (confirmPasswordValue === '') {
        showError(confirmPasswordInput, 'Vui lòng xác nhận lại mật khẩu');
        return false;
    } else if (confirmPasswordValue !== passwordValue) {
        showError(confirmPasswordInput, 'Xác nhận mật khẩu không trùng khớp');
        return false;
    } else {
        showSuccess(confirmPasswordInput);
        return true;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const isFullnameValid = checkFullname();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isConfirmPasswordValid = checkConfirmPassword();

    const isFormValid = isFullnameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

    if (isFormValid) {
        alert('Đăng ký tài khoản thành công!');
        form.reset();
        
        [fullnameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
            input.parentElement.className = 'form-group';
        });
    }
});

[fullnameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
    input.addEventListener('input', function () {
        if (input === fullnameInput) checkFullname();
        if (input === emailInput) checkEmail();
        if (input === passwordInput) {
            checkPassword();
            if (confirmPasswordInput.value.trim() !== '') {
                checkConfirmPassword();
            }
        }
        if (input === confirmPasswordInput) checkConfirmPassword();
    });
});
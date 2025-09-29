// Fungsionalitas toggle password untuk Kata Sandi
const togglePassword1 = document.querySelector('#togglePassword1');
const passwordInput = document.querySelector('#password');

if (togglePassword1) {
    togglePassword1.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
}

// Fungsionalitas toggle password untuk Konfirmasi Kata Sandi
const togglePassword2 = document.querySelector('#togglePassword2');
const confirmPasswordInput = document.querySelector('#confirm-password');

if (togglePassword2) {
    togglePassword2.addEventListener('click', function () {
        const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
}
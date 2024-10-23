document.addEventListener("DOMContentLoaded", function () {
    const togglePasswordIcons = document.querySelectorAll('.fa-eye, .fa-eye-slash');
    
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const passwordInput = this.previousElementSibling;
            const isPasswordVisible = passwordInput.getAttribute('type') === 'password';

            if (isPasswordVisible) {
                passwordInput.setAttribute('type', 'text');
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
                this.classList.add('eye-active'); // Adiciona a cor ao ícone
            } else {
                passwordInput.setAttribute('type', 'password');
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
                this.classList.remove('eye-active'); // Remove a cor ao ícone
            }
        });
    });
});

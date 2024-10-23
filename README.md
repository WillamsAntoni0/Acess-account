<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/6ca0558071.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="form1.css">
   </head>
<body>
    <div class="tela">
        <form>
            <h1>Login</h1>
            <p>Digite os dados de acesso nos campos abaixo</p>
            <p class="titulos_input"><strong>E-mail</strong></p>
            <input type="email" placeholder="Digite seu Email" class="input" required>
             <p class="titulos_input"><strong>Senha</strong></p>
            <div class="input-wrapper">
                <input type="password" placeholder="Digite sua senha" class="input" id="senha1" required>
                <i class="fa-regular fa-eye" id="eye1"></i>
            </div>
             <br><br>
            <a href="senha.html">Esqueci minha senha</a>
            <br><br>
            <button><strong>Acessar</strong></button>
        </form>
    </div>
<script>
        document.addEventListener("DOMContentLoaded", function () {
            const togglePasswordIcon = document.getElementById('eye1');
            const passwordInput = document.getElementById('senha1');
togglePasswordIcon.addEventListener('click', function () {
                const isPasswordVisible = passwordInput.getAttribute('type') === 'password';
           if (isPasswordVisible) {
                    passwordInput.setAttribute('type', 'text');
                    togglePasswordIcon.classList.add('eye-active');
                    togglePasswordIcon.classList.remove('fa-eye');
                    togglePasswordIcon.classList.add('fa-eye-slash');
                } else {
                    passwordInput.setAttribute('type', 'password');
                    togglePasswordIcon.classList.remove('eye-active');
                    togglePasswordIcon.classList.remove('fa-eye-slash');
                    togglePasswordIcon.classList.add('fa-eye');
                }
            });
        });
    </script>
</body>
</html>

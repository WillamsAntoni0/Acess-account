<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="redefinir.css">
    <script>
        function togglePasswordVisibility(index) {
            const passwordField = document.querySelectorAll('.password-input')[index];
            const eyeIcon = document.querySelectorAll('.toggle-eye')[index];
        if (passwordField.type === 'password') {
                passwordField.type = 'text';
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            } else {
                passwordField.type = 'password';
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            }
        }
    </script>
</head>
<body>
    <form action="">
        <div class="div-mae">
            <h1>Redefinir sua senha</h1>
            <p id="titulo">Preencha os campos abaixo</p>
            <p id="titulo-1">Digite sua nova senha</p>
            <br>
            <div class="input-wrapper">
                <input type="password" class="password-input" required>
                <i class="fa fa-eye-slash toggle-eye" onclick="togglePasswordVisibility(0)"></i>
            </div>
            <br><br><br>
            <div class="input-wrapper">
                <input type="password" class="password-input" required>
                <i class="fa fa-eye-slash toggle-eye" onclick="togglePasswordVisibility(1)"></i>
            </div>
            <br><br>
            <button type="submit"><strong>REDEFINIR</strong></button>
            <br>
            <a href="">Cancelar</a>
        </div>
    </form>
</body>
</html>
# Acess-account

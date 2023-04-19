var _login = 'admin'
var _password = '123'
var acertou = false;

do{
var userLogin = prompt('Digite seu Login\n');
var userPass  = prompt('Digite sua senha\n');
    if (userLogin== _login && userPass==_password)
    acertou = true
    else
        alert("Errou seu Pipoqueiro")
} while (!acertou)

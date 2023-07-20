const button = document.getElementById("main-button");
const email = document.getElementsByTagName("input")[0];
const password = document.getElementsByClassName("inputpassword")[0];

function login() {
    if (email.value === password.value) {
        alert("Bem-vindo ao site");
    } else {
        alert("Usuário ou senha incorreta");
    }
}

button.addEventListener("click", login);
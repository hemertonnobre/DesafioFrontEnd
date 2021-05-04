
//Carrega o modal ao iniciar a paguina
window.addEventListener("load", function () {
    if (localStorage.getItem("displayModal") == null || localStorage.getItem("displayModal") != "false") {
        abrirModal();
    }

});

//Valida os input e adiciona classes de verificação 
document.querySelectorAll("input").forEach(element => {
    element.addEventListener("keyup", function (event) {
        let input = event.target;
        if (input.checkValidity()) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        } else {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
        }
    });
});
// Abre o modal.
function abrirModal() {
    let modal = document.querySelector(".leed-modal");
    modal.style.display = "block";
}
// Fecha o modal
function fecharModal() {
    let modal = document.querySelector(".leed-modal");
    modal.style.display = "none";
}
//Valida o formulario, e verifica a opção do checkbox e salva e informação no cache.
function enviarInfo() {
    let form = document.querySelector(".needs-validation");
    let nome = document.querySelector("#nome");
    let email = document.querySelector("#email");
    let cache = document.querySelector('#cache');
    let valid = form.checkValidity();
    if (!valid) {
        if (!nome.checkValidity())
            nome.classList.add("is-invalid");

        if (!email.checkValidity())
            email.classList.add("is-invalid");
    } else {
        if (cache.checked)
            localStorage.setItem("displayModal", false)
        fecharModal();
    }
}
//limpa o cache ao clicar na logo.
function limparStorage() {
    localStorage.clear();
}


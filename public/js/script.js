
window.addEventListener("load",function(){ 
    if(localStorage.getItem("displayModal") == null || localStorage.getItem("displayModal") != "false" ){
        abrirModal();
    } 
   
});
function abrirModal(){
    let modal = document.querySelector(".leed-modal");
    modal.style.display="block";
}
function fecharModal(){
    let modal = document.querySelector(".leed-modal");
    modal.style.display="none";
}
function enviarInfo(){
    if(document.querySelector('#cache').checked){
        localStorage.setItem("displayModal",false)
    }  
    fecharModal();
}
function limparStorage(){
    localStorage.clear();
    
}
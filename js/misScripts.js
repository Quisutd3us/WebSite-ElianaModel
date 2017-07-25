$(function () {
    var formulario = document.getElementById('frmContacto');

    formulario.onsubmit = function (e) {
        e.preventDefault();
        var resutado = isValidEmail();
        var dataEmail = document.getElementById('email');
        if (resutado) {
            alert("Gracias, dentro de poco un representante se contactara con usted !!");
            dataEmail.value = "";
        } else {
            alert("Revise su email");
        }
    }
    var isValidEmail = function () {
        var dataEmail = document.getElementById('email');
        return /^\w+([\.\+\-\_]?\w+)*@([\.\-]?\w+)*(\.\w{2,4})+$/.test(dataEmail.value);
    }
});
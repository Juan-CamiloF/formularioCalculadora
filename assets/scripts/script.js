const alertaNombre = document.getElementById('alertaNombre');
const alertaApellido = document.getElementById('alertaApellido');
const alertaEmail = document.getElementById('alertaEmail');
const alertaPassword = document.getElementById('alertaPassword');
const alertaTyC = document.getElementById('alertaTyC');

function validarFormulario(e) {
    e.preventDefault();
    const inputName = document.getElementById('name')
    const inputApellido = document.getElementById('apellido')
    const inputEmail = document.getElementById('email')
    const inputPassword = document.getElementById('password')
    const inputTyC = document.getElementById('inputTyC')
    if (inputName.value == '') {
        alertaNombre.innerText='Por favor llene el campo nombre';
        inputName.classList.add('bgcAlert')
    }
    if (inputApellido.value == ''){
        alertaApellido.innerText='Por favor llene el campo apellido';
        inputApellido.classList.add('bgcAlert')
    }
    if(inputEmail.value == ''){
        alertaEmail.innerText='Por favor llene el campo email';
        inputEmail.classList.add('bgcAlert')
    }
    if(inputPassword.value == ''){
        alertaPassword.innerText='Por favor llene el campo contraseña';
        inputPassword.classList.add('bgcAlert')
    }
    if(inputTyC.checked == false){
        alertaTyC.innerText = 'Acepte terminos y condiciones';
    }
    if(inputName.value != '' && inputApellido.value != '' && inputEmail.value !='' && inputPassword.value !='' && inputTyC.checked){
        swal("Buen trabajo!", "Estás registrado!", "success");
        setTimeout(()=>{
            window.location = 'assets/html/calculadora.html';
        },2000);
    }
}
function validarFormulario (event) {
    event.preventDefault();
    
    const email = window.document.getElementById('email');
    const password = window.document.getElementById('password');
    const confirmPassword = window.document.getElementById("confirmPassword");
    
    const messageEmail= window.document.getElementsByClassName("message-email");
    const messagePassword = window.document.getElementsByClassName("message-password");
    const messageConfirmPassword = window.document.getElementsByClassName ('message-confirmPassword');
    const messageCheckPassword = window.document.getElementsByClassName ('message-fields-pswd');

    console.log('valores : ', email, password, confirmPassword);
    
    if(email.value == '') {
        email.classList.add('error');
        messageEmail[0].classList.add("mostra-a-messagem-de-erro");
    }
    if(password.value ==''){
        password.classList.add('error');
        messagePassword[0].classList.add('mostra-a-messagem-de-erro')
    }

    if(confirmPassword =='')
    confirmPassword.classList.add('error');
    }

    if(password.value ==confirmPassword.value){

    }


let sliderElment = document.querySelector("#slider");
let buttonElment = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

const selectElement = document.getElementById('passwordType');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*(){}[]<>,.?;:^~|'";
let novaSenha = "";


    // Adiciona um evento change ao select
    selectElement.addEventListener('change', function() {
        // Obtém o valor selecionado
        const selectedValue = selectElement.value;
        console.log('Tipo de senha selecionado:', selectedValue);

        switch (parseInt(selectedValue)){

            case 1:
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*(){}[]<>,.?;:^~|'";
                break
    
            case 2:
                charset = "0123456789";
                break
    
            case 3:
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                break  
                
            default:
                charset = "";    
        }

    });



sizePassword.innerHTML = sliderElment.value;

sliderElment.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword() {

    let pass = "";
     for(let i = 0, n = charset.length; i < sliderElment.value; i++) {
       pass += charset.charAt(Math.floor(Math.random() * n)); 
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}

const email= document.querySelector(" .email");
const pass = document.querySelector(".inp .pass");
const con = document.querySelector(".inp .confirm");
const button = document.querySelector(" .button");

const error_email = document.querySelector("#email");
const error_pass = document.querySelector("#pass");
const error_confirm = document.querySelector("#confirm");

function myEmail(){
    if(email.value.length <= 8){
        error_email.classList.add("para")
    }else{
        error_email.classList.remove("para");
    }
}


function myPass() {
    if (pass.value.length < 6 ) {
        error_pass.classList.add("para");
               
     }else{
        error_pass.classList.remove("para");
               
     }
    
}

function myConfirm() {
    if (con.value == pass.value ) {
        error_confirm.classList.remove("para");
        button.classList.add("active");
        
    }else{
        
        error_confirm.classList.add("para");
     }
    
}

email.addEventListener("input", myEmail);

pass.addEventListener("input", myPass);

con.addEventListener("input", myConfirm);











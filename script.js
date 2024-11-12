let eyeicon = document.getElementById("eye");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if (password.type == "password"){
        password.type  = "text";

    }else{
        password.type = "password";
    }
}

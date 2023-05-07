function login(){
    var user, pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;
        
    if(user == "Franz" && pass == "1234"){
            window.location = "pagina.html";
    }else{
        alert('Usuario y Contraseña Equivocada..!!!');
    }
 }

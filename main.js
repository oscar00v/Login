function Singin() {
    let username = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("error");
 
    if(username === "admin" && password === "admin") {
        alert("Login successful!");
        message.innerText = "test";
        return true;
    } else {
        alert("Invalid username or password.");
        message.style.color = "red";
        message.innerText = "Contraseña invalida";
        return false;
    }
}
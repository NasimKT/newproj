function togglePasswordVisibility() {
    var passwordInput = document.getElementById("pas");
    var showIcon = document.getElementById("show");
    var hideIcon = document.getElementById("hide");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showIcon.style.display = "block";
        hideIcon.style.display = "none";
        
    } else {
        passwordInput.type = "password";
        showIcon.style.display = "none";
        hideIcon.style.display = "block";
    }
}
function toggleConPasswordVisibility() {
    var passwordInput = document.getElementById("con-pas");
    var showIcon = document.getElementById("show1");
    var hideIcon = document.getElementById("hide1");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showIcon.style.display = "block";
        hideIcon.style.display = "none";
        
    } else {
        passwordInput.type = "password";
        showIcon.style.display = "none";
        hideIcon.style.display = "block";
    }
}

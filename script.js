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
function passwordVisibility() {
    var passwordInput = document.getElementById("si-pas");
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
function si_validate() {
    if (document.getElementById("si-name").value.length === 0) {
        document.getElementById("si-name").style.border = "1px solid red";
        document.getElementById("err_name").style.display = "block";
        //return false;
    }
    if (document.getElementById("si-email").value.length === 0) {
        document.getElementById("si-email").style.border = "1px solid red";
        document.getElementById("err_email").style.display = "block";
        //return false;
    }
    if (document.getElementById("si-pas").value.length === 0) {
        document.getElementById("si-pas").style.border = "1px solid red";
        document.getElementById("err_pas").style.display = "block";
        //return false;
    }
}

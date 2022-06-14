function LoginAnimation(){
    loginbutton.style.display = "none";
    loading.style.display = "block";
    setTimeout(function(){   
        window.location="desktop.html";
        }, 5000);
}
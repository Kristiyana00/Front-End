function toLogin(){
    let errors = document.getElementById("errors");
        errors.innerHTML = "";
        let validateEmail = document.getElementById("user_email").value;
            let validatePassword = document.getElementById("user_password").value;
            window.auth.login(validateEmail, validatePassword, function(isSuccessful,errorCode, errorMessage){
                if (isSuccessful) {
                    alert("Влизането е успешно!");
                    location.replace("./posts.html");
                } else {
                    errors.innerText = errorMessage;
                }
            });
}
function toRegister()
{
    let username = document.getElementById("usernameid").value;
    let validateEmail = document.getElementById("user_email").value;
    let validatePassword = document.getElementById("user_password").value;
    window.auth.register(username, validateEmail, validatePassword, function(isSuccessful,errorCode, errorMessage){
        if(isSuccessful){
            alert("Регистрацията е успешна!");
            location.replace("./posts.html");
        }
        else
        {
            errors.innerText = errorMessage;
        }
    });

}

toValidate = {formValidation(formId){
    
    if(this.passValidation() && this.emailValidation())
    {
        let errors = document.getElementById("errors");
        errors.innerHTML = "";
        if(formId === "login-form"){
            alert("Влизането е успешно!");    
        }
        else if(formId === "register-form")
        {
            alert("Регистрацията е успешна!");
        }
    }
}
,
passValidation()
{
    let pass = document.getElementById("user_password").value;
    let errors = document.getElementById("errors");

    if(pass.length < 6)
    {
        errors.innerText = ("Your password must be at least 6 characters");
        return false;
    }

    if(!/[a-z]/.test(pass))
    {
        errors.innerText = ("Your password must contain at least one lowercase letter");
        return false;
    }

    if(!/[A-Z]/.test(pass))
    {
        errors.innerText = ("Your password must contain at least one uppercase letter.");
        return false;
    }
    if(!/[0-9]/.test(pass))
    {
        errors.innerText = ("Your password must contain at least one digit.")
        return false;
    }
    if(!/[\!\@\#\$\%\^\&]/.test(pass))
    {
        errors.innerText = ("Your password must contain at least one special character.");
        return false;
    }

    return true;
}

, emailValidation()
{
    let checkEmail = document.getElementById("user_email").value;
    let errors = document.getElementById("errors");

    if(checkEmail.length < 5){
        errors.innerText = "Email must be at least 5 characters.";
        return false;
    }

    if(checkEmail.indexOf("@") === -1)
    {
        errors.innerText = "Email must contain '@'.";
        return false;
    }

    let domain = checkEmail.split("@")[1];
    if(domain.indexOf(".") === -1)
    {
        errors.innerText = "The domain must contain a '.'.";
        return false;
    }

    return true;
}


}

document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let formId = form.id;
        let isValid = toValidate.formValidation.bind(toValidate)(formId);
        if(!isValid)
        {
            return;
        }
        if(formId === "register-form")
        {
            toRegister();
        }
        else if(formId === "login-form")
        {
            toLogin();
        }
        else
        {
            return;
        }
    })
});

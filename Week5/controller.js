toValidate = {formValidation(formId){
    /*let user_email = document.getElementsByName("email");
    let user_pass = document.getElementsByName("password");*/
    if(this.passValidation() && this.emailValidation())
    {
        document.getElementById("errors").innerHTML = "";
        if(formId === "register-form"){
            alert("Регистрацията е успешна!");
        }
        else if(formId === "login-form")
        {
            alert("Влизането е успешно!");
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
        toValidate.formValidation.bind(toValidate)(formId);
    })
});
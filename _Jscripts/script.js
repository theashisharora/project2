document.form1.onsubmit = function() {
    var isValid = true;

    var name = document.getElementById("name").value;
    var nameErr = document.getElementById("nameErr");
    if(name == "") 
    {
        nameErr.innerHTML = "Name is Required";
        isValid = false;
    }
    else
    {
        nameErr.innerHTML = "";
    }

    var pass = document.getElementById("password").value;
    var passwordErr = document.getElementById("passwordErr");
    if(pass == "") 
    {
        passwordErr.innerHTML = "Password is Required";
        isValid = false;
    }

    else if(pass.length < 6) 
    {
        passwordErr.innerHTML = "Password must be at least 6 characters long";
        isValid = false;
    }

    else
    {
        passwordErr.innerHTML = "";
    }


    var cPass = document.getElementById("cPassword").value;
    var cPasswordErr = document.getElementById("cPasswordErr");
    if(cPass != pass) 
    {
        cPasswordErr.innerHTML = "Password is Not Matching";
        isValid = false;
    }

    else
    {
        cPasswordErr.innerHTML = "";
    }


    var address = document.getElementById("address").value;
    var addressErr = document.getElementById("addressErr");
    if(address == "") 
    {
        addressErr.innerHTML = "Address is required";
        isValid = false;
    }

    else
    {
        addressErr.innerHTML = "";
    }

    var city = document.getElementById("city").value;
    var cityErr = document.getElementById("cityErr");
    if(city == -1) 
    {
        cityErr.innerHTML = "Select a City";
        isValid = false;
    }

    else
    {
        cityErr.innerHTML = "";
    }

    var english = document.getElementById("english").checked;
    var nonEnglish = document.getElementById("nEnglish").checked;
    var languageErr = document.getElementById("languageErr");

    if(!english && !nonEnglish)
    {
        languageErr.innerHTML = "Select at least one language";
        isValid = false;
    }

    else if(english && nonEnglish)
    {
        languageErr.innerHTML = "Select at most one language";
        isValid = false;
    }

    else
    {
        languageErr.innerHTML = "";
    }

    return isValid;
}
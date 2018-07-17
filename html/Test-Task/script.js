function validate() {
    let result = "";
    result += validateName();
    result += validateEmail();
    result += validatePhone();

    if (result === "") return true;
    alert("Validation Result:\n\n" + result);
    return false;
}

function validateName() {
    let name = document.querySelector("input[name]").value;
    console.log(name);
    if (name.length <= 3)
        return "Имя должно быть минимум из трех символов.\n";
    return "";
}


function validateEmail() {
    let email = valueOf("email");
    if (email.indexOf('@') === -1)
        return "Введите валидный адрес почты.\n";
    return "";


}

function validatePhone() {
    let phone = valueOf("phone");
    console.log(phone);
    let phoneValid = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    let phoneResult = phoneValid.test(phone);
    console.log(phoneResult);
    if (phoneResult === true) {
        return ""
    }
    else {
        return "Введите телефон правильно";
    }
}

function valueOf(name) {
    return document.getElementsByName(name)[0].value;
}

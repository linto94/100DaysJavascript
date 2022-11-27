const empty = "",
uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lCase = "abcdefghijklmnopqrstuvwxyz",
number = "0123456789",
symbol = "!@#$%^&*=_";

const pLength = document.getElementById("p-length"),
 upperCase = document.getElementById("p-uppercase"),
 lowerCase = document.getElementById("p-lowercase"),
 pNumber = document.getElementById("p-number"),
 pSymbol = document.getElementById("p-symbol"),
 submit = document.getElementById("submit");
 password = document.getElementById("password");
 copy = document.getElementById("copy");

 submit.addEventListener("click", () =>{
    let initalPassword = empty;
    // Add Character if Option is chceked
    upperCase.checked ? (initalPassword += uCase) : "";
    lowerCase.checked ? (initalPassword += lCase) : "";
    pNumber.checked ? (initalPassword += number) : "";
    pSymbol.checked ? (initalPassword += symbol) : "";

    password.value = generatePassword(pLength.value, initalPassword)
 });

 function generatePassword(l, initalPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += initalPassword.charAt(
            Math.floor(Math.random() * initalPassword.length)
        );
    }
    return pass;
 }


 copy.addEventListener("click", () =>{
    if (password.value == "") {
        alert("Please genetrate  a password");
    } else {
        password.select();
        document.execCommand("copy")
        alert("Password has been coied to clipboard");
    }
 });
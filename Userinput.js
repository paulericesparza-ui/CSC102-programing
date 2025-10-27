
const Areacode = document.getElementById("AreaCode");
let validname = false
let validcode = false

function Combine() {
const resultField = document.getElementById("result");
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const Combined = FirstName.value + " " + LastName.value;
length = Combined.length

if (length > 20) {
    resultField.innerHTML = "This is over 20 Characters!";
    validname = false
}
else {
    resultField.innerHTML = "Name Inputted Successfully"
    validname = true
}
AreaCombine();
checkboth();
}

function AreaCombine() {
    const results = document.getElementById("result2");
    length=Areacode.value.length
    if (length == 5) {
        results.innerHTML = "Area Code Accepted!"
        validcode = true
    }
    else {
        results.innerHTML = "Area Code Denied!"
        validcode = false
    }
    checkboth();
}

function checkboth() {
    const combinedresult = document.getElementById("secret")
if (validcode == true && validname == true) {
    combinedresult.innerHTML = "You found my secret message!"
} else {
    combinedresult.innerHTML = ""

}
}
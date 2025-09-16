// Password Validator :- 
let validate = prompt("Enter A Password");
let check = validate.length
if (check > 0 && check <= 5) {
    console.log(validate, " Your Password Is Very-Weak")
}
else if (check >= 6 && check <= 8) {
    console.log(validate, " Your Password Is Weak")
}
else if (check >= 9 && check <= 11) {
    console.log(validate, " Your Password Is Strong")
}
else if (check >= 12 && check <= 15) {
    console.log(validate, " Your Password Is Very-Strong")
}
else {
    console.log(validate, "Your Password Is Very Long Maximum 15 Character.")
}
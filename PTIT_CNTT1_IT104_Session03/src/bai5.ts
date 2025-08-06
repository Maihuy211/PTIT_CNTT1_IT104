let firstName: string = "mai";
let lastName: string = "huy";
let resultFirst = ""
let resultLast = ""

for (let i = 0; i < firstName.length; i++) {
    resultFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    break;
}

for (let i = 0; i < lastName.length; i++) {
    resultLast = lastName.charAt(0).toUpperCase() + lastName.slice(1)
    break;
}

let fullName: string = resultFirst + " " + resultLast

document.write(fullName)

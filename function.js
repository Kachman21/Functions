// 2 raise 2
let twoRaiseTo2 = Math.pow(2, 2)
console.log("2 raise to the power of 2 is:", twoRaiseTo2)
// 2 raaise to 3
let twoRaiseTo3 = Math.pow(2, 3)
console.log("2 raise to the power of 3 is: ", twoRaiseTo3)
// 6 raise to the power 2
let sixRaiseTo2 = Math.pow(6, 2)
console.log("6 raise to the power of 2 is: ", sixRaiseTo2)
function square() {
    console.log(2 ** 2)
}

for (let count =1; count < 10; count++){
// invoke
    square()
}

function printName() {
    console.log("Kevin Hunter")
}
 
printName()


function multiply() {
    let number1 =2
    let number2 =4

    let multiply= number1 * number2

    let message= "2 times 4 is: " + multiply

    console.log(message)
    // return message
}

multiply()


function addition() {
    let number1 = 2
    let number2 = 4

    let addition= number1 + number2
    let message= "2 plus 4 is: " + addition

    console.log(message)

    
}
addition()

function multiplication(a, b) {
let product = a * b
console.log(product)

}




function subtraction(a, b) {
let product = a - b
console.log(product)
}

subtraction(2,2)

let m = multiply(8, 3)
console.log(m)


let a = addition(7, m)
addition


let b = subtraction(8, 2)
console.log(b)
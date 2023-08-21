class Calculator{
    add(num1, num2){
        console.log(num1+num2)
    }
    subtract(num1, num2){
        console.log(num1-num2)
    }
    multiply(num1, num2){
        console.log(num1*num2)
    }
    divide(num1, num2){
        console.log(num1/num2)
    }
}

const calculator = new Calculator()
calculator.add(10, 5)
calculator.subtract(10, 5)
calculator.multiply(10, 5)
calculator.divide(10, 5)
function generatePrimes() {
    const primeCount = document.getElementById('Count').value;
    let primes = [];
    let num = 2;
    while (primes.length < primeCount) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    document.getElementById('Result').innerText = primes.join(', ');
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num !== 1 && num !== 0;
}

function fact() {
    let num = document.getElementById('factorial').value;
    let fact = 1;
    while (num > 1) {
        fact = fact * num;
        num--;
    }
    document.getElementById('FactResult').innerText = fact;
}

let matrixA = [];
let matrixB = [];

function inputMatrices() {
    matrixA = inputMatrix("A");
    matrixB = inputMatrix("B");
}

function inputMatrix(name) {
    const rows = parseInt(prompt(`Enter the number of rows for Matrix ${ name }:`));
    const cols = parseInt(prompt(`Enter the number of columns for Matrix ${ name }:`));
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = parseInt(prompt(`Enter element at position(${ i + 1},${ j + 1 }):`));
    }
}
return matrix;
    }

function multiplyMatrices() {
    const resultMatrix = [];

    if (matrixA[0].length !== matrixB.length) {
        document.getElementById("result").innerText = "Matrices are not valid for multiplication.";
        return;
    }

    for (let i = 0; i < matrixA.length; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrixB.length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            resultMatrix[i][j] = sum;
        }
    }

    document.getElementById("result").innerText = "Result:\n" + matrixToString(resultMatrix);
}

function matrixToString(matrix) {
    return matrix.map(row => row.join("\t")).join("\n");
}

function changeBackgroundColor() {
    document.querySelector('.background').style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function displayAgeGroup() {
    const age = parseInt(document.getElementById('ageInput').value);
    let ageGroup = '';
    if (age < 13) {
        ageGroup = 'Child';
    } else if (age < 20) {
        ageGroup = 'Teenage';
    } else if (age < 65) {
        ageGroup = 'Young';
    } else {
        ageGroup = 'Senior citizen';
    }
    document.getElementById('ageGroup').innerText = 'Age Group: ' + ageGroup;
}

function add() {
    performOperation((a, b) => a + b);
}

function subtract() {
    performOperation((a, b) => a - b);
}

function multiply() {
    performOperation((a, b) => a * b);
}

function divide() {
    performOperation((a, b) => {
        if (b !== 0) {
            return a / b;
        } else {
            return 'Undefined';
        }
    });
}

function performOperation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = operation(num1, num2);
    document.getElementById('calculatorResult').innerText = 'Result: ' + result;
}
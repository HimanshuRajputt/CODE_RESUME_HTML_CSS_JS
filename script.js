function addNumbers(num1, num2) {
    return num1 + num2;
}

function handleCalculate() {
    const num1 = 5;
    const num2 = 10;
    const sum = addNumbers(num1, num2);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Sum of ${num1} and ${num2} is: ${sum}`;
}

document.getElementById('calculate-btn').addEventListener('click', handleCalculate);
